#!/bin/bash

set -x

### Set up Node.js from Nodesource
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash - 
sudo apt-get update
sudo apt-get upgrade -y 
sudo apt-get install -y nodejs mysql-client build-essential wget gnupg apt-transport-https ca-certificates unzip gcc make ntpdate curl git

# Setup sudo to allow no-password sudo for reviews-service group and adding "ubuntu" user
sudo groupadd -r reviews
sudo usermod -a -G reviews ubuntu
sudo cp /etc/sudoers /etc/sudoers.orig
echo "ubuntu ALL=(ALL) NOPASSWD:ALL" | sudo tee /etc/sudoers.d/ubuntu

#installing ssh key
sudo mkdir -p /home/ubuntu/.ssh
sudo chmod 700 /home/ubuntu/.ssh
#sudo cp /tmp/devkey.pub /home/ubuntu/.ssh/authorized_keys
#sudo chmod 600 /home/ubuntu/.ssh/authorized_keys
sudo chown -R ubuntu /home/ubuntu/.ssh
sudo usermod --shell /bin/bash ubuntu

# clone down Reviews_Module
# sudo -u ubuntu git clone https://github.com/letItBezhumphries/FEC-Reviews-Module.git

sudo apt-get clean