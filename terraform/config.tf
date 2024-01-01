provider "aws" {
  region = "us-east-2"
}

terraform {
  backend "s3" {
    bucket = "web-app-template-terraform-us-east-2"
    key    = "web-app-template"
    region = "us-east-2"
  }
}
