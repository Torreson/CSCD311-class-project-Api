const express = require('express');
const bodyParser = require('body-parser');
//const ejs = require('ejs');


//Invoking Express.js
const server = express();

//Web template
server.set('view engine','ejs');

//Middlewares
server.use(express.static('public'));
server.use(bodyParser.urlencoded({extended: false}));
server.use(express.json());
server.use('/assets', express.static('assets'));
server.use(express.urlencoded());



//Database 
const dbConnection = require('./models/connection');

//Endpoints
const studentLogin = require('./routes/loginStudent');
const studentData = require('./routes/registerStudent');
const hallRegistration = require('./routes/registerHall');
const residenceReport = require('./routes/hallAllocationReport');
server.use('/ugresidential', studentLogin);
server.use('/ugresidential',studentData );
server.use('/ugresidential', hallRegistration);
server.use('/ugresidential', residenceReport);





server.listen('2025',() => {console.log("\nServer is ready...")});