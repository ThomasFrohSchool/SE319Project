import { queryUser } from '../../../../api/src/queryuser'

var mysql = require('mysql');

var con = mysql.createConnection({
    host:"coms-319-g10.cs.iastate.edu",
    user: "root",
    password: "07aaa7b7ad12ca54",
    database: "mydb"
});

export default function userHandler(req, res) {
    var query;
    con.query('SELECT * FROM users\n' + 'WHERE uname = \'' + req.query + '\';', (error, results, fields) => {
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

    console.log("Query: " + query)
    if (query.length > 0) {
        res.status(200).json(query)
    }
    else {
        res.status(404).json({ message: 'User, ${id}, could not be found' })
    }
}