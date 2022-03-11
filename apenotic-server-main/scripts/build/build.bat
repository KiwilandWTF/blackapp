@echo off

SET IMAGE_NAME=jcedeno\apenotic-backend\back:latest
SET PORT=8080
docker build -t %IMAGE_NAME% %CD%
docker run -it -p %PORT%:8080 %IMAGE_NAME%