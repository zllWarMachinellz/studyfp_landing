'use client'
import { sendEmailContact } from "@/app/actions/sendEmail/sendEmail";
import { Validations } from "@/utils/validations";
import { Span } from "next/dist/trace";
import { useEffect, useState, useTransition } from "react";


export const WeContactUComponent = () => {
    const [name, setName] = useState("");
    const [correo, setCorreo] = useState("");
    const [movil, setMovil] = useState("");
    const [errorValidations, setErrorValidations] = useState({ status: false, message: "" });
    const [statusMailer, setStatusMailer] = useState({ message: "" });
    const [isPending, startTransition] = useTransition();

    const handleInputNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleInputMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCorreo(e.target.value);
    }

    const handleInputMovilChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMovil(e.target.value);
    }

    useEffect(()=>{
        
    },[errorValidations])

    const handleSubmit = () => {

        //Validación de campos//

        switch (false) {
            case Validations.nameValidation(name):
                setErrorValidations({ status: false, message: "Nombre inválido" });
                break;
            case Validations.emailValidation(correo):
                setErrorValidations({ status: false, message: "Correo inválido" });
                break;
            case Validations.movilValidation(movil):
                setErrorValidations({ status: false, message: "Número de teléfono inválido" });
                break;
            default:
                setErrorValidations({status: true, message:"Correcto"})
                break;
        }
        // if(!Validations.nameValidation(name)) setErrorValidations({ status: false, message: "Nombre inválido" });
        // if(!Validations.emailValidation(correo)) setErrorValidations({ status: false, message: "Correo inválido" });
        // if(!Validations.nameValidation(movil)) setErrorValidations({ status: false, message: "Número de teléfono inválido" });
        
        //envio de mail si todo sale bien//
        if (errorValidations.status) {
            startTransition(async () => {

                const res = await sendEmailContact(name, correo, movil);
                res.succes ? setStatusMailer({ message: res.message }) : setStatusMailer({ message: res.message })

            })

        }

        console.log(errorValidations);
    };

    return (
        <div className="flex flex-col min-w-full">
            <div className="text-3xl md:text-4xl font-bold flex justify-center items-center text-center md:text-left">
                <h2>Nosotros te contáctamos</h2>
            </div>
            <div className="flex justify-center py-32">
                <form action={handleSubmit} className="flex flex-col w-[350px] bg-slate-50 p-10 rounded-[70px] py-20 gap-10 shadow-[0_20px_50px_rgba(31,_120,_50,_0.7)]  ">
                    <input type="text" placeholder="Nombre" name="name" onChange={handleInputNameChange} />
                    <input type="text" placeholder="tucorreo@hotmail.com" name="mail" onChange={handleInputMailChange} />
                    <input type="text" placeholder="móvil" name="phone" onChange={handleInputMovilChange} />
                    {
                        !errorValidations.status ? <span className="text-red-500 text-center">{errorValidations.message}</span> : <span></span>
                    }
                    {
                        statusMailer.message !== "" ? <span className="text-red-500 text-center">{statusMailer.message}</span> : <span></span>
                    }
                    <div className="flex justify-center mt-4">
                        <button className=" w-1/2 h-10  rounded-3xl text-white font-semibold bg-gradient-to-r from-green-700 to-green-400">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
