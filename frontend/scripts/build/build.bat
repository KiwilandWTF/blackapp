@echo off

SET IMAGE_NAME=jcedeno\apenotic\front:latest
SET PORT=3000
docker build -t %IMAGE_NAME% %CD%
docker run -it -p %PORT%:3000 %IMAGE_NAME%