FROM node:20

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el código fuente de tu aplicación al contenedor
COPY . .

# Exponer el puerto que usará la aplicación (3000 en este caso)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD [ "node", "app.js" ]