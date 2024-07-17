const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/ServerConfig");

const TicketController = require('./controller/ticket-controller');

const jobs = require('./utils/job');

//const {sendBasicEmail} = require('./services/email-service');
const EmailService = require('./services/email-service');
const {subscribeMessage,createChannel } = require('./utils/messageQueue');
const {REMINDER_BINDING_KEY} = require('./config/ServerConfig');

const app = express();

const configAndStartServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/api/v1/tickets',TicketController.create);

  const channel = await createChannel();
  subscribeMessage(channel,EmailService.subscribeEvents,REMINDER_BINDING_KEY);

  app.listen(PORT, () => {
    console.log(`server is started at ${PORT}`);
    //jobs();

    // sendBasicEmail(
    //     'support@admin.com',
    //     'rajveerrjz1605@gmail.com',
    //     'This is a third testing mail',
    //     'Hey i hope this mail finds you well.THIS IS FOR TESTING PURPOSE'
    // )
    
  });
};

configAndStartServer();
