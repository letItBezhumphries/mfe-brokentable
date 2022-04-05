// resource "aws_eip" "proxy-service-eip" {
//   vpc      = true
// //   associate_with_private_ip = module.proxy-service.private-ip
//   depends_on                = [aws_internet_gateway.main-gw, aws_eip.reviews-service-eip, aws_eip.photogallery-service-eip, aws_eip.restaurants-service-eip]
// }

// module "proxy-service" {
//   source                 = "./proxy-server"
//   PROJECT_TITLE          = "brokentable"
//   SERVICE_NAME           = "proxy"
//   AMI_ID                 = var.PROXY_AMI_ID
//   KEY_PAIR               = aws_key_pair.mykeypair.key_name
//   SUBNET_ID              = aws_subnet.main-public-1.id
//   PUBLIC_SUBNET_IDS      = [aws_subnet.main-public-1.id, aws_subnet.main-public-2.id, aws_subnet.main-public-3.id]
//   INSTANCE_TYPE          = "t2.micro"
//   VPC_SECURITY_GROUP_IDS = [
//     aws_security_group.proxy-instance-sg.id
//   ]
//   // ELB_SECURITY_GROUP_IDS = [
//   //   aws_security_group.elb-securitygroup.id,
//   // ]
//   // SSL_CERTIFICATE_ARN = aws_acm_certificate_validation.cert.certificate_arn
//   REVIEWS_IP             = aws_eip.reviews-service-eip.public_ip
//   // REVIEWS_IP             = var.REVIEWS_PRIVATE_IP
//   PHOTOS_IP              = aws_eip.photogallery-service-eip.public_ip
//   // PHOTOS_IP              = var.PHOTOS_PRIVATE_IP
//   RESTAURANTS_IP         = aws_eip.restaurants-service-eip.public_ip
//   // RESTAURANTS_IP         = var.RESTAURANTS_PRIVATE_IP
//   PROXY_PORT             = var.PROXY_PORT
//   PROXY_IP               = aws_eip.proxy-service-eip.public_ip
//   DOMAIN_NAME            = var.DOMAIN_NAME
//   EIP_ALLOCATION_ID      = aws_eip.proxy-service-eip.id
//   // HOSTED_ZONEID       = aws_route53_zone.root-dns-zone.zone_id
//   // CERT_BODY           = module.acme-certificate.certificate_pem
//   // CERT_CHAIN          = module.acme-certificate.certificate_issuer_pem
//   // CERT_PRIVKEY        = module.acme-certificate.certificate_private_key_pem
// }


// resource "aws_security_group" "proxy-instance-sg" {
//   vpc_id      = aws_vpc.main.id
//   name        = "proxy-instance-sg"
//   description = "Allow-inbound-from-ELB"

//   egress {
//     from_port   = 0
//     to_port     = 0
//     protocol    = "-1"
//     cidr_blocks = ["0.0.0.0/0"]
//   }

//   ingress {
//     from_port   = 22
//     to_port     = 22
//     protocol    = "tcp"
//     cidr_blocks = [var.MY_IP]
//   }

//   ingress {
//     from_port   = 3000
//     to_port     = 3000
//     protocol    = "tcp"
//     cidr_blocks = ["0.0.0.0/0"]
//     // security_groups = [aws_security_group.elb-securitygroup.id]
//   }

// ingress {
//     from_port    = 8
//     to_port      = 0
//     protocol     = "icmp"
//     cidr_blocks  = ["0.0.0.0/0"]
// }

//   ingress {
//     from_port   = 80
//     to_port     = 80
//     protocol    = "tcp"
//     cidr_blocks = ["0.0.0.0/0"]
//     // security_groups = [aws_security_group.elb-securitygroup.id]
//   }
  
//   // ingress {
//   //   from_port   = 443
//   //   to_port     = 443
//   //   protocol    = "tcp"
//   //   security_groups = [aws_security_group.elb-securitygroup.id]
//   // }

//   tags = {
//     Name = "Proxy-sg"
//   }
// }


// // resource "aws_security_group" "elb-securitygroup" {
// //   vpc_id      = aws_vpc.main.id
// //   name        = "elb-securitygroup"
// //   description = "security group for load balancer"
// //   egress {
// //     from_port   = 0
// //     to_port     = 0
// //     protocol    = "-1"
// //     cidr_blocks = ["0.0.0.0/0"]
// //   }

// //   ingress {
// //     from_port   = 80
// //     to_port     = 80
// //     protocol    = "tcp"
// //     cidr_blocks = ["0.0.0.0/0"]
// //   }
  
// //   ingress {
// //     from_port   = 443
// //     to_port     = 443
// //     protocol    = "tcp"
// //     cidr_blocks = ["0.0.0.0/0"]
// //   }

// ingress {
//     from_port    = 8
//     to_port      = 0
//     protocol     = "icmp"
//     cidr_blocks  = ["0.0.0.0/0"]
// }

// //   tags = {
// //     Name = "ELB-sg"
// //     Environment = terraform.workspace
// //   }
// // }

// // output "elb-dns" {
// //   value = module.proxy-service.dns-name
// // }

// // output "elb-zone-id" {
// //   value = module.proxy-service.elb-zone-id
// // }

// // output "ELB_ID" {
// //   value = module.proxy-service.elb-id
// // }


// // output "elb-instances" {
// //   value = module.proxy-service.elb-instances
// // }

// // output "elb-source-securitygroupid" {
// //   value = module.proxy-service.elb-source-sg-id
// // }

// output "proxy-public-ip" {
//   value = module.proxy-service.public-ip
// }

// output "proxy-instance-public-dns" {
//   value = module.proxy-service.public-dns
// }





