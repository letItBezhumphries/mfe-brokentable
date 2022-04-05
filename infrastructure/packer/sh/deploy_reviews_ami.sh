#!/bin/bash

set -ex

apt-get update

# change the hostname for this service
sudo hostname svc-reviews

# Create the $HOME directory
echo "export HOME=/home/ubuntu" >> /home/ubuntu/.profile

# sudo mkdir -p /opt/reviews
# sudo chmod 755 /opt/reviews
# mv /home/ubuntu/FEC-Reviews-Module/* mv /home/ubuntu/FEC-Reviews-Module/.* /opt/reviews/
# sudo -E chown -R ubuntu:ubuntu /opt/reviews

sudo mv /tmp/reviews /opt
sudo mv /tmp/pm2-reviews /opt

sleep 10

sudo -E chown -R ubuntu:ubuntu /opt/reviews
# sudo -E chown -R ubuntu:ubuntu /opt/pm2-reviews

cd /opt/reviews && sudo npm install

sleep 10

(cd /opt/pm2-reviews && sudo npm install)
#(cd /opt/pm2-reviews && sudo npm start)
#(cd /opt/pm2-reviews && sudo npm run save)
#(cd /opt/pm2-reviews && sudo npm run startup)