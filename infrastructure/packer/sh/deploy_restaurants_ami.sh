#!/bin/bash

set -ex

apt-get update

# change the hostname for this service
sudo hostname svc-restaurants

# Create the $HOME directory
echo "export HOME=/home/ubuntu" >> /home/ubuntu/.profile

# sudo mkdir -p /opt/restaurants
# sudo chmod 755 /opt/restaurants
# mv /home/ubuntu/FEC-Restaurant-Info-Module/* mv /home/ubuntu/FEC-Restaurant-Info-Module/.* /opt/restaurants/
# sudo -E chown -R ubuntu:ubuntu /opt/restaurants

sudo mv /tmp/restaurants /opt
sudo mv /tmp/pm2-restaurants /opt

sleep 10

sudo -E chown -R ubuntu:ubuntu /opt/restaurants
# sudo -E chown -R ubuntu:ubuntu /opt/pm2-restaurant

cd /opt/restaurants && npm install --legacy-peer-deps

sleep 10

(cd /opt/pm2-restaurants && sudo npm install)
#(cd /opt/pm2-restaurants && sudo npm start)
#(cd /opt/pm2-restaurants && sudo npm run save)
#(cd /opt/pm2-restaurants && sudo npm run startup)
