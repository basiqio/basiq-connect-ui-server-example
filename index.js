/*eslint no-console: "off"*/

const host = "0.0.0.0";
const port = 80;
const express = require("express");
const bodyParser = require("body-parser");

const authenticationController = require("./controllers/authentication");

const app = express();

app.use(bodyParser.json());

app.post("/access_token", authenticationController.accessTokenCheck);
app.post("/user", authenticationController.createAUser);

app.listen(port, host);

console.log("Running server at http://localhost:" + port + "/");