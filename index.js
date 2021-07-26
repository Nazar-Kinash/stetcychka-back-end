const express = require("express");
const app = express();

console.log("Hello Worlds");
app.listen(3030, (err) => (err ? console.log(err) : console.log(`Server started: ${3030}`)));
