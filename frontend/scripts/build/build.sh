#!/bin/bash

# Variables.
IMAGE_NAME='jcedeno/apenotic/front:latest'
PORT=3000
# Build the image.
docker build -t $IMAGE_NAME .
# Run the container.
docker run -it -p $PORT:3000 $IMAGE_NAME
