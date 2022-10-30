import nodemailer from 'nodemailer'
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    type: 'login',
    user: 'lao.noreply@gmail.com',
    pass: 'vgwqkosdruemsczq',
  },
  secure: true,
})
