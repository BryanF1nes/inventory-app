const categoryController = require("./categoryController.js");
const itemController = require("./itemController.js");

function homePage(req, res) {
    res.render("index");
}

module.exports = {
    homePage,
}