const express = require("express");
const proveedoresRouter = require("./routes/proveedores");
const brandsRouter = require("./routes/brands");
const categoriesRouter = require("./routes/categories");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/proveedores", proveedoresRouter);
app.use("/brands", brandsRouter);
app.use("/categories", categoriesRouter);

app.listen(port, () => console.log(`http://localhost:${port}`));
