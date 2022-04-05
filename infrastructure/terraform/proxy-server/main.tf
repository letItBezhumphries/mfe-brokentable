  
data "template_file" "init-script" {
  template = file("${path.module}/sh-scripts/deploy_proxy_server.sh")
  vars     = {
    RESTAURANTS_IP    = var.RESTAURANTS_IP
    REVIEWS_IP        = var.REVIEWS_IP
    PHOTOS_IP         = var.PHOTOS_IP
    PROXY_IP          = var.PROXY_IP
    PORT              = var.PROXY_PORT
    DOMAIN_NAME       = var.DOMAIN_NAME
  }
}

data "template_cloudinit_config" "cloudinit-install-script" {
  gzip = false
  base64_encode = false

  part {
    content_type = "text/x-shellscript"
    content      = data.template_file.init-script.rendered
  }
}

resource "aws_eip_association" "eip_assoc" {
  instance_id   = aws_instance.proxy.id
  allocation_id = var.EIP_ALLOCATION_ID
}

resource "aws_instance" "proxy" {
  ami                         = var.AMI_ID
  instance_type               = var.INSTANCE_TYPE
  key_name                    = var.KEY_PAIR
  subnet_id                   = var.SUBNET_ID
  vpc_security_group_ids      = var.VPC_SECURITY_GROUP_IDS
  associate_public_ip_address = true

  # User-data
  user_data = data.template_cloudinit_config.cloudinit-install-script.rendered
  
  tags = {
    Environment = terraform.workspace
    Project     = var.PROJECT_TITLE
    Name        = var.SERVICE_NAME
    ManagedBy   = "Terraform"
    Owner       = "Eric Humphries"
  }
}

// resource "aws_elb_attachment" "proxy-elb-attachment" {
//   elb      = aws_elb.brokentable-elb.id 
//   instance = aws_instance.proxy.id
// }

// resource "aws_iam_server_certificate" "elb_cert" {
//   name_prefix       = var.DOMAIN_NAME
//   certificate_body  = var.CERT_BODY
//   certificate_chain = var.CERT_CHAIN
//   private_key       = var.CERT_PRIVKEY

//   lifecycle {
//     create_before_destroy = true
//   }
// }

// # create apex record for "www.${var.DOMAIN_NAME}" to point to the elb dns-name
// resource "aws_route53_record" "www-A-record" {
//   zone_id = var.HOSTED_ZONEID
//   name    = "www.${var.DOMAIN_NAME}"
//   type    = "A"
//   alias {
//     name                   = aws_elb.brokentable-elb.dns_name
//     zone_id                = aws_elb.brokentable-elb.zone_id
//     evaluate_target_health = true
//   }
// }

// # Create apex record for "${DOMAIN_NAME}" to point to load balancer dns-name
// resource "aws_route53_record" "apex-record" {
//   zone_id = var.HOSTED_ZONEID
//   type    = "A" 
//   name    = "${var.DOMAIN_NAME}"
//   alias {
//     name                   = aws_elb.brokentable-elb.dns_name 
//     zone_id                = aws_elb.brokentable-elb.zone_id
//     evaluate_target_health = true 
//   }
// }

// resource "aws_elb" "brokentable-elb" {
//   name               = "brokentable-elb"
//   subnets            = var.PUBLIC_SUBNET_IDS
//   security_groups    = var.ELB_SECURITY_GROUP_IDS

//   // listener {
//   //   instance_port     = 80
//   //   instance_protocol = "http"
//   //   lb_port           = 80
//   //   lb_protocol       = "http"
//   // }

//   listener {
//     instance_port     = 3000
//     instance_protocol = "http"
//     lb_port           = 80
//     lb_protocol       = "http"
//   }

//   // listener {
//   //   instance_port     = 3001
//   //   instance_protocol = "http"
//   //   lb_port           = 80
//   //   lb_protocol       = "http"
//   // }

//   // listener {
//   //   instance_port      = 3000
//   //   instance_protocol  = "http"
//   //   lb_port            = 443 
//   //   lb_protocol        = "https"
//   //   ssl_certificate_id = var.SSL_CERTIFICATE_ARN
//   // }

//   // listener {
//   //   instance_port      = 80
//   //   instance_protocol  = "http"
//   //   lb_port            = 443 
//   //   lb_protocol        = "https"
//   //   ssl_certificate_id = var.SSL_CERTIFICATE_ARN
//   // }

//   health_check {
//     healthy_threshold   = 2
//     unhealthy_threshold = 2
//     timeout             = 3
//     target              = "HTTP:80/"
//     interval            = 30
//   }

//   // instances = [aws_instance.proxy.id]
//   cross_zone_load_balancing   = true
//   connection_draining         = true
//   connection_draining_timeout = 400

//   tags = {
//     Environment = terraform.workspace
//     Project     = var.PROJECT_TITLE
//     Name        = "brokentable-elb"
//     ManagedBy   = "Terraform"
//     Owner       = "Eric Humphries"
//   }
// }

