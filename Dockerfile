FROM node:12.15.0-alpine

WORKDIR /app

RUN apk update && apk add autoconf automake libtool gcc zlib