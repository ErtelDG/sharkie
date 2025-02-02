# 1. Build Stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# 2. Nginx Stage
FROM nginx:alpine
COPY --from=builder /app/public /usr/share/nginx/html
COPY --from=builder /app/src /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
