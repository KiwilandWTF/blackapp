#!/bin/bash

# Variables.
IMAGE_NAME='jcedeno/apenotic/front:latest'
PORT=3000

# Run the container.
docker run -it -p $PORT:3000 $IMAGE_NAME
