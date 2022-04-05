terraform {
  required_providers {
    mongodbatlas = {
      source = "mongodb/mongodbatlas"
    }
    aws = {
      source = "hashicorp/aws"
    }
    acme = {
      source = "vancluever/acme"
      version = "~> 2.5.3"
    }
  }
  required_version = ">= 0.14"
}

provider "aws" {
  region = var.AWS_REGION
}

// provider "acme" {
//   server_url = "https://acme-staging-v02.api.letsencrypt.org/directory"
//   #server_url = "https://acme-v02.api.letsencrypt.org/directory"
// }

# terraform {
#   backend "s3" {
#     bucket  = "fec-brokentable-tfstate"
#     region  = "us-west-2"
#     key     = "modules/photogallery.tfstate"
#     encrypt = true
#   }
# }

# locals to attach to resources
# workspace will be either - develop, staging, master
locals {
  prefix = "brokentable-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = "brokentable"
    ManagedBy   = "Terraform"
    Owner       = "Eric Humphries"
  }
}

