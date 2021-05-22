output "restaurant_details_bucket_name" {
  value = aws_s3_bucket.restaurant_details_s3_bucket.id
}

output "restaurant_details_cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.restaurant_details_s3_distribution.id
}

output "restaurant_details_service_ip_address" {
  value = aws_instance.restaurant_details-service.public_ip
}

output "vpc_id" {
  value = module.main-vpc.vpc_id
}

output "private_subnets" {
  value = module.main-vpc.private_subnets
}

output "public_subnets" {
  value = module.main-vpc.public_subnets
}

output "restaurant_details_securitygroup_id" {
  value = aws_security_group.restaurant_details_service_securitygroup.id
}
