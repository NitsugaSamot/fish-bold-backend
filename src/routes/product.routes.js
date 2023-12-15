const { Router } = require("express");
const { createProductHandler, getProductsHandler} = require("../handlers/product.handler");
const {checkAuth} = require("../middleware/checkAuth")
const productRouter = Router();

productRouter
  .get('/', getProductsHandler)
  .post('/create', createProductHandler)

module.exports = productRouter