FROM node:lts-alpine3.23

COPY . /app/

WORKDIR /app

RUN npm install --force --loglevel verbose

CMD ["npm", "run", "dev"]
