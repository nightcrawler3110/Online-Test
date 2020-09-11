FROM node:12.18-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod
FROM nginx:1.19-alpine
COPY --from=build-step /app/dist/OnlineTest /usr/share/nginx/html