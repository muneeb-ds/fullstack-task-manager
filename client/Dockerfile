FROM nginx:alpine

# Copy static files
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/

# Copy nginx configuration and substitute environment variables
COPY nginx.conf /etc/nginx/templates/default.conf.template
RUN envsubst '${BACKEND_API_URL}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"] 