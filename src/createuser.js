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
        "VALUES( '"+ username + "', '" + first + "', '" + last + "', " + email +"', '" + datetime + "', '" + password + "', " + "'default'" +")";
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("User inserted");
        });
    });
}