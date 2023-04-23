FROM node:18-alpine
ENV TZ Asia/Tokyo
WORKDIR /app
COPY package.json yarn.lock ./
RUN apk update && apk add bash
RUN yarn install --prod --frozen-lockfile
COPY . .