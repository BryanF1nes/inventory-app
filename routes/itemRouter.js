const { Router } = require("express");
const itemController = require("../controllers/itemController.js");
const itemRouter = Router();

itemRouter.get("/", itemController.getItems);
itemRouter.get("/table", itemController.getTable);

module.exports = itemRouter;