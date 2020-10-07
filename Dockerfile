FROM node:12.11 AS ANGULAR_BUILD
RUN npm install -g @angular/cli@10.0.5
ARG MDB_GITLAB_TOKEN=valid_token_here_please
ARG BUILD_ENV=production
COPY . /app
WORKDIR /app

RUN MDB_GITLAB_TOKEN=$MDB_GITLAB_TOKEN npm install && ng build --configuration $BUILD_ENV

FROM nginx:1.19.2-alpine
COPY --from=ANGULAR_BUILD /app/dist/yals /usr/share/nginx/html
