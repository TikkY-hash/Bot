FROM node:18.0.0

WORKDIR /app

COPY package.json package.json

RUN yarn install 

COPY . .

CMD [ "node", "index.js" ]