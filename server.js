var express = require("express");
var fs = require("fs");

var app = express();
var Port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

