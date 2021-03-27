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
    var currentdate = new Date(); 
    var datetime = ""+currentdate.getFullYear() + "-"
                    + (currentdate.getMonth()+1)  + "-" 
                    + currentdate.getDate() + " "
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    sql = "INSERT INTO users(uname, first, last, email, datemade, password, profilepic)\n" + 
    "VALUES(testuser1, test2, user, test1@user.com," +datetime+", password, default),\n"+
    "(testuser2, test2, user, test2@user.com," +datetime+", password, default),\n"+
    "(testuser3, test3, user, test3@user.com," +datetime+", password, default),\n"+
    "(zDoda, Camdyn, Zook, czook@iastate.edu," +datetime+", hehexd69, default);";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Dropped");
    });
});