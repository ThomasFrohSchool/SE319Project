var mysql = require('mysql');

//team1 password = team1comsVM@319
//new root user password = comsVM@319
function newUser(username, first, last, email, password){
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
        "VALUES("+ username + "," + first + "," + last + "," + email +"," + datetime + "," + password + "," + "default" +")";
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("User inserted");
        });
    });
}