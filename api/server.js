const express = require('express');
const path = require('path');
const app = express(),
    bodyParser = require("body-parser");
    port = 3080;

const users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../next-app/out')));

app.get('/api/users', (req, res) => {
    console.log('api/users called')
    res.json(users);
});

app.post('/api/user', (req, res) => {
    const user = req.body.user;
    console.log('Adding user:::::::', user);
    users.push(user);
    var sql = require('./src/createuser');
    sql.newUser(user.username, user.first, user.last, user.email, user.password);
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