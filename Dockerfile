FROM node:18.14.2

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3500

RUN npm run build
CMD [ "npm", "run", "start" ]