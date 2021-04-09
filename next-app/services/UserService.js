export async function getAllUsers() {
    const response = await fetch('/api/users');
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch('/api/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
    })
    return await response.json();
}
/*
var mysql = require('mysql');
    
var con = mysql.createConnection({
    host:"coms-319-g10.cs.iastate.edu",
    user: "root",
    password: "07aaa7b7ad12ca54",
    database: "mydb"
});

export function getUserData(user) {
    var query;
    con.query('SELECT * FROM users\n' + 'WHERE uname = \'' + user + '\';', (error, results, fields) => {
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
    return query;
}
*/