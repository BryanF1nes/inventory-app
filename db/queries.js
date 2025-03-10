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

async function getTable() {
    try {
        const { rows } = await pool.query("SELECT item.id, item.name, item.price, category.name AS category_name FROM item INNER JOIN category ON item.category_id = category.id");
        return rows;
    } catch (err) {
        console.error('Unable to perform an INNER JOIN operation.', err);
    }
}

module.exports = {
    getAllCategories,
    getAllItems,
    getTable,
}