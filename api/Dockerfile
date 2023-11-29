
FROM node:16-alpine
WORKDIR /api
COPY tsconfig*.json ./
COPY package*.json ./
RUN npm ci
COPY . .
RUN chmod +x ./entrypoint.sh
ENTRYPOINT [ "./entrypoint.sh" ]