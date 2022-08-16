const express = require("express");
// const path = require("path");
const app = express();
const config = require("./config");
const morgan = require("morgan");
const cors = require("cors");
const { clientsRouter } = require("./routers");
const { connection } = require("./database");
// const bodyParser = require("body-parser");
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

async function initServer() {
  await connection.init();

  app.use(cors());
  app.use(express.json());
  app.use(morgan("combined"));

  app.use("/clients", clientsRouter);

  app.listen(config.port, (err) => (err ? console.log(err) : console.log(`Server started: ${config.port}`)));
}

initServer().catch(console.error);
