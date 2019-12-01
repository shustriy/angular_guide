# base image
FROM node:12.13.1
MAINTAINER Andrey Kotelnikov

# set working directory
WORKDIR /app

COPY . /app

WORKDIR frontend

RUN echo DONE
