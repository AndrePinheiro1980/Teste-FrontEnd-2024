FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run start

EXPOSE 3001

CMD ["npm", "start"]