const mysql = require('mysql');
const express = require('express');
const ejs = require('ejs');
const connection = require('./model/Connection.js');
const studentRouter = require('./routers/student-router.js');

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", 'ejs');
app.use(express.static('public'));

connection.connect(err => {
    if (err) console.log("There is an error while connecting" + err);
    app.listen(4000);

    console.log("DB Connected" + connection.threadId);
    console.log("Server started at port 4000");

})

app.use('/', studentRouter);
