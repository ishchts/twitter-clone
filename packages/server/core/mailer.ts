import nodemailer from 'nodemailer';

const config = {
  host: process.env.NODEMAILER_HOST,
  port: Number(process.env.NODEMAILER_PORT),
  secureConnection: false,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
  tls: {
    ciphers: 'SSLv3',
  },
};

const mailer = nodemailer.createTransport(config);

export default mailer;
