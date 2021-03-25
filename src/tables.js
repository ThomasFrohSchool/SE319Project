var mysql = require('mysql');

//team1 password = team1comsVM@319
//new root user password = comsVM@319

var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "07aaa7b7ad12ca54",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE users(name VARCHAR(255), id int)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
});

//sudo /usr/local/bin/isu_mysql_initialize
//root
//07aaa7b7ad12ca54