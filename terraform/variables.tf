variable "aws_region" { default = "ap-south-1" }
variable "key_name" { default = "deploy-key" }

# t3.micro is in the free tier; t3.small is not. The previous instance was
# t3.small and was consuming credits while sitting idle at ~2% CPU.
variable "instance_type" { default = "t3.micro" }
