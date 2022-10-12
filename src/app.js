const { throws } = require('assert');
const express = require('express');
const path = require('path');
const morgan=require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app=express();

//setting
app.set('port',process.env.PORT ||3000);  //establece el puerto del servidor
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

//moddlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password:'44575808',
    port: 3306,
    database:'emanuelcontables',

}, 'single'));



//routes




// starting the server
app.listen(app.get('port'), ()=>{
    console.log('server on port 3000');
});







