output "address" {
  value = aws_db_instance.mysqldb.address
}

output "rds_endpoint" {
  value = aws_db_instance.mysqldb.endpoint
}

output "reviews_rds_sgid" {
  value = aws_security_group.allow-reviews-mysqldb.id
}