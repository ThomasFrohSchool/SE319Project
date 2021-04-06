var mysql = require('mysql');

//team1 password = team1comsVM@319
//new root user password = comsVM@319

var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "07aaa7b7ad12ca54",
    database: "mydb"
});
var loginUserName = 'zDoda';
var sql = 'SELECT * FROM users\n' +
'WHERE uname = \'' + loginUserName + '\';';

con.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  var details = results;

  console.log(details.uname + " " + details.password);
});

con.end(); 
