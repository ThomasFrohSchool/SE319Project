var mysql = require('mysql');

//team1 password = team1comsVM@319
//new root user password = comsVM@319

var con = mysql.createConnection({
    host:"localhost",
    user: "team1",
    password: "team1comsVM@319",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
});