const db = require("../db/queries.js");

async function getItems(req, res) {
    const items = await db.getAllItems();

    if (!items) {
        return res.status(404).send('No items found.');
    };

    res.send(items);
}

async function getTable(req, res) {
    const items = await db.getTable();

    if (!items) {
        return res.status(404).send('No table');
    };

    res.json({ items: items});
}

module.exports = {
    getItems,
    getTable,
}