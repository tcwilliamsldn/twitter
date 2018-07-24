FROM node:8

RUN mkdir -p /app
WORKDIR /app

COPY package.json $WORKDIR
RUN yarn

COPY . $WORKDIR

EXPOSE 8080

RUN yarn build

CMD yarn start