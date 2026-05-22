# Etapa 1: Construcción
# Etapa 1: Construcción
FROM node:20-alpine AS build
WORKDIR /app

# Copiamos archivos de dependencias
COPY package*.json ./

# Instalar dependencias con el comando que nos funcionó localmente
RUN npm install --legacy-peer-deps

# Copiamos el resto del código
COPY . .

# Construir la aplicación
RUN npx ng build --configuration production

# Etapa 2: Servidor Nginx para servir el contenido estático
FROM nginx:alpine

# IMPORTANTE: En Angular 18 la ruta es /browser
# Asegúrate de que 'lifegoals' sea el nombre de tu proyecto en angular.json
COPY --from=build /app/dist/lifegoals/browser /usr/share/nginx/html

# Copiamos la configuración de nginx que creamos antes
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
