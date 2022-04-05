#!/bin/bash

set -x

# Create .env file to store 'dotenv' variables needed to seed db
sudo -u ubuntu touch /opt/restaurants/.production.env
sudo -u ubuntu touch /opt/restaurants/.my.cnf

# Create the $HOME directory
echo "export HOME=/home/ubuntu" >> /home/ubuntu/.profile

# Add the variables passed in from cloudinit.tf to the .env file
cat > /opt/restaurants/.production.env << _EOF
RDS_USERNAME=${DB_USERNAME}
RDS_PASSWORD=${DB_PASSWORD}
RDS_HOST=${DB_HOST}
RDS_PORT=${DB_PORT}
PORT=${PORT}
DB_NAME=${DB_NAME}
RESTAURANTS_IP=${RESTAURANTS_IP}
REVIEWS_IP=${REVIEWS_IP}
PHOTOS_IP=${PHOTOS_IP}
PROD_REVIEWS_URL=http://${REVIEWS_IP}:1337/api/restaurants/
PROD_PHOTOS_URL=http://${PHOTOS_IP}:3003/api/restaurants/photos?
PROD_PHOTO_HEADER_URL=http://${PHOTOS_IP}:3003/api/restaurants/
PROD_RESTAURANT_URL=http://${RESTAURANTS_IP}:${PORT}/wild
PROD_HOST=http://${RESTAURANTS_IP}:${PORT}/wild
REVIEWS_PUBLIC=http://${REVIEWS_IP}:1337/
DETAILS_PUBLIC=http://${RESTAURANTS_IP}:${PORT}/
PHOTOS_PUBLIC=http://${PHOTOS_IP}:3003/
NODE_ENV=production
_EOF

# Add the variables and values to mysql client config file
cat > /opt/restaurants/.my.cnf << _EOF
[client]
user=${DB_USERNAME}
host=${DB_HOST}
password=${DB_PASSWORD}
_EOF

# Run the sql file against restaurant_details to add necessary tables
mysql --defaults-file=/opt/restaurants/.my.cnf -f ${DB_NAME} < /opt/restaurants/server/restaurants.sql

sleep 5

# # install packages with npm
cd /opt/restaurants && sudo npm install --legacy-peer-deps

# run the webpack build command
cd /opt/restaurants && npm run build

# create systemd service file to start and enable restaurant-server on ec2 launch
sudo -u ubuntu -E cat > /etc/systemd/system/restaurants.service << _EOF
[Unit]
Description=restaurant_server.js
Documentation=https://example.com
After=network.target
[Service]
Environment=HOME=/home/ubuntu RDS_USERNAME=${DB_USERNAME} RDS_PASSWORD=${DB_PASSWORD} RDS_HOST=${DB_HOST} RDS_PORT=${DB_PORT} DB_NAME=${DB_NAME} RESTAURANTS_IP=${RESTAURANTS_IP} NODE_ENV=production
ExecStart=/usr/bin/node /opt/restaurants/server/server.js
Type=simple
WorkingDirectory=/opt/restaurants
#Restart=always
#RestartSec=10
Restart=on-failure
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=restaurant-server
User=ubuntu
[Install]
WantedBy=multi-user.target
_EOF

# Enable and start restaurant-server as a service on boot
systemctl daemon-reload
systemctl enable restaurants
systemctl start restaurants