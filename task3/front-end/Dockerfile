FROM nginx:latest

# Copy the front-end files
COPY ./softy-pinko-front-end /var/www/html/softy-pinko-front-end

# Copy the Nginx configuration
COPY ./softy-pinko-front-end.conf  /etc/nginx/conf.d/default.conf 