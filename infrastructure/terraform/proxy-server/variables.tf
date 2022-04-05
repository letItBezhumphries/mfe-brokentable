variable "AMI_ID" {
  type = string
}

variable "PROJECT_TITLE" {
  type    = string
  default = "brokentable"
}

variable "SERVICE_NAME" {
  type    = string
  default = "svc-proxy"
} 

variable "INSTANCE_TYPE" {
  type    = string
  default = "t2.micro"
}

variable "SUBNET_ID" {
  type = string
  default = ""
}

variable "PRIVATE_IP" {
  type = string
  default = ""
}

variable "PUBLIC_SUBNET_IDS" {
  type = list(string)
  default = []
}

variable "VPC_SECURITY_GROUP_IDS" {
  type    = list(string)
  default = []
}

// variable "ELB_SECURITY_GROUP_IDS" {
//   type    = list(string)
//   default = []
// }

variable "RESTAURANTS_IP" {
  type = string
}

variable "REVIEWS_IP" {
  type = string
}

variable "PHOTOS_IP" {
  type = string
}

variable "PROXY_IP" {
  type = string
}

variable "KEY_PAIR" {
  type = string
}

variable "DOMAIN_NAME" {
  type    = string
  default = ""
}

variable "PROXY_PORT" {
  default = 3000
  type    = number
}

// variable "CERT_BODY" {}
// variable "CERT_CHAIN" {}
// variable "CERT_PRIVKEY" {}

// variable "SSL_CERTIFICATE_ARN" {
//   type = string
// }

// variable "HOSTED_ZONEID" {
//   type = string
// }

variable "EIP_ALLOCATION_ID" {
  type     = string
  default  = ""
}