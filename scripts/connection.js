const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    // MySQL Username
    user: "root",
    // MySQL Password
    password: "mysql",
    database: "employees_db"
    
});

db.connect(function (err) {
    if (err) throw err; 

});

module.exports = db;