const { Router } = require("express");
const authRouter = require("./auth.routes")
const productRouter = require("./product.routes")
const paymentRouter = require("../mercadopago/src/routes/payment")

const mainRouter = Router();

mainRouter
  .use("/auth", authRouter)
  .use("/products", productRouter)
  .use("/mercadopago", paymentRouter)

module.exports = mainRouter;
