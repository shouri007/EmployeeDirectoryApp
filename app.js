var express = require('express');
var config = require('./server/configure');
var path = require('path');
var app = express();
app = config(app);
var mongoose = require('mongoose');
var port = 3000 || process.env.PORT;
mongoose.connect('mongodb://localhost/employees');
mongoose.connection.on('open',function () {
    console.log('Mongooose connected');
});

app.set('port',port);
app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port);
console.log("Application listening on port "+port);
