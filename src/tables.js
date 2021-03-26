var mysql = require('mysql');

//team1 password = team1comsVM@319
//new root user password = comsVM@319

var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "07aaa7b7ad12ca54",
    database: "mydb"
});
// creating tables do >"node  tables.js" once cd'ed into the src folder
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE users( "+
      "uname VARCHAR(20), "+ 
      "datemade DATETIME, "+ 
      "password VARCHAR(255), "+
      "profilepic VARCHAR(255), " +
      "PRIMARY KEY (uname));\n "+
      "CREATE TABLE stats( "+
      "username VARCHAR(20), "+
      "elo INT, "+
      "numWins INT, "+
      "winRatio FLOAT(7,5), "+
      "numGames INT, "+
      "numGamesOnWhite INT, " +
      "numOfPiecesTaken INT, " +
      "numOfBlunders INT, "+
      "FOREIGN KEY (username) REFERENCES users(uname), " +
      "PRIMARY KEY (username));\n ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
});

//sudo /usr/local/bin/isu_mysql_initialize
//root
//07aaa7b7ad12ca54PRIMARY KEY 
