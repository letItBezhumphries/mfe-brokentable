#   --------------------
#     global variables
#   --------------------

variable "MY_IP" {
  type    = string
}

variable "AWS_REGION" {
  type    = string
  default = "us-west-2"
}

variable "DOMAIN_NAME" {
  type     = string
  default  = ""
}

// variable "AWS_SECRET_ACCESS_KEY" {
//   type    = string
// }

// variable "AWS_ACCESS_KEY_ID" {
//   type    = string
// }

// variable "EMAIL_ADDRESS" {
//   type    = string
//   default = ""
// }



#   --------------------
#     svc-photogallery variables
#   --------------------

variable "PHOTOS_PORT" {
  type    = number
  default = 3003
}

variable "MONGO_PORT" {
  type    = number
  default = 27017
}

variable "ATLAS_HOST" {
  type    = string
  default = ""
}

variable "ATLAS_ORG_ID" {
  type    = string
  default = ""
}

variable "PHOTOS_DB_NAME" {
  default = ""
  type    = string
}

variable "ATLAS_PUBLIC_KEY" {
  type    = string
  default = ""
}

variable "ATLAS_PRIVATE_KEY" {
  type    = string
  default = ""
}

variable "CLUSTER_STRING" {
  type     = string
  default  = ""
}

variable "PROJECT_NAME" {
  type = string
}

variable "PROJECT_ID" {
  type = string
}

variable "MONGODB_PASSWORD" {
  default = ""
  type    = string
}

variable "MONGODB_USERNAME" {
  default = ""
  type    = string
}

variable "MONGO_URI" {
  default = ""
  type    = string
}

variable "PHOTOS_PRIVATE_IP" {
  default = ""
  type    = string
}

variable "PHOTOS_IP" {
  type    = string
  default = ""
}

#   --------------------
#     svc-restaurants variables
#   --------------------


variable "RESTAURANTS_DB_NAME" {
  type    = string
}

variable "RESTAURANTS_DB_PASS" {
  type    = string
}

variable "RESTAURANTS_DB_USER" {
  type    = string
}

variable "RESTAURANTS_PORT" {
  type    = number
}

variable "RESTAURANTS_IP" {
  type    = string
  default = ""
}

variable "RESTAURANTS_PRIVATE_IP" {
  default = ""
  type    = string
}

#   --------------------
#     svc-reviews variables
#   --------------------

variable "REVIEWS_PRIVATE_IP" {
  default = ""
  type    = string
}

variable "REVIEWS_DB_NAME" {
  type    = string
}

variable "REVIEWS_DB_PASS" {
  type    = string
}

variable "REVIEWS_DB_USER" {
  type    = string
}

variable "REVIEWS_PORT" {
  type    = number
}

variable "REVIEWS_IP" {
  type    = string
  default = ""
}


#   --------------------
#     svc-proxy variables
#   --------------------

variable "PROXY_PORT" {
  default = 3000
  type    = number
}

variable "PROXY_IP" {
  type    = string
  default = ""
}


// variable "AVAILABILITY_ZONES" {
//   type    = list(string)
//   default = []
// }

// variable "SSL_CERT_FILE_PATH" {
//   type = string
// }

// variable "SSL_PRIVATE_KEY_FILE_PATH" {
//   type = string
// }

// variable "SSL_CERTIFICATE_CHAIN_FILE_PATH" {
//   type = string
// }

#   --------------------
#     vpc variables
#   --------------------

variable "PUB1-CIDR" {
  type    = string
  default = ""
}

variable "PUB2-CIDR" {
  type    = string
  default = ""
}

variable "PUB3-CIDR" {
  type    = string
  default = ""
}

variable "PVT1-CIDR" {
  type    = string
  default = ""
}

variable "PVT2-CIDR" {
  type = string
  default = ""
}

variable "PVT3-CIDR" {
  type = string
  default = ""
}

#   --------------------
#     acme variables
#   --------------------

// variable "ACME_SERVER_URL_STAGING" {
//   type = string
// }


// variable "ACME_SERVER_URL_PROD" {

// }
