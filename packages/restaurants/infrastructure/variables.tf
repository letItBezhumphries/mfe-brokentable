variable "AWS_REGION" {
  type        = string
  description = "The aws region resources will be built"
  default     = "us-west-2"
}

variable "prefix" {
  default = "brokentable-restaurant-details"
}

variable "project" {
  default = "fec-brokentable-restaurant-details"
}

# variable "port" {}

# variable "host" {}

variable "AMI_ID" {}

variable "PATH_TO_PUBLIC_KEY" {
  default = "mykey.pub"
}

variable "INSTANCE_TYPE" {
  default = "t2.micro"
}