const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/ServerConfig");

const {sendBasicEmail} = require('./services/email-service');

const app = express();

const configAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`server is started at ${PORT}`);

    sendBasicEmail(
        'support@admin.com',
        'rajveerrjz1605@gmail.com',
        'This is a third testing mail',
        'Hey i hope this mail finds you well.THIS IS FOR TESTING PURPOSE'
    )
    
  });
};

configAndStartServer();
