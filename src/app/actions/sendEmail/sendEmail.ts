'use server'
import { transporter } from "@/utils/transporterNodemailer"

interface EmailParams {
    name: string,
    email: string,
    movil: string,
    courseName?: string,
}

export const sendEmailContact = async ({name,email,movil,courseName}: EmailParams) => {
    try {
        await transporter.sendMail({
            from: '"🔰 Contacto nuevo 🔰" <no-reply@studyfp.com>', // sender address
            to: "info@studyfp.com", // list of receivers
            subject: "Nuevo contacto (Landing)", // Subject line
            text: "Hello world?", // plain text body
            html: `<div style="display:flex; justify-content:center;"><h1 style="20px">Contacto Landing</h1></div></br><b>Nombre: ${name}</b></br> <b>Email: ${email}</b></br> <b>Teléfono: ${movil}</b> </br> <b>Curso de interés: ${courseName}</b>`, // html body
        });
        return { succes: true, message: "¡Muchas gracias!, en breve nos pondremos en contacto" }
    } catch (error) {
        console.log(error)
        return { succes: false, message: "Correo no enviado, revisa tu correo por favor" }
    }

}
