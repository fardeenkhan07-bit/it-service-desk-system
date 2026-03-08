const mysql = require("mysql2");

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "NewPassword123!",
database: "service_desk"
});

db.connect(err => {

if(err){
console.log("Database connection failed");
}else{
console.log("Database connected");
}

});

module.exports = db;