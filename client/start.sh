#!/bin/sh

# Replace environment variables in index.html
sed -i "s|window.ENV_BACKEND_API_URL|'$BACKEND_API_URL'|g" /usr/share/nginx/html/index.html

# Start nginx
nginx -g 'daemon off;' 