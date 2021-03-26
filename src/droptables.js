var mysql = require('mysql');

//team1 password = team1comsVM@319
//new root user password = comsVM@319

var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "07aaa7b7ad12ca54",
    database: "mydb"
});
// Dropping tables do >"node droptables.js" once cd'ed into the src folder
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "DROP TABLE users;\n"+
    "DROP TABLE stats;";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
});

//sudo /usr/local/bin/isu_mysql_initialize
//root
//07aaa7b7ad12ca54PRIMARY KEY 