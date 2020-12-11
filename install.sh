#!/bin/sh
echo "Get latest release from main.."
git pull origin main
cd src/
echo "Init docker builder.."
docker-compose up -d
echo "done."