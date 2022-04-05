#!/bin/bash

set -ex

# change the hostname for this service
sudo hostname svc-photogallery

# Create the $HOME directory
echo "export HOME=/home/ubuntu" >> /home/ubuntu/.profile

# sudo mkdir -p /opt/photogallery
# sudo chmod 755 /opt/photogallery
# mv /home/ubuntu/FEC-Photogallery/* mv /home/ubuntu/FEC-Photogallery/.* /opt/photogallery/
# sudo -E chown -R ubuntu:ubuntu /opt/photogallery

sudo mv /tmp/photogallery /opt
sudo mv /tmp/pm2-photogallery /opt

sleep 10

sudo -E chown -R ubuntu:ubuntu /opt/photogallery


cd /opt/photogallery && sudo npm install

sleep 10

(cd /opt/pm2-photogallery && sudo npm install)
