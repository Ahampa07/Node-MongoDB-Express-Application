// app.js

var express = require('express');
var bodyParser = require('body-parser');

var user = require('./routes/userRoutes'); 
var blogs = require('./routes/blogRoutes'); // Imports routes for the products
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose'); //mongoose is a mongodb & node.js library which provides schema validation 
                                    
//mongoose.connect('mongodb://localhost:27017/friendlist');


var dev_db_url = 'mongodb://localhost/friendlist';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);     // need to connect with mongodb 

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', user);
app.use('/blogs', blogs);

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
