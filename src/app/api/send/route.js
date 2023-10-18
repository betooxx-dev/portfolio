import nodemailer from 'nodemailer'

export async function POST(req, res) {
  const { email, subject, message } = req.body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'albertof4in@gmail.com',
      pass: 'wpiy tdug rdfb fbtp'
    }
  });

  const mailOptions = {
    from: email,
    to: 'albertof4in@gmail.com',
    subject: `Nuevo mensaje de ${email}: ${subject}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email enviado');
    return res.status(200).json('Correo enviado exitosamente');
  } catch (error) {
    console.log(error);
    return res.status(500).json('Error al enviar el correo');
  }
}
