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

  console.log(details[0].uname + " " + details[0].password);
  console.log(results);
});

export function getAllUsers() {
  con.query('SELECT * FROM users;', (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    return results.map(result => {
      return {
        params: {
          user: result
        }
      }
    });
  });
}

export function queryUser(user) {
  con.query('SELECT * FROM users\n' +
  'WHERE uname = \'' + user + '\';', (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    var details = results;
    for (const result in details) {
      if (result.uname == user) {
        return {
          user,
          userData: {
            username: result.uname,
            passowrd: result.password
          }
        }
      }
    }
  });
}

con.end();
