'use server'
import { transporter } from "@/utils/transporterNodemailer"

export const sendEmailContact = async (name:string, mail: string, movil: string) =>{
    try {
        await transporter.sendMail({
            from: '"🔰 Contacto nuevo 🔰" <no-reply@studyfp.com>', // sender address
            to: "info@studyfp.com", // list of receivers
            subject: "Nuevo contacto (Landing)", // Subject line
            text: "Hello world?", // plain text body
            html: `<div style="display:flex; justify-content:center;"><h1 style="20px">Contacto Landing</h1></div></br><b>Nombre: ${name}</b></br> <b>Email: ${mail}</b></br> <b>Teléfono: ${movil}</b>`, // html body
          });
        return {succes: true, message: "¡Correo enviado con éxito!"}
    } catch (error) {
        return {succes: false, message:"Correo no enviado, revisa tu correo por favor" }
    }
    
}
