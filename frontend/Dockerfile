FROM node:latest

RUN npm i -g pnpm

WORKDIR /app
COPY pnpm-lock.yaml ./
RUN pnpm fetch

ADD . ./
RUN pnpm install --offline

RUN pnpm run build

CMD [ "pnpm", "preview", "--host" ]