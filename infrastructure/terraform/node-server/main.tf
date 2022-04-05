
resource "aws_eip_association" "eip_assoc" {
  instance_id   = aws_instance.default.id
  allocation_id = var.EIP_ALLOCATION_ID
}

// resource "aws_elb_attachment" "instance-elb-attachment" {
//   elb      = var.ELB_ID 
//   instance = aws_instance.default.id
// }

data "template_file" "init-script" {
  template = file("${path.module}/sh-scripts/${var.DEPLOY_SCRIPT}")
  //  might want to set up a conditional here for if the var.SERVICE_NAME = 'svc-restaurants'
  
  vars = {
    DB_PASSWORD        = var.DB_PASSWORD
    MONGO_URI          = var.MONGO_URI
    DB_USERNAME        = var.DB_USERNAME
    DB_HOST            = var.DB_HOST
    DB_PORT            = var.DB_PORT
    DB_NAME            = var.DB_NAME
    PORT               = var.PORT
    PHOTOS_IP          = var.PHOTOS_IP
    RESTAURANTS_IP     = var.RESTAURANTS_IP
    REVIEWS_IP         = var.REVIEWS_IP
    CLUSTER_STRING     = var.CLUSTER_STRING
    DOMAIN_NAME        = var.DOMAIN_NAME
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

resource "aws_instance" "default" {
  ami                         = var.AMI_ID
  instance_type               = var.INSTANCE_TYPE
  key_name                    = var.KEY_PAIR
  private_ip                  = var.PRIVATE_IP
  subnet_id                   = var.SUBNET_ID
  vpc_security_group_ids      = var.VPC_SECURITY_GROUP_IDS
  associate_public_ip_address = true
  # User-data
  user_data = data.template_cloudinit_config.cloudinit-install-script.rendered
  
  root_block_device {
    volume_size = "10"
    volume_type = "standard"
  }

  tags = {
    Environment = terraform.workspace
    Project     = var.PROJECT_TITLE
    Name        = var.SERVICE_NAME
    ManagedBy   = "Terraform"
    Owner       = "Eric Humphries"
  }
}