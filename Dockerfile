# Use a tiny web server image
FROM nginx:alpine

# Copy your frontend files to the server's directory
COPY . /usr/share/nginx/html

# Tell Docker to open port 80
EXPOSE 80