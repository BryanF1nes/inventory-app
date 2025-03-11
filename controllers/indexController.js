const db = require("../db/queries.js");
const { body, validationResult } = require("express-validator");

const lengthErr = "must be between 1 and 30 characters.";
const numErr = "must only contain a decimal value. E.G - 19.99"
const numLength = "can not exceed 100,000."

const validateItem = [
  body("name").trim()
    .isLength({ min: 1, max: 30 }).withMessage(`Item name ${lengthErr}`),
  body("price").trim()
    .isLength({ min: 0, max: 100000 }).withMessage(`Price ${numLength}`)
    .isDecimal().withMessage(`Price ${numErr}`),
];

exports.homePage = (req, res) => {
    res.render("index", { title: "Inventory App"});
}

exports.getAddItemForm = async (req, res) => {
    const categories = await db.getAllCategories();

    res.render("addItem", { title: "Add Item", categories: categories });
}

exports.postItem = [
    validateItem, 
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const categories = await db.getAllCategories();
            return res.status(400).render("addItem", { 
                title: "Add Item",
                categories: categories,
                errors: errors.array(), 
            })
        }

        const { name, price, category } = req.body;
        await db.addItem(name, price, category);

        res.redirect("/")
    }
];