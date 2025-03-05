require("dotenv").config();
const express = require("express");
const categoryRouter = require("./routes/categoryRouter.js");
const app = express();


app.set("view engine", "ejs");
app.use("/category", categoryRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on: ${PORT}`));