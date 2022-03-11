FROM node:17
# Declare Working Directory.
WORKDIR /usr/src/app
# Copy & install depdencencies to optimize build time.
COPY package*.json ./
RUN npm i
# Copy the source code to the working directory.
COPY . .
# Expose port 8080 to the host.
EXPOSE 8080
# Run the application.
CMD ["npm", "start"]

