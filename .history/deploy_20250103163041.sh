#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Deploy to OVH
echo "Deploying to OVH..."
scp -r dist/* user@your-ovh-server:/path/to/www/

echo "Deployment complete!"