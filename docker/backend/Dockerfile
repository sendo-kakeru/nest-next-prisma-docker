FROM node:18-alpine
ENV TZ Asia/Tokyo
WORKDIR /api
COPY package.json yarn.lock ./
RUN yarn install --prod --frozen-lockfile
COPY . .
# RUN apk update && apk add bash
# RUN yarn add -g @nestjs/cli
# RUN nest new .