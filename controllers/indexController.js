const db = require("../db/queries.js");

function homePage(req, res) {
    res.render("index", { title: "Inventory App"});
}

async function getAddItemForm(req, res) {
    const categories = await db.getAllCategories();

    res.render("addItem", { title: "Add Item", categories: categories });
}

module.exports = {
    homePage,
    getAddItemForm
}