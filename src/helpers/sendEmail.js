const nodemailer = require('nodemailer');

const emailVerifyAccount = async (datos) => {
  const { email, name, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, // use SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // const url = `https://fish-bold-frontend-nitsugasamot.vercel.app/[token]?token=${token}`;

  const url = `http://localhost:3002/[token]?token=${token}`;

  // const url = `${process.env.URL_CONFIRM}${encodeURIComponent[token]}?token=${encodeURIComponent(token)}`;

  const info = await transport.sendMail({
    from: '"E-commerce-Point" <admin@E-commerce-Point.com>',
    to: email,
    subject: "E-commerce-Point - Comprueba tu cuenta",
    text: "Comprueba tu cuenta en Challenger",
    html: `<p>Hola: ${name}, Verifica tu cuenta en E-commerce-Point y comienza con nuevos desafíos!!</p>
      <p>Tu cuenta ya está casi lista, solo debes comprobarla en el siguiente enlace: 
      <a href="https://fish-bold-frontend-nitsugasamot.vercel.app/[token]?token=${token}">Verifica tu cuenta para poder ser un Challenger</a>

      </p>
      <p>Si no creaste esta cuenta, puedes ignorar el mensaje.</p>`,
  });
};
  

module.exports = {
  emailVerifyAccount
};


