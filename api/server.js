const express = require('express');
const path = require('path');
const mysql = require("mysql");
//const createuser = require("./src/createuser");
const app = express(),
    //bodyParser = require("body-parser");
    port = 3080;

const users = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, '../next-app/out')));

app.post('/api/users', (req, res) => {
    console.log("api/users called")
    var con = mysql.createConnection({
        host:"coms-319-g10.cs.iastate.edu",
        user: "root",
        password: "07aaa7b7ad12ca54",
        database: "mydb"
    });
    var sql = 'SELECT * FROM users';
    
    con.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      var details = results;
      res.json(details);
    });
    con.end()
});

app.post('/api/login', (req, res) => {
    var details;
    var j = JSON.stringify(req.body);
    //console.log(j);
    const user = JSON.parse(j);
    console.log('api/login called');
    console.log('Attempting to login', user);

    var con = mysql.createConnection({
        host:"coms-319-g10.cs.iastate.edu",
        user: "root",
        password: "07aaa7b7ad12ca54",
        database: "mydb"
    });
    var loginUserName = user.user.uname;
    var loginPassword = user.user.pword;
    var sql = 'SELECT * FROM users\n' +
    'WHERE uname = \'' + loginUserName + '\';';
    
    con.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
      details = results[0];
      if(details.password != loginPassword) {
          res.json(null);
          console.log("Password does not match");
      }
      else {
        console.log(details.uname + " " + details.password);
        res.json(details);
      }
    });
    //console.log("Details: " + details);
    con.end();
});

app.post('/api/register', (req, res) => {
    var j = JSON.stringify(req.body);
    //console.log(j);
    const user = JSON.parse(j);
    console.log('Adding user:::::::', user);

    //createuser.newUser(user.user.username, user.user.firstName, user.user.lastName, user.user.email, user.user.password);

    var con = mysql.createConnection({
        host:"coms-319-g10.cs.iastate.edu",
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
        "VALUES("+ "'" + user.user.username + "'" + ", " + "'" + user.user.firstName + "'" + ", " + "'" + user.user.lastName + "'" + ", " + "'" + user.user.email + "'" + ", " + "'" + datetime + "'" + ", " + "'" + user.user.password + "'" + ", " + "default" +")";
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("User inserted");
        });
    });
    users.push(user);
    //var sql = require('./src/createuser');
    //sql.newUser(user.username, user.first, user.last, user.email, user.password);
    res.json("user added");
});

app.post('/api/users/*', (req, res) => {
    var j = JSON.stringify(req.body);
    if (j == null || j == {}) return;
    const useri = JSON.parse(j);
    var user = useri['context']['params']['user']
    user = user.replace(' ' , '')

    var con = mysql.createConnection({
        host:"coms-319-g10.cs.iastate.edu",
        user: "root",
        password: "07aaa7b7ad12ca54",
        database: "mydb"
    });
    var userName = user;
    var data;
    var sql = 'SELECT * FROM users\n' +
    'WHERE uname = \'' + userName + '\';';
    
    con.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      data = results[0];
      
      res.json(data);
    });
    con.end();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../next-app/out/index.html'));
});

app.get('/user/*', (req, res) => {
    var user = req.params['0']
    res.sendFile(path.join(__dirname, '../next-app/out/user/' + user + '.html'));
});

app.get('/api/users/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/api/[user].js'));
});

app.listen(port, () => {
    console.log('Server listening on the port::${port}');
});


/*const express = require("express");
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