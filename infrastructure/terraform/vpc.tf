# Internet VPC
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  instance_tenancy     = "default"
  enable_dns_support   = "true"
  enable_dns_hostnames = "true"
  enable_classiclink   = "false"
  tags = {
    Name = "Brokentable Main VPC"
  }
}

# Subnets
resource "aws_subnet" "main-public-1" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = var.PUB1-CIDR
  map_public_ip_on_launch = true
  availability_zone       = "${var.AWS_REGION}a"
  // ###
  depends_on = [aws_internet_gateway.main-gw]
  tags = {
    Name = "main-public-1"
  }
}

resource "aws_subnet" "main-public-2" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = var.PUB2-CIDR
  map_public_ip_on_launch = true
  availability_zone       = "${var.AWS_REGION}b"
  // ###
  depends_on = [aws_internet_gateway.main-gw]
  tags = {
    Name = "main-public-2"
  }
}

resource "aws_subnet" "main-public-3" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = var.PUB3-CIDR
  map_public_ip_on_launch = true
  availability_zone       = "${var.AWS_REGION}c"
  // ###
  depends_on = [aws_internet_gateway.main-gw]
  tags = {
    Name = "main-public-3"
  }
}

resource "aws_subnet" "main-private-1" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = var.PVT1-CIDR
  map_public_ip_on_launch = false
  availability_zone       = "${var.AWS_REGION}a"

  tags = {
    Name = "main-private-1"
  }
}

resource "aws_subnet" "main-private-2" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = var.PVT2-CIDR
  map_public_ip_on_launch = false
  availability_zone       = "${var.AWS_REGION}b"

  tags = {
    Name = "main-private-2"
  }
}

resource "aws_subnet" "main-private-3" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = var.PVT3-CIDR
  map_public_ip_on_launch = false
  availability_zone       = "${var.AWS_REGION}c"

  tags = {
    Name = "main-private-3"
  }
}

# Internet GW
resource "aws_internet_gateway" "main-gw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "main"
  }
}


# Nat gateway
resource "aws_eip" "nat" {
  vpc = true
  depends_on = [aws_internet_gateway.main-gw]
  tags = {
    Name = "network-interface-EIP"
  }
}

resource "aws_nat_gateway" "nat-gw" {
  subnet_id     = aws_subnet.main-public-1.id    
  allocation_id = aws_eip.nat.id
  tags = {
    Name = "nat-gw"
  }
}

# route table public
resource "aws_route_table" "main-public" {
  vpc_id = aws_vpc.main.id
  route {
    cidr_block     = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main-gw.id
  }

  tags = {
    Name = "main-public allows outgoing access"
  }
}

# route associations public
resource "aws_route_table_association" "main-public-1-a" {
  subnet_id      = aws_subnet.main-public-1.id
  route_table_id = aws_route_table.main-public.id
}

resource "aws_route_table_association" "main-public-2-a" {
  subnet_id      = aws_subnet.main-public-2.id
  route_table_id = aws_route_table.main-public.id
}

resource "aws_route_table_association" "main-public-3-a" {
  subnet_id      = aws_subnet.main-public-3.id
  route_table_id = aws_route_table.main-public.id
}

# route table private
resource "aws_route_table" "main-private" {
  vpc_id = aws_vpc.main.id
  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.nat-gw.id
  }

  tags = {
    Name = "main-private-1"
  }
}

# # route associations private
resource "aws_route_table_association" "main-private-1-a" {
  subnet_id      = aws_subnet.main-private-1.id
  route_table_id = aws_route_table.main-private.id
}

resource "aws_route_table_association" "main-private-2-a" {
  subnet_id      = aws_subnet.main-private-2.id
  route_table_id = aws_route_table.main-private.id
}

resource "aws_route_table_association" "main-private-3-a" {
  subnet_id      = aws_subnet.main-private-3.id
  route_table_id = aws_route_table.main-private.id
}

