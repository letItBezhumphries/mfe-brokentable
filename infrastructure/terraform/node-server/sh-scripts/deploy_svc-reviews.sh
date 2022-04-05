#!/bin/bash

set -x

# Create .env file to store 'dotenv' variables needed to seed db
sudo -u ubuntu touch /opt/reviews/.production.env
sudo -u ubuntu touch /opt/reviews/.my.cnf

# Add the variables passed in from cloudinit.tf to the .env file
cat > /opt/reviews/.production.env << _EOF
RDS_USERNAME=${DB_USERNAME}
RDS_PASSWORD=${DB_PASSWORD}
RDS_HOST=${DB_HOST}
RDS_PORT=${DB_PORT}
DB_NAME=${DB_NAME}
PORT=${PORT}
REVIEWS_IP=${REVIEWS_IP}
PROD_REVIEWS_API_URL=http://${REVIEWS_IP}:${PORT}/api/restaurants/
REVIEWS_PUBLIC=http://${REVIEWS_IP}:${PORT}/
NODE_ENV=production
_EOF

# Add the variables and values to mysql client config file
cat > /opt/reviews/.my.cnf << _EOF
[client]
user=${DB_USERNAME}
host=${DB_HOST}
password=${DB_PASSWORD}
_EOF

# Run the sql file against restaurant_details to add necessary tables
mysql --defaults-file=/opt/reviews/.my.cnf -e "CREATE DATABASE IF NOT EXISTS Review_Module"

sleep 5

# # install packages with npm
cd /opt/reviews && sudo npm install

# run the seeding script to seed the database
cd /opt/reviews && npm run seed

# run the webpack build command
cd /opt/reviews && npm run build

# If I do build here I need to configure aws and install awscli and set the access key id and secret access key as well as region,
# also don't forget need to add distribution id for cloudfront and bucket name for s3

# create systemd service file to run the start script for the reviews application server on system start
sudo -E cat > /etc/systemd/system/reviews.service << _EOF
[Unit]
Description=reviews_server.js
Documentation=https://example.com
After=network.target
[Service]
Environment=HOME=/home/ubuntu RDS_USERNAME=${DB_USERNAME} RDS_PASSWORD=${DB_PASSWORD} RDS_HOST=${DB_HOST} NODE_ENV=production RDS_PORT=${DB_PORT} DB_NAME=${DB_NAME} REVIEWS_IP=${REVIEWS_IP} 
ExecStart=/usr/bin/node /opt/reviews/server/server.js
Type=simple
WorkingDirectory=/opt/reviews
#Restart=always
#RestartSec=10
Restart=on-failure
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=reviews
User=ubuntu
[Install]
WantedBy=multi-user.target
_EOF

# Enable and start reviews-server as a service on boot
systemctl daemon-reload
systemctl enable reviews
systemctl start reviews