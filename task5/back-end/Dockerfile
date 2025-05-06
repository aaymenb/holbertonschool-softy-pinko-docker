FROM ubuntu:latest

# Update apt packages
RUN apt-get update

# Upgrade installed packages
RUN apt-get upgrade -y

# Install Python and pip
RUN apt-get install -y python3 python3-pip

# If needed, remove EXTERNALLY-MANAGED flag
RUN rm -f /usr/lib/python*/EXTERNALLY-MANAGED

# Install Flask and Flask-CORS using pip
RUN pip3 install flask
RUN pip3 install flask-cors

# Set working directory
WORKDIR /app

# Copy the API file
COPY ./api.py /app/api.py

# Command to run when the container starts
CMD ["python3", "api.py"] 