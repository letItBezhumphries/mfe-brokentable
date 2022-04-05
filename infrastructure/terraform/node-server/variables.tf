variable "AMI_ID" {
  type = string
}

variable "INSTANCE_TYPE" {
  type    = string
  default = "t2.micro"
}

variable "NAME" {
  type = string
}

variable "KEY_PAIR" {
  type = string
}

variable "PRIVATE_IP" {
  default = ""
  type    = string
}

variable "SUBNET_ID" {
  type = string
}

variable "VPC_SECURITY_GROUP_IDS" {
  type    = list(string)
  default = []
}

variable "DB_PASSWORD" {
  default = ""
  type    = string
}

variable "DB_USERNAME" {
  default = ""
  type    = string
}

variable "DEPLOY_SCRIPT" {
  default = ""
  type    = string
}

variable "PROJECT_TITLE" {
  default = "brokentable"
  type    = string
}

variable "SERVICE_NAME" {
  default = ""
  type    = string
}

variable "RESTAURANTS_IP" {
  default = ""
  type    = string
}

variable "REVIEWS_IP" {
  default = ""
  type    = string
}

variable "PHOTOS_IP" {
  default = ""
  type    = string
}

variable "DB_PORT" {
  type    = number
}

variable "PORT" {
  type = number
}

variable "DB_HOST" {
  type    = string
  default = ""
}

variable "DB_NAME" {
  type    = string
  default = ""
}

variable "MONGO_URI" {
  type    = string
  default = ""
}

variable "CLUSTER_STRING" {
  type    = string
  default = ""
}

variable "DOMAIN_NAME" {
  type    = string
}

variable "EIP_ALLOCATION_ID" {
  type     = string
  default  = ""
}

// variable "ELB_ID" {
//   type = string
// }