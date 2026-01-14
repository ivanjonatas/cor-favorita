# Estágio 1: Build do TypeScript
FROM node:18-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio 2: Servir com Nginx
FROM nginx:stable-alpine
# Copia o build do estágio anterior para a pasta do Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]