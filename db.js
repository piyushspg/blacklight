const mysql = require("mysql");


const pool = mysql.createPool({
    host: "sql6.freesqldatabase.com", // Replace with your database host
    user: "sql6686749", // Replace with your database username
    password: "P2HQ7nQEGW", // Replace with your database password
    database: "sql6686749", // Replace with your database name
  });

// Export the pool for reuse
module.exports = pool;
