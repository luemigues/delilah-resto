# Delilah Resto - Acamica Backend Proyect
### El objetivo del trabajo es generar el backend de una app de pedidos llamada Delilah Restó, generando la arquitectura, bases de datos relacionales, endpoints funcionales y documentación para que la API que pueda ser consumida.

### Recursos y tecnologías utilizadas

- Node.js
- MySQL
- Express
- Jason Web Token para autenticación via Token
- Sequelize
- Postman para manejo de endpoints y testing
- Swagger para documentación de API
- Crypto para encriptacion de contraseñas

### Principales Características

- Validación de roles e identificación con JWT
- CRUD de usuarios, productos y pedidos
- Permite reconocer al usuario por medio del token
- Validación de datos enviados mediante el body de la petición

## Documentación de la API

Abrir el archivo `Delilah-resto.v1.yaml` ubicado en la carpeta `reference` y copiar su contenido en [Swagger](https://editor.swagger.io/) o importar el mismo desde las opciones. Se podrá ver el listado de endpoints, métodos disponibles y la información necesaria para hacer uso de los mismos.

## Como iniciar ?
### 1. Crear el servidor

1. Instale [nodejs](https://nodejs.org) o verifique si ya lo tiene instalado en el terminal ingresando el comando
```bash
node --version
```

2. Clone el repositorio. Para este paso es importante instalar [Git](https://git-scm.com/). Luego abra la consola, clone el repositorio e instale las dependencias

```bash
git clone https://github.com/luemigues/delilah-resto.git
cd delilah-resto
npm install
```

3. Ingrese a la carpeta donde se encuentra el repositorio clonado y cree un archivo `.env` . Esto le permitirá configurar la base de datos y el token ingresando contraseñas de forma privada que no quedarán de acceso público. Dentro del archivo agregue estos campos:

```bash
DB_USER=*usuario de la base de datos*
DB_PASS=*contraseña de la base de datos*
DB_HOST=*127.0.0.1 (si es localhost) o dirección del host*
DB_PORT=*Por defecto: 3306*
DB_NAME=*nombre de la base de datos*
DB_DIALECT=*mysql | mariadb | postgres | mssql*
SIGNATURE=*firma secreta para encriptar token*
CRYPTOKEY=*firma secreta para encriptación de las contraseñas de los usuarios*
```

IMPORTANTE: Los nombres de los campos (ej: DB_NAME, etc) NO DEBEN MODIFICARSE, ya que configuran la conexión a la Base de datos. Tampoco deben agregarse espacios antes o después el signo `=` ya que alterara el resultado. No deben haber espacios, ni comillas, ni comas


### 2 - Crear base de datos

Puede instalar en su ordenador la base de datos que desee XAMPP, MariaDB, Worbench MySQL de ORACLE o bien en un servidor externo.
Una vez instalada la base y configurado el archivo *.env*, la aplicación creará automáticamente tanto la Base de Datos, como las tablas y sus relaciones.

En caso que se quisieran popular las tablas con algunos ejemplos, seguir los siguientes pasos:
1. Abrir el la plataforma de base de datos que se usará.
2. Ir a la pestaña de servidor.
3. Importar los archivos .sql ubicados en la carpeta "Populate_tables" contenida dentro de la carpeta ¨database¨.
4. También, se puede copiar y pegar los textos dentro de cada archivo y se obtendrá el mismo resultado. 

### 3. Iniciar el servidor

Abra la terminal y corra el siguiente comando. 

```bash
npm start
```

### 4. ¡La base de datos ya está lista para ser usada!

#### Para probar la implementación de la API: 
 Ingresar a https://documenter.getpostman.com/view/12198401/TW74k5fZ. Allí se pude ver la documentación para la implementación de la API y dando click en "Correr en Postman" arriba a la derecha se podrá testar la misma una vez que esté corriendo el server previamente configurado. En caso que el botón de la web no funcionará, también se podrá importar en Postman el archivo `Delilah-resto API.postman_collection` ubicado en la carpeta `Reference`. 

## NPM Packages
Express : Framework that provides an easy-way to handle request and managing routes.
nodemon : Used in dev instance for fast server reloading.
jsonwebtoken : Creation and validation of JWT authorization method.
dotenv : Used to protect JWT passphrase.
body-parser : Parse incoming request bodies in a middleware before your handlers.
Sequelize : ORM for MySQL connection and querying.
mysql2 : MySQL client for nodejs. Integrated in Sequelize.
cryptr : A simple aes-256-gcm encrypt and decrypt module for node.js


