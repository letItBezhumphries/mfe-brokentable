variable "APPLY_IMMEDIATELY" {
  type    = bool
  default = false
}

variable "DATABASE_NAME" {
  type = string
}

variable "ENGINE_VERSION" {
  type    = string
  default = "5.7"
}

variable "IDENTIFIER" {
  type    = string
  default = "mysqldb"
}

variable "INSTANCE_CLASS" {
  type    = string
  default = "db.t2.micro"
}

variable "MYSQL_PASSWORD" {
  type    = string
  default = ""
}

variable "MYSQL_USERNAME" {
  type    = string
  default = ""
}

variable "PUBLICLY_ACCESSIBLE" {
  type    = bool
  default = false
}

variable "BACKUP_RETENTION" {
  type    = number
  default = 30
}

variable "SERVICE_NAME" {
  type    = string
  default = "svc-restaurants-db"
}

variable "PROJECT_TITLE" {
  type     = string
  default  = "brokentable"
}

variable "STORAGE_TYPE" {
  type     = string
  default  = "gp2"
}

variable "SKIP_FINAL_SNAPSHOT" {
  type    = bool
  default = true
}

variable "MULTI_AZ" {
  type    = bool
  default = false 
}

variable "ALLOCATED_STORAGE" {
  type    = number
  default = 100
}

variable "AVAILABILITY_ZONE" {
  type    = string
  default = ""
}

variable "VPC_ID" {}

variable "REVIEWS_SG_ID" {}

variable "SUBNET_IDS" {
  type    = list(string)
  default = []
}