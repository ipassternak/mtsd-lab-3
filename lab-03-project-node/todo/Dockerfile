FROM node:20-alpine3.18

WORKDIR /project

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]