const { Pool } = require("pg");

module.exports = new Pool({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    ssl: {
        rejectUnauthorized: false,
    },
});

// module.exports = new Pool({
//     host: process.env.HOST,
//     database: process.env.NAME,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     port: process.env.DB_PORT
// });