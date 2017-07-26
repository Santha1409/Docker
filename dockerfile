FROM node:boron

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ./saldocker /usr/src/app
RUN cd /usr/src/app/saldocker
RUN npm install

EXPOSE 8080
CMD [ "npm", "star" ]