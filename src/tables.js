var mysql = require('mysql');

//team1 password = team1comsVM@319
//new root user password = comsVM@319

var con = mysql.createConnection({
    host:"localhost",
    user: "team1",
    password: "team1comsVM@319"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE DATABASE mydb";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
});