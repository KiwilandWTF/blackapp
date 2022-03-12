@echo off

SET IMAGE_NAME=jcedeno\apenotic-backend\back:latest
SET PORT=8080
docker run -it -p %PORT%:8080 %IMAGE_NAME%