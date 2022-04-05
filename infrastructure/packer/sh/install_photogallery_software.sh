#!/bin/bash

set -x

### Set up Node.js from Nodesource
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash - 

# set up installation of mongodb-mongosh 
# Import the public key used by the package management system
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -

# create a list file for MongoDB:
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

# Reload local package database:
sudo apt-get update
sudo apt-get upgrade -y 
sudo apt-get install -y nodejs mongodb-mongosh build-essential wget gnupg apt-transport-https ca-certificates unzip gcc make ntpdate curl git

# Setup sudo to allow no-password sudo for "photogallery-service" group and adding "ubuntu" user
sudo groupadd -r photogallery
sudo usermod -a -G photogallery ubuntu
sudo cp /etc/sudoers /etc/sudoers.orig
echo "ubuntu ALL=(ALL) NOPASSWD:ALL" | sudo tee /etc/sudoers.d/ubuntu

#installing ssh key
sudo mkdir -p /home/ubuntu/.ssh
sudo chmod 700 /home/ubuntu/.ssh
sudo chown -R ubuntu /home/ubuntu/.ssh
sudo usermod --shell /bin/bash ubuntu

# clone down photogallery module
# sudo -u ubuntu git clone https://github.com/letItBezhumphries/FEC-Photogallery.git
sudo apt-get clean