FROM node:19-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install yarn -g
RUN npm install
COPY . .
EXPOSE 3000

CMD ["yarn", "start"]
