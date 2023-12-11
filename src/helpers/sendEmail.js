const nodemailer = require('nodemailer');

const emailVerifyAccount = async (datos) => {
  const { email, name, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });


  



  // const url = `http://localhost:3000/${encodeURIComponent(`[token]`)}?token=${encodeURIComponent(token)}`;

  const url = `${process.env.URL_CONFIRM}${encodeURIComponent[token]}?token=${encodeURIComponent(token)}`;


  const info = await transport.sendMail({
    from: '"E-commerce-Point" <admin@E-commerce-Point.com>',
    to: email,
    subject: "E-commerce-Point - Comprueba tu cuenta",
    text: "Comprueba tu cuenta en Challenger",
    html: `<p>Hola: ${name}, Verifica tu cuenta en E-commerce-Point y comienza con nuevos desafíos!!</p>
      <p>Tu cuenta ya está casi lista, solo debes comprobarla en el siguiente enlace: 
      <a href="${url}">Verificar</a>
      </p>
      <p>Si no creaste esta cuenta, puedes ignorar el mensaje.</p>`,
  });
};

module.exports = {
  emailVerifyAccount,
};


// const nodemailer = require('nodemailer');

// const emailVerifyAccount = async (datos) => {
//   const { email, name, token } = datos;

//   const transport = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   // const url = `http://localhost:3000/%5Btoken%5D?token=${encodeURIComponent(token)}`;


//   // const url = `http://localhost:3000/${encodeURIComponent(`[${token}]`)}?token=${encodeURIComponent(token)}`;


//   // const url = `http://localhost:3000/[token]?token=${token}`;

//   const urlEncoded = `http://localhost:3000/%5Btoken%5D?token=${encodeURIComponent(token)}`;
// const urlPlain = `http://localhost:3000/[token]?token=${encodeURIComponent(token)}`;


//   const info = await transport.sendMail({
//     from: '"E-commerce-Point" <admin@E-commerce-Point.com>',
//     to: email,
//     subject: "E-commerce-Point - Comprueba tu cuenta",
//     text: "Comprueba tu cuenta en Challenger",
//     html: `<p>Hola: ${name}, Verifica tu cuenta en E-commerce-Point y comienza con nuevos desafíos!!</p>
//     <p>Tu cuenta ya está casi lista, solo debes comprobarla en el siguiente enlace:
//     <a href="${urlEncoded}">Verificar (codificado)</a>
//     o
//     <a href="${urlPlain}">Verificar (sin codificar)</a>
//   </p>
//       <p>Si no creaste esta cuenta, puedes ignorar el mensaje.</p>`,
//   });
// };

// module.exports = {
//   emailVerifyAccount,
// };

// http://localhost:3000/[token]?token=

// const nodemailer = require('nodemailer');

// const emailVerifyAccount = async (datos) => {
//   const { email, name, token } = datos;

//   const transport = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   const url = `http://localhost:3000/confirm-account?token=${token}`;

//   const info = await transport.sendMail({
//     from: '"E-commerce-Point" <admin@E-commerce-Point.com>',
//     to: email,
//     subject: "E-commerce-Point - Comprueba tu cuenta",
//     text: "Comprueba tu cuenta en Challenger",
//     html: `<p>Hola: ${name}, Verifica tu cuenta en E-commerce-Point y comienza con nuevos desafíos!!</p>
//       <p>Tu cuenta ya está casi lista, solo debes comprobarla en el siguiente enlace: 
//       <a href="${url}">
//         Verifica tu cuenta para poder ser un Challenger
//       </a>
//       <p>Si no creaste esta cuenta, puedes ignorar el mensaje.</p>`,
//   });
// };

// module.exports = {
//   emailVerifyAccount,
// };


// const nodemailer = require('nodemailer');

// const emailVerifyAccount = async (datos) => {
//   const { email, name, token } = datos;

//   const transport = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     secure: true, // use SSL
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   // Información del email

//   const info = await transport.sendMail({
//     from: '"E-commerce-Point" <admin@E-commerce-Point.com>',
//     to: email,
//     subject: "E-commerce-Point - Comprueba tu cuenta",
//     text: "Comprueba tu cuenta en Chalenger",
//     html: `<p>Hola: ${name}, Verifica tu cuenta en E-commerce-Point y comienza con nuevos desafíos!!</p>
//       <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace: 
//       <a href={"http://localhost:3000/confirm-account/${token}"}>
//         Verifica tu cuenta para poder ser un Challenger
//       </a>
//       <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>`,
//   });
// };

// module.exports = {
//   emailVerifyAccount,
// };


// const nodemailer = require('nodemailer')

// const emailVerifyAccount = async (datos) => {
//     const { email, name, token } = datos;
  
//     const transport = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: process.env.EMAIL_PORT,
//       secure: true, // use SSL
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       tls: {
//         rejectUnauthorized: false
//       }
//     });
  
//     // Información del email
  
//     const info = await transport.sendMail({
//       from: '"E-commerce-Point" <admin@E-commerce-Point.com>',
//       to: email,
//       subject: "E-commerce-Point - Comprueba tu cuenta",
//       text: "Comprueba tu cuenta en Chalenger",
//       html: `<p>Hola: ${name}, Verifica tu cuenta en E-commerce-Point y comienza con nuevos desafíos!!</p>
//       <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace: 
  
//       <a href={'http://localhost:3000/confirm-account/${token}'}>
//       Verifica tu cuenta para poder ser un Challenger
//     </a>
      
//       <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
      
      
//       `,
//     });
//   };

//   module.exports = {
//     emailVerifyAccount
//   }