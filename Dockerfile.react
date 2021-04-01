FROM node:12.15.0

WORKDIR /src/client-app

COPY package.json /src/client-app/package.json

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "serve"]