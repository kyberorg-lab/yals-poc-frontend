FROM node:12.11 AS ANGULAR_BUILD
RUN npm install -g @angular/cli@10.0.6
ARG MDB_GITLAB_TOKEN=valid_token_here_please
ENV GITLAB_TOKEN=$MDB_GITLAB_TOKEN
ARG BUILD_ENV=production
COPY . /app
WORKDIR /app
RUN apt update && apt install gettext-base
RUN mv /app/package.json /app/package.json.tmp && envsubst < /app/package.json.tmp > /app/package.json && npm install && ng build --configuration $BUILD_ENV
FROM nginx:1.19.2-alpine
COPY --from=ANGULAR_BUILD /app/dist/yals /usr/share/nginx/html
