FROM node:12.15.0

RUN mkdir -p /usr/kaimobile-server

WORKDIR /usr/kaimobile-server

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build
# create docs
RUN npm run docs

EXPOSE 7080
EXPOSE 8000

CMD [ "npm", "start" ]