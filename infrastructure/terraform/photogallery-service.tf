resource "aws_eip" "photogallery-service-eip" {
  vpc                       = true
  // associate_with_private_ip = var.PHOTOS_PRIVATE_IP
  depends_on                = [aws_internet_gateway.main-gw]
}

module "photogallery-service" {
  source                 = "./node-server"
  AMI_ID                 = var.PHOTOGALLERY_AMI_ID
  KEY_PAIR               = aws_key_pair.mykeypair.key_name
  NAME                   = "photogallery-service"
  PRIVATE_IP             = var.PHOTOS_PRIVATE_IP
  SUBNET_ID              = aws_subnet.main-public-3.id
  VPC_SECURITY_GROUP_IDS = [
    aws_security_group.svc-photogallery-sg.id, 
  ]
  DB_NAME                = var.PHOTOS_DB_NAME
  DB_PASSWORD            = var.MONGODB_PASSWORD
  DB_USERNAME            = var.MONGODB_USERNAME
  DB_HOST                = var.ATLAS_HOST
  DB_PORT                = var.MONGO_PORT
  PORT                   = var.PHOTOS_PORT
  DEPLOY_SCRIPT          = "deploy_svc-photogallery.sh"
  SERVICE_NAME           = "photogallery-service"
  PHOTOS_IP              = aws_eip.photogallery-service-eip.public_ip
  MONGO_URI              = var.MONGO_URI
  CLUSTER_STRING         = var.CLUSTER_STRING
  DOMAIN_NAME            = var.DOMAIN_NAME
  EIP_ALLOCATION_ID      = aws_eip.photogallery-service-eip.id
}

resource "aws_security_group" "svc-photogallery-sg" {
  name        = "svc-photogallery-sg"
  description = "Security Group for the photogallery service"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = var.PHOTOS_PORT
    to_port     = var.PHOTOS_PORT
    protocol    = "tcp"
    // cidr_blocks = [aws_vpc.main.cidr_block, var.PUB1-CIDR, "${aws_eip.restaurants-service-eip.public_ip}/32", "${aws_eip.proxy-service-eip.public_ip}/32"]
    // security_groups = [
    //   aws_security_group.svc-restaurants-sg.id
    // ]
    // cidr_blocks = [aws_vpc.main.cidr_block, var.PUB1-CIDR, "${aws_eip.restaurants-service-eip.public_ip}/32"]
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    // cidr_blocks = [aws_vpc.main.cidr_block, var.PUB1-CIDR, var.MY_IP]
    // security_groups = [
    //   aws_security_group.proxy-instance-sg.id
    // ]
    // security_groups = [
    //   aws_security_group.svc-restaurants-sg.id
    // ]
    // cidr_blocks = [aws_vpc.main.cidr_block, var.PUB1-CIDR, "${aws_eip.restaurants-service-eip.public_ip}/32"]
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  // ingress {
  //   from_port   = 443
  //   to_port     = 443
  //   protocol    = "tcp"
  //   cidr_blocks = [var.PUB1-CIDR]
  // }

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


provider "mongodbatlas" {
  public_key  = var.ATLAS_PUBLIC_KEY
  private_key = var.ATLAS_PRIVATE_KEY
}


// resource "mongodbatlas_project_ip_access_list" "ip" {
//   project_id = var.PROJECT_ID
//   ip_address = aws_eip.photogallery-service-eip.public_ip
//   comment    = "IP Address for accessing the cluster"
// }

output "photogallery-service-private-ip" {
  value = module.photogallery-service.private-ip
}

output "photogallery-public-ip" {
  value = module.photogallery-service.public-ip
}

output "eip-svc-photogallery-public-dns" {
  value = aws_eip.photogallery-service-eip.public_dns
}

// // output "eip-svc-photogallery-domain-valid" {
// //   value = "specifies if this eip is set for use with vpc or ec2 instance: ${aws_eip.photogallery-service-eip.domain}"
// // }





