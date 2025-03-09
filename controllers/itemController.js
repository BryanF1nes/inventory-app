const db = require("../db/queries.js");

async function getItems(req, res) {
    const items = await db.getAllItems();

    if (!items) {
        return res.status(404).send('No items found.');
    };

    res.send(items);
}

module.exports = {
    getItems,
}