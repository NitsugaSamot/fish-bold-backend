const { MercadoPagoConfig, Preference } = require('mercadopago');

const client = new MercadoPagoConfig({
  accessToken: 'APP_USR-8630137783709885-120921-9b04c1301aa7edde14273cf462787624-197262618',
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

    // preference.create({
    //   body: {
    //     items: items,
    //   },
    // });

    // res.status(200).json({ preferenceId: preference.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error)
  }
};

module.exports = placeOrder;


// const { MercadoPagoConfig, Preference } = require('mercadopago');

// const client = new MercadoPagoConfig({
//   accessToken: 'TEST-7430874297712388-120818-c32a720a5693e592d80cc356c7d9e677-261945798',
//   options: { timeout: 5000 }
// });


// const placeOrder = async (req, res) => {
//   try {

//     const preference = new Preference(client);

// preference.create({
//   body: {
//     items: [
//       {
//         id: '<ID>',
//         title: '<title>',
//         quantity: 1,
//         unit_price: 100
//       }
//     ],
//   }
// }).then(console.log).catch(console.log);


//   } catch (error) {
//     res.status(400).json({ error: error.message })
//   }
// };

// module.exports = placeOrder

// const { MercadoPagoConfig, Preference } = require ('mercadopago');
// // const client = new MercadoPagoConfig({ accessToken: 'TEST-7430874297712388-120818-c32a720a5693e592d80cc356c7d9e677-261945798' });



// const client = new MercadoPagoConfig({ accessToken: 'TEST-7430874297712388-120818-c32a720a5693e592d80cc356c7d9e677-261945798', options: { timeout: 5000 } });

// const preference = new Preference(client);

// preference.create({ body: {
// 	items: [
// 		{
// 			id: '<ID>',
// 			title: '<title>',
// 			quantity: 1,
// 			unit_price: 100
// 		}
// 	],
// } }).then(console.log).catch(console.log);

 

//         // SDK do Mercado Pago
//         const mercadopago = require('mercadopago');
//         // Adicione as credenciais
//         mercadopago.configure({
//           access_token: 'PROD_ACCESS_TOKEN'
//         });

//         // Cria um objeto de preferência
//         let preference = {
//           items: [
//             {
//               id: 'item-ID-1234',
//               title: 'Meu produto',
//               currency_id: 'BRL',
//               picture_url: 'https://www.mercadopago.com/org-img/MP3/home/logomp3.gif',
//               description: 'Descrição do Item',
//               category_id: 'art',
//               quantity: 1,
//               unit_price: 75.76
//             }
//           ],
//           payer: {
//             name: 'João',
//             surname: 'Silva',
//             email: 'user@email.com',
//             phone: {
//               area_code: '11',
//               number: '4444-4444'
//             },
//             identification: {
//               type: 'CPF',
//               number: '19119119100'
//             },
//             address: {
//               street_name: 'Street',
//               street_number: 123,
//               zip_code: '06233200'
//             }
//           },
//           back_urls: {
//             success: 'https://www.success.com',
//             failure: 'http://www.failure.com',
//             pending: 'http://www.pending.com'
//           },
//           auto_return: 'approved',
//           payment_methods: {
//           excluded_payment_methods: [],
//           excluded_payment_types: [],
//           installments: 1
// },
//           notification_url: 'https://www.your-site.com/ipn',
//           statement_descriptor: 'MEUNEGOCIO',
//           external_reference: 'Reference_1234',
//           expires: true,
//           expiration_date_from: '2016-02-01T12:00:00.000-04:00',
//           expiration_date_to: '2016-02-28T12:00:00.000-04:00'
//         };

//         mercadopago.preferences
//           .create(preference)
//           .then(function (response) {
//             // Este valor substituirá a string "<%= global.id %>" no seu HTML
//             global.id = response.body.id;
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
        

// // const mercadopago = require('mercadopago')
// require('dotenv').config()
// // const { ACCESS_TOKEN } = process.env
// // SDK de Mercado Pago
// const { MercadoPagoConfig } = require ('mercadopago');
// // Agrega credenciales
// // const client = new MercadoPagoConfig({ accessToken: 'TEST-7430874297712388-120818-c32a720a5693e592d80cc356c7d9e677-261945798' });



// //Configuración de las credenciales de acceso a la API de Mercado Pago
// // mercadopago.configure({
// //   access_token: ACCESS_TOKEN,
// // })
// // mercadopago.SDK.accessToken = ACCESS_TOKEN;

// const client = new MercadoPagoConfig({ accessToken: 'TEST-7430874297712388-120818-c32a720a5693e592d80cc356c7d9e677-261945798', options: { timeout: 5000 } });

// const preference = new Preference(client);

// preference.create({ body: {
// 	items: [
// 		{
// 			id: '<ID>',
// 			title: '<title>',
// 			quantity: 1,
// 			unit_price: 100
// 		}
// 	],
// } }).then(console.log).catch(console.log);

// const preference = new Preference(client);

// // Definición de la función asincrónica que maneja la creación de la orden de compra
// const placeOrder = async (req, res) => {
//   try {
//     // Obtención de los datos del formulario
//     const { id, name, description, brand, price } = req.body
//     // Creación de la orden de compra
//     let preference = {
//       		items: [
//       			{
//               id: id,
//       				title: name,
//               image: image,
//       				unit_price: price,
//       				// quantity: quantity,
//                     brand: brand,
//               description: description,
//               currency_id: "ARS"
//       			}
//       		],
//       // URLs de redirección después del pago (éxito, fallo y pendiente)
//       back_urls: {
//         success: 'http://localhost:3000/confirmation', // URL en caso de éxito
//         failure: 'http://localhost:3000', // URL en caso de fallo
//         pending: 'http://localhost:3002' // URL en caso de pendiente
//       }
//       //*Forma que aparece en la api de mercado pago
//       // auto_return "approved"
//     };

//     // Creación de la preferencia de pago en Mercado Pago
//     const response = await mercadopago.preferences.create(preference)

//     //* Forma que esta en la api de mercado pago 
//     // mercadopago.preferences.create(preference)
//     // .then(funcition (response) {
//     //   res.json({
//     //     id: response.body.id
//     //   })
//     // })
//     console.log(response);
//     //Respuesta exitosa con la preferencia creada
//     res.status(200).json({ response })
//   } catch (error) {
//     res.status(400).json({ error: error.message })
//   }
// };

// module.exports = placeOrder
