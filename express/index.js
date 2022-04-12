const express = require("express");
const productRouter = require("./routes/products.route");
const userRouter = require("./routes/users.route");
const makeDatabaseConnection = require("./utils/db");
const app = express();

app.use(express.json());
makeDatabaseConnection();
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})