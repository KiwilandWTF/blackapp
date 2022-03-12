#!/bin/bash

# Variables.
IMAGE_NAME='jcedeno/apenotic-backend/back:latest'
PORT=8080
# Build the image.
docker build -t $IMAGE_NAME .
# Run the container.
docker run -it -p $PORT:8080 $IMAGE_NAME
