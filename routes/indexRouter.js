const { Router } = require("express");
const indexController = require("../controllers/indexController.js");
const router = Router();

router.get("/", indexController.homePage);
router.get("/add-item", indexController.getAddItemForm);

module.exports = router;