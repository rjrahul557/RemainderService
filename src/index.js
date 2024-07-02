const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const app = express();

const configAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`server is started at ${PORT}`);
    
  });
};

configAndStartServer();
