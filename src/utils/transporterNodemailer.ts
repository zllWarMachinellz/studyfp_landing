'use server'

import Nodemailer from 'nodemailer'

export const transporter = Nodemailer.createTransport({
    host: "smtp.ionos.es",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "no-reply@studyfp.com",
        pass: "Estudiimatge2024*Nore",
    },
});