const pool = require("./pool.js");

async function getAllCategories() {
    try {
        const { rows } = await pool.query("SELECT * FROM category");
        return rows;
    } catch (err) {
        console.error("Table does not exist.");
    }    
};

async function getAllItems() {
    try {
        const { rows } = await pool.query("SELECT * FROM item");
        return rows;
    } catch (err) {
        console.error("Table does not exist.");
    }
}

module.exports = {
    getAllCategories,
    getAllItems,
}