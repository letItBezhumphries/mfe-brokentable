#!/bin/bash

set -x

# Create .env file to store 'dotenv' variables needed to seed db
sudo -u ubuntu touch /opt/photogallery/.production.env

# Update the PATH variable to include the mongosh package download bin
echo "export PATH=/usr/bin/mongosh:$PATH" >> /home/ubuntu/.profile

# Add the variables passed in from cloudinit.tf to the .env file
cat > /opt/photogallery/.production.env << _EOF
MONGODB_USERNAME=${DB_USERNAME}
MONGODB_PASSWORD=${DB_PASSWORD}
MONGO_URI=${MONGO_URI}
CLUSTER_STRING=${CLUSTER_STRING}
ATLAS_HOST=${DB_HOST}
DB_PORT=${DB_PORT}
PHOTOS_IP=${PHOTOS_IP}
PORT=${PORT}
DB_NAME=${DB_NAME}
PROD_REQUEST_URL=http://${PHOTOS_IP}:${PORT}/api
PROD_PHOTOS_URL=http://${PHOTOS_IP}:${PORT}/api/restaurants/photos?
PHOTOS_PUBLIC=http://${PHOTOS_IP}:${PORT}/
NODE_ENV=production
_EOF

# seed mongodb database
#mongoimport --uri "mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}${DB_HOST}${DB_NAME}?retryWrites=true&w=majority" --drop --collection 'restaurants' --file /opt/photogallery/seed/photogalleries.json --jsonArray

# connect to the atlas mongodb deployment
mongosh "mongodb+srv://${DB_HOST}${DB_NAME}" --username ${DB_USERNAME} --password ${DB_PASSWORD}

# # install packages with npm
cd /opt/photogallery && sudo npm install

# # # run the webpack build command
cd /opt/photogallery && sudo npm run build

# create systemd service file to start and enable images-server on launch
sudo -E cat > /etc/systemd/system/photogallery.service << _EOF
[Unit]
Description=photogallery_server.js
Documentation=https://example.com
After=network.target
[Service]
Environment=HOME=/home/ubuntu MONGODB_USERNAME=${DB_USERNAME} MONGODB_PASSWORD=${DB_PASSWORD} CLUSTER_STRING=${CLUSTER_STRING} MONGO_URI=${MONGO_URI} ATLAS_HOST=${DB_HOST} PORT=${PORT} DB_NAME=${DB_NAME} DB_PORT=${DB_PORT} PHOTOS_IP=${PHOTOS_IP} NODE_ENV=production
ExecStart=/usr/bin/node /opt/photogallery/server/server.js
Type=simple
WorkingDirectory=/opt/photogallery
Restart=on-failure
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=svc-photogallery
User=ubuntu
[Install]
WantedBy=multi-user.target
_EOF

# Enable and start images-server as a service on boot
systemctl daemon-reload
systemctl enable photogallery
systemctl start photogallery





