# Use the official Alpine image as the base image
FROM alpine:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 8090
EXPOSE 8090

# Command to run the application
CMD ["npm", "start"]
