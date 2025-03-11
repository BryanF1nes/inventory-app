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

async function getItem(req, res) {
    const { id } = req.params;
    const item = await db.getItem(id);
    const categories = await db.getAllCategories()

    if (!item) {
        return res.status(404).send("Unable to find that item.");
    };

    res.render("editItem", { title: "Edit Item", item: item, categories: categories });
}

async function updateItem(req, res) {
    const { id } = req.params
    const { name, price, category } = req.body;

    await db.updateItem(id, name, price, category);
    res.redirect("/");
}

async function deleteItem(req, res) {
    const { id } = req.params;

    await db.deleteItem(id);
    res.redirect("/");
}

module.exports = {
    getItems,
    getTable,
    getItem,
    updateItem,
    deleteItem
}