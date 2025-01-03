#!/bin/bash

# Variables
OVH_USER="fanmacr"
OVH_HOST="ftp.cluster051.hosting.ovh.net"
OVH_PATH="/home/fanmacr/www/fanma.ca"

# Build the project
echo "Building the project..."
npm run build

# Ensure the remote directory exists
echo "Creating remote directory if it doesn't exist..."
ssh $OVH_USER@$OVH_HOST "mkdir -p $OVH_PATH"

# Deploy to OVH
echo "Deploying to OVH..."
rsync -avz --delete dist/ $OVH_USER@$OVH_HOST:$OVH_PATH

# Set permissions
echo "Setting permissions..."
ssh $OVH_USER@$OVH_HOST "chmod -R 755 $OVH_PATH"

echo "Deployment complete!"