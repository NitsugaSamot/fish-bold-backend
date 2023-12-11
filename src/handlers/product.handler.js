const { createProduct} = require("../repositories/product.repository")
const Product = require("../models/product.model")

const createProductHandler = async (req, res) => {
    try {
        // ... tu lógica de creación de producto ...
        const product = await Product.create(req.body);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getProductsHandler = async (req, res) => {
    try {
        // ... tu lógica de creación de producto ...
        const product = await Product.find();
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {createProductHandler, getProductsHandler}