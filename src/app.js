const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'test',
    password: '1234',
    port: 3306,
    database: 'crudnodemysql'
}, 'single'))

//routes


app.listen(3000, ()=> {
    console.log("Server on port 3000");
})


