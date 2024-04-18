FROM node:19-alpine

    # Create app directory
    WORKDIR /home/node/app

    # Copy package files and install dependencies
    COPY package*.json ./
    RUN npm install --production

    # Bundle app source
    COPY . .

    # Set the user to run the app
    USER node

    # Expose port 3000
    EXPOSE 3000

    # Command to run the application
    CMD [ "node", "index.js" ]