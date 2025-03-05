const db = require("../db/queries.js");

async function getCategories(req, res) {
    const categories = await db.getAllCategories();

    if (!categories) {
        res.status(404).send('No categories found.');
    };

    res.send(categories);
};

module.exports = {
    getCategories,
}