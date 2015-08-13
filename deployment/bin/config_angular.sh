#!/usr/bin/env bash

# install npm packages
npm install angular angular-ui-router bootstrap

# put application into maintenance mode

# setup
chown -R www-data: node_modules

# take application out of maintenance mode
