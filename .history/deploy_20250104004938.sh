#!/bin/bash

# Arrêter le script en cas d'erreur
set -e

# Variables
OVH_USER="fanmacr"
OVH_HOST="ftp.cluster051.hosting.ovh.net"
OVH_PATH="/home/fanmacr/www/fanma.ca"
BACKUP_PATH="/home/www/backups"

# Build the project
echo "Building the project..."
npm run build

# Création d'un backup
echo "💾 Création d'un backup..."
ssh $OVH_USER@$OVH_HOST "mkdir -p $BACKUP_PATH && \
    cp -r $OVH_PATH $BACKUP_PATH/backup-$(date +%Y%m%d_%H%M%S)"

# Ensure the remote directory exists
echo "Creating remote directory if it doesn't exist..."
ssh $OVH_USER@$OVH_HOST "mkdir -p $OVH_PATH"

# Deploy to OVH
echo "Deploying to OVH..."
rsync -avz --delete dist/ $OVH_USER@$OVH_HOST:$OVH_PATH

# Set permissions
echo "Setting permissions..."
ssh $OVH_USER@$OVH_HOST "chmod -R 755 $OVH_PATH"

# Nettoyage des vieux backups (garde les 5 derniers)
echo "🧹 Nettoyage des anciens backups..."
ssh $OVH_USER@$OVH_HOST "cd $BACKUP_PATH && ls -t | tail -n +6 | xargs -r rm -r"

echo "Deployment complete!"