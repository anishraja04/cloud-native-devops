# Cloud-Native DevOps Deployment Platform

This repository contains a full cloud-native deployment setup using AWS, Docker, Terraform, GitHub Actions, and Nginx.

## Architecture
- **Application:** A simple Node.js web application containerized using Docker.
- **Reverse Proxy:** Nginx is used as a reverse proxy to route traffic to the application container.
- **Infrastructure:** Terraform provisions an AWS VPC, public subnet, security groups, and an EC2 instance.
- **CI/CD Pipeline:** A GitHub Actions workflow builds the Docker image and automatically deploys the application to the EC2 instance upon pushing to the `master` branch.

## Setup Instructions

### 1. Provision Infrastructure
Navigate to the `terraform` directory and apply the configuration:
```bash
cd terraform
terraform init
terraform plan
terraform apply
```
*Note: Make sure your AWS credentials are set up.*

### 2. Local Development
You can test the application and Nginx setup locally using Docker Compose:
```bash
docker-compose up --build
```
The app will be available at `http://localhost`.

### 3. CI/CD Deployment
To enable GitHub Actions deployment:
1. Create a key pair in AWS and assign it to the EC2 instance.
2. In your GitHub repository settings, add the following secrets:
   - `EC2_HOST`: The public IP of the EC2 instance (from Terraform output).
   - `EC2_SSH_KEY`: The private SSH key for the instance.
3. Every push to the `master` branch will automatically trigger the deployment pipeline.
