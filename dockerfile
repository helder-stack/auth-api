FROM node:latest

workdir .
copy . .
RUN yarn
expose 3000