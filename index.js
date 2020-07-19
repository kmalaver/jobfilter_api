const express = require("express");

const app = express();

const { config } = require("./config/index");
const api = require("./routes/index");

api(app);

app.listen(config.port, () => {
  console.log(`listening at port ${config.port}`);
});
