var express = require('express')
var bodyParser = require('body-parser');
var app = express();

/*
    App settings
*/
// Use the body-parser package in our application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Route to the rest api      .../api/tasks
app.use('/api', require('./rest'));
app.use(express.static('public'));
app.listen(4400);