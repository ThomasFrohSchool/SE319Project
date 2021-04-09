import { useCookies, Cookies } from "react-cookie"
import { queryUser } from "../../../../api/src/queryuser"

var mysql = require('mysql');

var con = mysql.createConnection({
    host:"coms-319-g10.cs.iastate.edu",
    user: "root",
    password: "07aaa7b7ad12ca54",
    database: "mydb"
});

function getNameFromCookie(cname) {
    const cookies = new Cookies();
    return cookies.get(cname);  
}

export default function handler(req, res) {
    var query;
    con.query('SELECT * FROM users\n' + 'WHERE uname = \'' + getNameFromCookie("user") + '\';', (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        var details = results;
        for (const result in details) {
            if (result.uname == user) {
                query = {
                    user,
                    userData: {
                        username: result.uname,
                        passowrd: result.password
                    }
                }
            }
        }
    });
    console.log("1 " + query)
    res.response(200).json(query);
}