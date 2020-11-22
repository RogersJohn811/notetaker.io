var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var Port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
console.log(__dirname);

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

var data = fs.readFileSync('./data/db.json');
var parsedData = JSON.parse(data);
console.log(data);
console.log(parsedData);

let newNote = {
    title: "Note1",
    text: "Remember your hw is due tomorrow!"
};

parsedData.notes.push(newNote);

let _parsedData = JSON.stringify(parsedData, null, 2);

fs.writeFileSync('./data/db.json', _parsedData, writtenData);

function writtenData(err) {
    console.log('wrote data');
}
