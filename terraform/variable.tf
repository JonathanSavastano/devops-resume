# Reserved for future use once ACM/Route53 custom domain is wired up.
variable "domain_name" {
  type        = string
  description = "Name of the domain"
}
variable "bucket_name" {
  type        = string
  description = "Name of the bucket."
}
variable "region" {
  type    = string
  default = "us-east-1"
}