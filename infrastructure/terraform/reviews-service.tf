
resource "aws_eip" "reviews-service-eip" {
  vpc                       = true
  // associate_with_private_ip = var.REVIEWS_PRIVATE_IP
  depends_on                = [aws_internet_gateway.main-gw]
}

 module "reviews-service" {
   source                 = "./node-server"
   AMI_ID                 = var.REVIEWS_AMI_ID
   KEY_PAIR               = aws_key_pair.mykeypair.key_name
   NAME                   = "svc-reviews"
   PRIVATE_IP             = var.REVIEWS_PRIVATE_IP
   SUBNET_ID              = aws_subnet.main-public-2.id
   VPC_SECURITY_GROUP_IDS = [aws_security_group.svc-reviews-sg.id]
   DB_NAME                = var.REVIEWS_DB_NAME
   DB_PASSWORD            = var.REVIEWS_DB_PASS
   DB_USERNAME            = var.REVIEWS_DB_USER
   DB_HOST                = split(":", module.reviews-service-db.rds_endpoint)[0]
   DB_PORT                = split(":", module.reviews-service-db.rds_endpoint)[1]
   PORT                   = var.REVIEWS_PORT
   DEPLOY_SCRIPT          = "deploy_svc-reviews.sh"
   SERVICE_NAME           = "svc-reviews"
   REVIEWS_IP             = aws_eip.reviews-service-eip.public_ip
   EIP_ALLOCATION_ID      = aws_eip.reviews-service-eip.id
   DOMAIN_NAME            = var.DOMAIN_NAME
}

module "reviews-service-db" {
   source                 = "./mysql-db/reviews-db"
   DATABASE_NAME          = var.REVIEWS_DB_NAME
   SUBNET_IDS             = [aws_subnet.main-private-2.id, aws_subnet.main-private-3.id]
   AVAILABILITY_ZONE      = "${var.AWS_REGION}b"
   IDENTIFIER             = "reviews-service-db"
   MYSQL_PASSWORD         = var.REVIEWS_DB_PASS
   PUBLICLY_ACCESSIBLE    = false
   MYSQL_USERNAME         = var.REVIEWS_DB_USER
   REVIEWS_SG_ID          = aws_security_group.svc-reviews-sg.id
   SERVICE_NAME           = "svc-reviews"
   VPC_ID                 = aws_vpc.main.id
}

resource "aws_security_group" "svc-reviews-sg" {
  name        = "svc-reviews-sg"
  description = "Security Group for the reviews service"
  vpc_id      = aws_vpc.main.id

  ingress {
     from_port       = var.REVIEWS_PORT
     to_port         = var.REVIEWS_PORT
     protocol        = "tcp"
    //  cidr_blocks = [aws_vpc.main.cidr_block, var.PUB1-CIDR, "${aws_eip.restaurants-service-eip.public_ip}/32"]
     cidr_blocks = ["0.0.0.0/0"]
    //  cidr_blocks = [aws_vpc.main.cidr_block, var.PUB1-CIDR, "${aws_eip.restaurants-service-eip.public_ip}/32", "${aws_eip.proxy-service-eip.public_ip}/32"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]

    // cidr_blocks = [aws_vpc.main.cidr_block, var.PUB1-CIDR, "${aws_eip.restaurants-service-eip.public_ip}/32"]
    // cidr_blocks = [aws_vpc.main.cidr_block, var.PUB1-CIDR, "${aws_eip.restaurants-service-eip.public_ip}/32", "${aws_eip.proxy-service-eip.public_ip}/32"]
    // security_groups = [
    //   aws_security_group.svc-restaurants-sg.id
    // ]
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


output "reviews-service-private-ip" {
  value = module.reviews-service.private-ip
}

output "reviews-public-ip" {
  value = module.reviews-service.public-ip
}

output "reviews-db-endpoint" {
  value = module.reviews-service-db.rds_endpoint
}

output "reviews-db-address" {
  value = module.reviews-service-db.address
}

output "eip-svc-reviews-public-dns" {
  value = aws_eip.reviews-service-eip.public_dns
}

// output "eip-svc-reviews-domain-valid" {
//   value = "specifies if this eip is set for use with vpc or ec2 instance: ${aws_eip.reviews-service-eip.domain}"
// }

