resource "aws_db_subnet_group" "mysqldb-subnet" {
  name        = "mysqldb-${var.SERVICE_NAME}-subnet"
  description = "RDS subnet group for svc-restaurants"
  subnet_ids  = [element(var.SUBNET_IDS, 0), element(var.SUBNET_IDS, 1)]
} 

resource "aws_db_parameter_group" "mysqldb-parameters" {
  name        = "mysqldb-${var.SERVICE_NAME}-parameters"
  family      = "mysql5.7"
  description = "MySQL DB parameter group"

  parameter {
    name   = "max_allowed_packet"
    value  = "16777216"
  }
}

#  RDS security group 
resource "aws_security_group" "allow-reviews-mysqldb" {
  vpc_id          = var.VPC_ID
  name            = "allow-mysqldb-${var.SERVICE_NAME}"
  description     = "mysqldb-sercurity group for ${var.SERVICE_NAME}"

  ingress {
    from_port       = 3306
    to_port         = 3306
    protocol        = "tcp"
    security_groups = [var.REVIEWS_SG_ID]
  }

  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = ["0.0.0.0/0"]
    self            = true
  }

  tags = {
    Name = "allow-mysqldb-${var.SERVICE_NAME}"
  }
}

resource "aws_db_instance" "mysqldb" {
  allocated_storage       = var.ALLOCATED_STORAGE
  storage_type            = var.STORAGE_TYPE
  engine                  = "mysql"
  engine_version          = var.ENGINE_VERSION
  instance_class          = var.INSTANCE_CLASS
  identifier              = var.IDENTIFIER
  name                    = var.DATABASE_NAME
  username                = var.MYSQL_USERNAME
  password                = var.MYSQL_PASSWORD
  apply_immediately       = var.APPLY_IMMEDIATELY
  db_subnet_group_name    = aws_db_subnet_group.mysqldb-subnet.name
  parameter_group_name    = aws_db_parameter_group.mysqldb-parameters.name
  skip_final_snapshot     = var.SKIP_FINAL_SNAPSHOT
  vpc_security_group_ids  = [aws_security_group.allow-reviews-mysqldb.id]
  multi_az                = var.MULTI_AZ # set to true to have high availability
  availability_zone       = var.AVAILABILITY_ZONE
  backup_retention_period = var.BACKUP_RETENTION

  tags                    = {
    Environment = terraform.workspace
    Project     = var.PROJECT_TITLE
    Name        = "mysqldb-${var.SERVICE_NAME}"
    ManagedBy   = "Terraform"
    Owner       = "Eric Humphries"
  }
}