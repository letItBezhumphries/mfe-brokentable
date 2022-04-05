#!/bin/bash

set -ex

sudo apt-get update -y

# Create .env file to store env variables I might need
sudo -u ubuntu touch /opt/proxy/.production.env

# Add the variables passed in from cloudinit.tf to the .env file for the proxy-demo
cat > /opt/proxy/.production.env << _EOF
RESTAURANTS_IP=${RESTAURANTS_IP}
REVIEWS_IP=${REVIEWS_IP}
PHOTOS_IP=${PHOTOS_IP}
PORT=${PORT}
DOMAIN_NAME=${DOMAIN_NAME}
_EOF


#NGINX_PATH="/etc/nginx/conf.d/${DOMAIN_NAME}.conf"
#NGINX_PATH="/etc/nginx/sites-available/${DOMAIN_NAME}.conf"
#NGINX_PATH="/etc/nginx/sites-available/default"
NGINX_PATH="/etc/nginx/nginx.conf"

# show the domain path
echo $NGINX_PATH

# echo 'server {
#    listen 80;
#    listen [::]:80;

#    server_name "${DOMAIN_NAME}";

#    return 301 https://$host$request_uri;
# }

# server {
#   listen 443 http2;
#   listen [::]:443 http2;
  
#    server_name "${DOMAIN_NAME}";

#    location / {
#      proxy_pass "http://${RESTAURANTS_IP}:3001/index.html";
#      proxy_set_header Host $http_host;
#    }
# }' > $NGINX_PATH

# echo 'server {
#    listen 80;
#    listen [::]:80;

#    server_name "${DOMAIN_NAME}";

#    location / {
#      proxy_pass "http://${RESTAURANTS_IP}:3001/index.html";
#      proxy_set_header Host $host;
#    }
# }' > $NGINX_PATH

echo 'user www-data;
worker_processes auto;
pid /run/nginx.pid;
events {
        worker_connections 768;
        # multi_accept on;
}

http {
  server {
   listen 3000;

   server_name "${PROXY_IP}";

   location / {
     proxy_pass "http://${RESTAURANTS_IP}:3001/index.html";
     proxy_set_header Host $host;
   }
  }
}' > $NGINX_PATH


# create a symlink to run the configuration file
sudo ln -s $NGINX_PATH /etc/nginx/sites-enabled/

sudo nginx -t

sudo service nginx restart