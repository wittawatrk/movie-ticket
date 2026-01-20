FROM node:20-alpine

RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# build typescript -> dist
RUN npm run build

CMD ["node", "dist/main"]
