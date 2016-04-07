FROM node:argon

# Add our user and group first to make sure their IDs get assigned consistently
# This Docker Image can than be run with the app user in the following way:
# -u "app"
# RUN groupadd -r app && useradd -r -g app app

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

RUN npm run build

EXPOSE 8080
CMD [ "npm", "start" ]
