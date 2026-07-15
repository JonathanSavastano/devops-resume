terraform {
  backend "s3" {
    bucket = "jonny-devops-resume-tfstate"
    key    = "devops-resume/terraform.tfstate"
    region = "us-east-1"
  }
}