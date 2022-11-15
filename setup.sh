#!/bin/sh

## fetch package registry
sudo apt update -y
## install node & npm
sudo apt install -y nodejs npm
npm install --global n
n stable
## [optional] install yarn (alternative to npm)
npm install --global yarn

# get node version
echo "node $(node -v)"
# get npm version
echo "npm $(npm -v)"
# get yarn version
echo "yarn $(yarn -v)"