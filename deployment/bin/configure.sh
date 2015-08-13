#!/usr/bin/env bash

# Make sure name has not periods (.) in it
# as the cron installed will not execute
export PROJECT_NAME=jwt-authentication-site

cd /var/www/${PROJECT_NAME}

chmod +x deployment/bin/*

# configure services
./deployment/bin/config_nginx.sh
./deployment/bin/start_services.sh
# run angular setup
./deployment/bin/config_angular.sh
