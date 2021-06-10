FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
COPY . /app
CMD ["node", "server.js"]
EXPOSE 8081