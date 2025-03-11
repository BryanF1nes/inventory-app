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
};

async function getItem(id) {
    try {
        const { rows } = await pool.query("SELECT item.id, item.name, item.price, category.name AS category_name FROM item INNER JOIN category ON item.category_id = category.id WHERE item.id = $1", [id]);
        return rows[0];
    } catch (err) {
        console.error("Unable to find the item", err);
    };
}

async function updateItem(id, name, price, category) {
    try {
        const categoryResult = await pool.query("SELECT id FROM category WHERE name = $1", [category]);
        const category_id = categoryResult.rows[0].id;

        await pool.query("UPDATE item SET name = $1, price = $2, category_id = $3 WHERE id = $4", [name, price, category_id, id]);
    } catch (err) {
        console.error("Unable to edit this item", err);
    }
}

async function deleteItem(id) {
    try {
        await pool.query("DELETE FROM item WHERE id = $1", [id]);
    } catch (err) {
        console.error("Unable to find that item to delete.", err);
    }
}

module.exports = {
    getAllCategories,
    getAllItems,
    getTable,
    addItem,
    getItem,
    updateItem,
    deleteItem
}