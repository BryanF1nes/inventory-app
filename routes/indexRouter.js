const { Router } = require("express");
const indexController = require("../controllers/indexController.js");
const router = Router();

router.get("/", indexController.homePage);

module.exports = router;