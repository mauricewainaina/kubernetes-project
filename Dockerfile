FROM node:16.15-alpine3.14
MAINTAINER geeky
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
RUN npm install --location=global serve
CMD ["serve", "-s", "build"]
