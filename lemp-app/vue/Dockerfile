# Usa la imagen base de Node.js
FROM node:16-alpine3.12


RUN mkdir -p /app

# Establece el directorio de trabajo en /app
WORKDIR /app

RUN yarn global add @vue/cli

# Copia el archivo package.json al directorio de trabajo

# Copia el resto de los archivos de la aplicación al directorio de trabajo
COPY . /app

# Instala las dependencias utilizando Yarn
RUN yarn install

# Compila la aplicación Vue.js para producción
CMD ["yarn", "serve"]