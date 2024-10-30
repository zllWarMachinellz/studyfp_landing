import { transporter } from "@/utils/transporterNodemailer"

interface Params {
    name?: string,
    mail?: string,
    phone?: string,
}

export const sendEmailContact = async ({name,mail, phone}:Params) =>{
    const info = await transporter.sendMail({
        from: '"Landing contact" <no-reply@studyfp.com>', // sender address
        to: "info@studyfp.com", // list of receivers
        subject: "Nuevo contacto (Landing)", // Subject line
        text: "Hello world?", // plain text body
        html: `<b>Nombre: ${name}</b> <b>Nombre: ${mail}</b> <b>Nombre: ${phone}</b>`, // html body
      });

    return info
}
