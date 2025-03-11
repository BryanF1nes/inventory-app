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

async function addItem(name, price, category) {
    try {
        const categoryResult = await pool.query("SELECT id FROM category WHERE name = $1", [category]);
        const category_id = categoryResult.rows[0].id;

        await pool.query(
            "INSERT INTO item (name, price, category_id) VALUES ($1, $2, $3)",
            [name, price, category_id]
        );
    } catch (err) {
        console.error('Unable to insert item into the table.', err);
    }
}

module.exports = {
    getAllCategories,
    getAllItems,
    getTable,
    addItem
}