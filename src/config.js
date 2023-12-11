require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3002,
  db: {
    uri: process.env.MONGO_URI,
  },
};

//Se pueden crear mas variables de entorno en el archivo .env y vinculandolas aqui
