resource "aws_eip" "restaurants-service-eip" {
   vpc                       = true
  //  associate_with_private_ip = var.RESTAURANTS_PRIVATE_IP
   depends_on                = [aws_internet_gateway.main-gw, aws_eip.reviews-service-eip, aws_eip.photogallery-service-eip]
}

module "restaurants-service" {
   source                 = "./node-server"
   AMI_ID                 = var.RESTAURANTS_AMI_ID
   KEY_PAIR               = aws_key_pair.mykeypair.key_name
   NAME                   = "svc-restaurants"
   PRIVATE_IP             = var.RESTAURANTS_PRIVATE_IP
   SUBNET_ID              = aws_subnet.main-public-1.id
   VPC_SECURITY_GROUP_IDS = [aws_security_group.svc-restaurants-sg.id]
   DB_NAME                = var.RESTAURANTS_DB_NAME
   DB_PASSWORD            = var.RESTAURANTS_DB_PASS
   DB_USERNAME            = var.RESTAURANTS_DB_USER
   DB_HOST                = split(":", module.restaurants-service-db.rds_endpoint)[0]
   DB_PORT                = split(":", module.restaurants-service-db.rds_endpoint)[1]
   PORT                   = var.RESTAURANTS_PORT
   DEPLOY_SCRIPT          = "deploy_svc-restaurants.sh"
   SERVICE_NAME           = "svc-restaurants"
   REVIEWS_IP             = aws_eip.reviews-service-eip.public_ip
   PHOTOS_IP              = aws_eip.photogallery-service-eip.public_ip
   RESTAURANTS_IP         = aws_eip.restaurants-service-eip.public_ip
   EIP_ALLOCATION_ID      = aws_eip.restaurants-service-eip.id
   DOMAIN_NAME            = var.DOMAIN_NAME
}

module "restaurants-service-db" {
   source                  = "./mysql-db/restaurants-db"
   DATABASE_NAME           = var.RESTAURANTS_DB_NAME
   SUBNET_IDS              = [aws_subnet.main-private-1.id, aws_subnet.main-private-2.id]
   IDENTIFIER              = "restaurants-service-db"
   MYSQL_PASSWORD          = var.RESTAURANTS_DB_PASS
   AVAILABILITY_ZONE       = "${var.AWS_REGION}a"
   PUBLICLY_ACCESSIBLE     = false
   MYSQL_USERNAME          = var.RESTAURANTS_DB_USER
   RESTAURANTS_SG_ID       = aws_security_group.svc-restaurants-sg.id
   SERVICE_NAME            = "svc-restaurants"
   VPC_ID                  = aws_vpc.main.id
}

resource "aws_security_group" "svc-restaurants-sg" {
  name        = "svc-restaurants-sg"
  description = "Security Group for the restaurants service"
  vpc_id      = aws_vpc.main.id

  ingress {
     from_port   = var.RESTAURANTS_PORT
     to_port     = var.RESTAURANTS_PORT
     protocol    = "tcp"
    //  security_groups = [
    //    aws_security_group.proxy-instance-sg.id
    //  ]
    //  security_groups = [
    //    aws_security_group.proxy-instance-sg.id,
    //    aws_security_group.elb-securitygroup.id
    //  ]
    //  cidr_blocks = [aws_vpc.main.cidr_block, var.PUB1-CIDR, var.MY_IP, "${aws_eip.proxy-service-eip.public_ip}/32"]
     cidr_blocks = ["0.0.0.0/0"]
   }

   ingress {
     from_port   = 80
     to_port     = 80
     protocol    = "tcp"
    //  security_groups = [
    //    aws_security_group.proxy-instance-sg.id
    //  ]
    //  security_groups = [
    //    aws_security_group.proxy-instance-sg.id,
    //    aws_security_group.elb-securitygroup.id
    //  ]
    //  cidr_blocks = [aws_vpc.main.cidr_block, var.PUB1-CIDR, var.MY_IP, "${aws_eip.proxy-service-eip.public_ip}/32"]
     cidr_blocks = ["0.0.0.0/0"]
   }
  
   ingress {
     from_port   = 22
     to_port     = 22
     protocol    = "tcp"
     cidr_blocks = [var.MY_IP]
   }

   egress {
     from_port   = 0
     to_port     = 0
     protocol    = "-1"
     cidr_blocks = ["0.0.0.0/0"]
   }
}

output "restaurants-instance-id" {
  value = module.restaurants-service.instance-id
}

output "restaurants-private-ip" {
  value = module.restaurants-service.private-ip
}

output "restaurants-public-ip" {
  value = module.restaurants-service.public-ip
}

output "restaurants-db-endpoint" {
  value = module.restaurants-service-db.rds_endpoint
}

output "restaurants-db-address" {
  value = module.restaurants-service-db.address
}

output "eip-svc-restaurants-public-dns" {
  value = aws_eip.restaurants-service-eip.public_dns
}

// output "eip-svc-restaurants-domain-valid" {
//   value = "specifies if this eip is set for use with vpc or ec2 instance: ${aws_eip.restaurants-service-eip.domain}"
// }