const express = require('express');
const path = require('path');
const mysql = require("mysql");
const app = express(),
    bodyParser = require("body-parser");
    port = 3080;

const users = [];

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "07aaa7b7ad12ca54",
    database: "mydb",
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../next-app/out')));

app.get('/api/users', (req, res) => {
    console.log('api/users called')
    res.json(users);
});

app.post('/api/user', (req, res) => {
    const user = req.body.user;
    console.log('Adding user:::::::', user);
    //console.log(req);
    /*db.query("INSERT INTO users (uname, password) VALUES (?,?)", 
    [username, password], 
    (err, result) => {
        console.log(err);
    });*/
    var con = mysql.createConnection({
        host:"localhost",
        user: "root",
        password: "07aaa7b7ad12ca54",
        database: "mydb"
    });
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var currentdate = new Date();
        var year, month, day, hours, minutes, seconds;
        year = String(currentdate.getFullYear());
        month = String(currentdate.getMonth() + 1);
        if (month.length == 1) {
            month = "0" + month;
        }
        day = String(currentdate.getDate());
        if (day.length == 1) {
            day = "0" + day;
        }
        hours = String(currentdate.getHours());
        if (hours.length == 1) {
            hours = "0" + hours;
        }
        minutes = String(currentdate.getMinutes());
        if (minutes.length == 1) {
            minutes = "0" + minutes;
        }
        seconds = String(currentdate.getSeconds());
        if(seconds.length ==1){
            seconds = "0"+seconds;
        }

        var datetime = ""+ year + "-"
                        + month  + "-" 
                        + day + " "
                        + hours + ":"  
                        + minutes + ":" 
                        + seconds;
        sql = "INSERT INTO users(uname, first, last, email, datemade, password, profilepic)\n" + 
        "VALUES("+ user + "," + user.firstName + "," + user.lastName + "," + user.email +", " + datetime + "," + user.password + "," + "default" +")";
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("User inserted");
        });
    });
    users.push(user);
    res.json("user added");
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../next-app/out/index.html'));
});

app.listen(port, () => {
    console.log('Server listening on the port::${port}');
});


/*const express = require("express");
const mysql = require("mysql");
const rs = require("readline-sync");

var u = rs.question("What is your username? ");
var p = rs.question("What is your password? ");

const users = [
    user1 = {
        username: "thomas",
        password: "lol"
    },
    user2 = {
        username: "nate",
        password: "zoosk"
    }
]

function login(user, pw) {
    //console.log(user1.username + " " + user1.password);
    var found = false;
    for(let i = 0; i < users.length; i++) {
        if(user === users[i].username && pw === users[i].password) {
            console.log("Login successful!");
            found = true;
            break;
        }
    }
    if(found === false) {
        console.log("Login failed");
    }
}

login(u, p);*/

/*
const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "coms-319-g10.cs.iastate.edu",
    password: "07aaa7b7ad12ca54",
    database: "users",
});

app.post('/users', (req, res)=> {

    db.query("INSERT INTO users (username, password) VALUES (?,?)", [username, password], (err, result)=> {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("running server");
});*/