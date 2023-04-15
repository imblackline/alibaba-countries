FROM node:lts-alpine
# install simple http server for serving static content
RUN npm install -g serve
# make the 'app' folder the current working directory
WORKDIR /app
# copy 'package.json' to install dependencies
COPY package*.json ./
# install dependencies
RUN npm install
# copy files and folders to the current working directory (i.e. 'app' folder)
COPY . .
# build app for production with minification
RUN npm run build
EXPOSE 80
CMD [ "serve", "-s"," dist","-l","80" ]