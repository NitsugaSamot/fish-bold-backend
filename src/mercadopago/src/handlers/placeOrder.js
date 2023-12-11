const { MercadoPagoConfig, Preference } = require('mercadopago');

const client = new MercadoPagoConfig({
  accessToken: process.env.ACCESS_TOKEN,
  options: { timeout: 5000 }
});

const placeOrder = async (req, res) => {
  try {
    const { products } = req.body;

    // Crear la preferencia con los productos seleccionados
    const items = products.map(product => ({
      id: product._id,
      title: product.name,
      quantity: 1,
      unit_price: parseFloat(product.price),
    }));

    const preference = new Preference(client);

    const preferenceResponse = await preference.create({
      body: { items }
    });

    res.status(200).json({ preferenceId: preferenceResponse.id });

  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error)
  }
};

module.exports = placeOrder;
