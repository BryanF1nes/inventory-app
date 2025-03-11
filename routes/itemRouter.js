const { Router } = require("express");
const itemController = require("../controllers/itemController.js");
const itemRouter = Router();

itemRouter.get("/", itemController.getItems);
itemRouter.get("/table", itemController.getTable);
itemRouter.get("/:id", itemController.getItem);

itemRouter.get("/delete/:id", itemController.deleteItem);
itemRouter.post("/update-item/:id", itemController.updateItem);

module.exports = itemRouter;