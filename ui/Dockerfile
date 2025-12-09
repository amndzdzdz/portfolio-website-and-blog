FROM node:lts-alpine3.23

COPY . /frontend/

WORKDIR /frontend

RUN npm install --force --loglevel verbose

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
