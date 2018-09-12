
FROM node:8.11.4-alpine AS base

WORKDIR /app

ENV NODE_ENV=development
COPY package*.json ./
RUN npm install

COPY . /app

EXPOSE 8090
VOLUME /app

CMD ["npm", "run", "dev"]