const express = require("express");
require("dotenv").config();

const productRouter = require("./products/products.router");

const db = require("./utils/database");

const { port } = require("../config");

const app = express();

//* Aqui validamos la conexion con la base de datos

db.authenticate()
    .then(() => console.log("Database Authenticated"))
    .catch((err) => console.log(err));

db.sync()
    .then(() => console.log("Database Synced!"))
    .catch((err) => console.log(err));

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "Server Ok"
    });
});

app.use('/api/v1/products', productRouter);

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
