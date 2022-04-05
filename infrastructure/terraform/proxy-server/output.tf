output "instance-id" {
  value = aws_instance.proxy.id
}

output "public-dns" {
  value = aws_instance.proxy.public_dns
}

output "private-ip" {
  value = aws_instance.proxy.private_ip 
}

output "public-ip" {
  value = aws_eip_association.eip_assoc.public_ip
}


// output "dns-name" {
//   value = aws_elb.brokentable-elb.dns_name
// }

// # This is for route53
// output "elb-zone-id" {
//   value = aws_elb.brokentable-elb.zone_id
// }

// # This is the list of instances in the ELB
// output "elb-instances" {
//   value = aws_elb.brokentable-elb.instances 
// }

// output "elb-id" {
//   value = aws_elb.brokentable-elb.id
// }

// output "elb-source-sg-id" {
//   value = aws_elb.brokentable-elb.source_security_group_id
// }

// output "public-ip" {
//   value = aws_instance.proxy.public_ip
// }

// output "A-record-www-name" {
//   value = aws_route53_record.www-A-record.name
// }

// output "A-record-www-fqdn" {
//   value = aws_route53_record.www-A-record.fqdn
// }

// output "root-A-record-name" {
//   value = aws_route53_record.apex-record.name
// }

// output "root-A-record-fqdn" {
//   value = aws_route53_record.apex-record.fqdn
// }