FROM node:lts-alpine as base

WORKDIR /app

ENV NODE_ENV development

RUN apk add --no-cache bash

RUN npm install -g npm typescript

COPY backend/package.json ./

RUN yarn install

COPY backend/ ./

CMD [ "sleep", "infinity"]