#!/bin/bash

set -e

# sh build-and-launch.sh proxy-packer.json proxyami.tf PROXY_AMI_ID
# sh build-and-launch.sh photogallery-packer.json photogalleryami.tf PHOTOGALLERY_AMI_ID
# sh build-and-launch.sh restaurant-details-packer.json restaurantsami.tf RESTAURANTS_AMI_ID
# sh build-and-launch.sh reviews-packer.json reviewsami.tf REVIEWS_AMI_ID
# sh build-and-launch.sh mongoDb-packer.json mongodbami.tf MONGODB_AMI_ID
# Display what script the user called on the command line.
echo "You executed this shell script: ${0}"

# Display the path and filename of the script.
echo "You used $(dirname ${0}) as the path to the $(basename ${0}) script"

# store the number of parameters passed on the command line to the script
NUMBER_OF_PARAMETERS="${#}"

echo $NUMBER_OF_PARAMETERS

# the first parameter expects the packer template filename 
PACKER_TEMPLATE="${1}"

# show the filename entered 
echo "This is the packer template file: ${PACKER_TEMPLATE}"

FILE_NAME="${2}"

echo "This is the file that will be created: ${FILE_NAME}"

VARIABLE_NAME="${3}"

echo "This is the variable that will be created for the ami id: ${VARIABLE_NAME}"

# store output result value for ami id  
ARTIFACT=`packer build -machine-readable ${PACKER_TEMPLATE} | awk -F, '$0 ~/artifact,0,id/ {print $6}'`

# store the numeric ami id value
AMI_ID=`echo $ARTIFACT | cut -d ':' -f2`

# show AMI_ID
echo "This is the ami id: ${AMI_ID}"

TERRAFORM_VAR='variable "'${VARIABLE_NAME}'" { default = "'${AMI_ID}'" }'

echo $TERRAFORM_VAR

# redirect stdout to the file in the terraform directory
echo 'variable "'${VARIABLE_NAME}'" { default = "'${AMI_ID}'" }' > ../terraform/${FILE_NAME}
