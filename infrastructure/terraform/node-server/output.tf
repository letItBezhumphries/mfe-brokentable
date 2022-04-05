output "instance-id" {
  value = aws_instance.default.id
}

output "private-ip" {
  value = aws_instance.default.private_ip
}

output "public-ip" {
  value = aws_eip_association.eip_assoc.public_ip
}
