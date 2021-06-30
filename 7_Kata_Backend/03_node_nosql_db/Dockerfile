# Aqui van las instrucciones para crear una imagen de docker

# Le digo a docker que version de node voy a usar
FROM node:12

# Le digo a docker donde van a estar las carpetas/proyectos que voy a usar dentro de mi container AHORA ES LA CARPETA RAIZ
WORKDIR /usr/src/app 

# Decirle a docker como levantar mi proyecto de node

# Copiar el pacakge json y ponerlo en la carpeta raiz del contenedor
COPY package.json ./

# Una vez copiado el package json ahora se instalan las dependencias
RUN npm install

# Instalo nodemon de manera global
RUN npm install -g nodemon

# Copiar la todo en donde estas parado a la raiz del contenedor
COPY . .

# Exponer un puerto desde el container
EXPOSE 4020

# El comando para correr mi proyecto con node
# CMD ["node", "index.js"]

# Comando para correr nodemon
CMD ["nodemon", "-L", "--watch", ".", "index.js"]
# CMD ["node", "index.js"]