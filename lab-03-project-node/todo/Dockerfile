FROM node:20-alpine3.18 AS build

WORKDIR /project

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine3.18

WORKDIR /project

COPY entrypoint.sh /usr/local/bin/entrypoint.sh

RUN chmod +x /usr/local/bin/entrypoint.sh

COPY package.json package-lock.json ./

RUN npm install --omit=dev

COPY --from=build /project/dist ./dist

ENTRYPOINT  ["entrypoint.sh"]
