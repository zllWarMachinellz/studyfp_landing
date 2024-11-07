import { transporter } from "@/utils/transporterNodemailer"

interface Params {
    name?: string,
    mail?: string,
    phone?: string,
}

export const sendEmailContact = async ({name,mail, phone}:Params) =>{
    const info = await transporter.sendMail({
        from: '"🔰 Contacto nuevo 🔰" <no-reply@studyfp.com>', // sender address
        to: "info@studyfp.com", // list of receivers
        subject: "Nuevo contacto (Landing)", // Subject line
        text: "Hello world?", // plain text body
        html: `<div style="display:flex; justify-content:center;"><h1 style="20px">Contacto Landing</h1></div></br><b>Nombre: ${name}</b></br> <b>Email: ${mail}</b></br> <b>Teléfono: ${phone}</b>`, // html body
      });

    return info
}
