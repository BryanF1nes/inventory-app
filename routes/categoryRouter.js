const { Router } = require("express");
const categoryController = require("../controllers/categoryController.js");
const categoryRouter = Router();

categoryRouter.get("/", categoryController.getCategories);

module.exports = categoryRouter;