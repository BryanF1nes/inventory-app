require("dotenv").config();
const express = require("express");
const path = require("path");
const itemRouter = require("./routes/itemRouter.js");
const categoryRouter = require("./routes/categoryRouter.js");
const indexRouter = require("./routes/indexRouter.js");
const app = express();

// Static
const assetPath = path.join(__dirname, "static");


app.set("view engine", "ejs");
app.use(express.static(assetPath));
// Views
app.use("/", indexRouter);


// API End Points
app.use("/item", itemRouter);
app.use("/category", categoryRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on: ${PORT}`));