output "address" {
  value = aws_db_instance.mysqldb.address
}

output "rds_endpoint" {
  value = aws_db_instance.mysqldb.endpoint
}

output "restaurant_rds_sgid" {
  value = aws_security_group.allow-restaurants-mysqldb.id
}