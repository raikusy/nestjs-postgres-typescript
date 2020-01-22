FROM node:12-alpine

WORKDIR /home/node/app

COPY package.json /home/node/app
COPY yarn.lock /home/node/app

RUN yarn

COPY . /home/node/app

CMD ["yarn", "start:prod"]