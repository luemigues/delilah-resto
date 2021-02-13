# Delilah Resto - Backend Proyect

## Test de API
Get the server running and enter https://documenter.getpostman.com/view/12198401/TW74k5fZ.

### The proyect consist on a Rest API, which allows user to manage a list of users, products and orders from a restaurant. The API allows connection with a MySQL database to store and manage the Resto's data.

### Resources and technologies

- Node.js
- MySQL
- Express
- Jason Web Token for authentication via Token
- Sequelize
- Postman for endpoint management and testing
- Swagger for API documentation
- Crypto for password encryption

### Main features

- Role validation and identification with JWT
- CRUD of users, products and orders
- Recognition the user ID and admin role through the token
- Validation of data sent through the request's body

## API documentation

Open the file `Delilah-resto.v1.yaml` located in the` reference` folder and copy its content to [Swagger] (https://editor.swagger.io/) or import from the options. You will be able to see the list of endpoints, available methods and the information necessary to make use of them.

## Getting started

### 1 - Create the server

1. Install [nodejs] (https://nodejs.org) or check if you already have it installed in the terminal by entering the command
```bash
node --version

```
2. Clone the repository. For this step it is important to install [Git] (https://git-scm.com/). Then open the terminal, clone the repository and install the dependencies.
```bash
git clone https://github.com/luemigues/delilah-resto.git
cd delilah-resto
npm install
```

3. Go to the folder where the cloned repository is located and create an `.env` file. This will allow you to setup the database and the token by entering passwords privately that will not be made public. Inside the file add these fields:

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

IMPORTANT: The names of the fields (eg: DB_NAME, etc) MUST NOT BE MODIFIED, since they setup the connection to the Database. Neither should there be spaces added before or after the `=` sign as it will alter the result. There should be no spaces, no quotes, or commas.


### 2 - Create database

You can install the database you want on your computer XAMPP, MariaDB, Worbench MySQL from ORACLE or on an external server.
Once the database is installed and the * .env * file is setup, the application will automatically create the Database, as well as the tables and their relationships.

In case you would like to populate the tables with some examples, follow these steps:
1. Open the database platform to be used.
2. Go to the server tab.
3. Import the .sql files located in the "Populate_tables" folder contained within the ¨database¨ folder.
4. You can also copy and paste the texts within each file to achieve the same result.


### 3 - Start the server

Open terminal and run the following command:
```bash
npm start
```

### 4 - The database is ready to be used!

#### Testing the API:
 Go to https://documenter.getpostman.com/view/12198401/TW74k5fZ. You will find the documentation for the API implementation and by clicking on "Run in Postman" at the top right you can test it once the previously have setup the server and have it running. In case the web button doesn't not work, the file `Delilah-resto API.postman_collection` located in the` Reference` folder can also be imported into Postman.


## NPM Packages
- Express : Framework that provides an easy-way to handle request and managing routes.
- nodemon : Used in dev instance for fast server reloading.
- jsonwebtoken : Creation and validation of JWT authorization method.
- dotenv : Used to protect JWT passphrase.
- body-parser : Parse incoming request bodies in a middleware before your handlers.
- Sequelize : ORM for MySQL connection and querying.
- mysql2 : MySQL client for nodejs. Integrated in Sequelize.
- cryptr : A simple aes-256-gcm encrypt and decrypt module for node.js


