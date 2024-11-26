'use client'
import { useSendMail } from "@/app/hooks";
import { Validations } from "@/utils/validations";
import { useEffect, useState } from "react";


export const WeContactUComponent = () => {
    const [formStatus, setFormStatus] = useState({
        name: '',
        email: '',
        movil: '',
        politicy: false,
    });
    const { mailStatus, sendMail } = useSendMail();
    const [errorValidations, setErrorValidations] = useState({ status: false, message: "" });


    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = target
        setFormStatus({
            ...formStatus,
            [name]: type === 'checkbox' ? checked : value,

        })
    }


    useEffect(() => {
        if (errorValidations.status) {
            const { ...restFotmStatus } = formStatus
            const params = { ...restFotmStatus, ['courseName']: '' }
            sendMail(params);
        }
    }, [errorValidations])

    const handleSubmit = () => {

        //Validación de campos//

        switch (false) {
            case Validations.nameValidation(formStatus.name):
                setErrorValidations({ status: false, message: "Nombre inválido" });
                break;
            case Validations.emailValidation(formStatus.email):
                setErrorValidations({ status: false, message: "Correo inválido" });
                break;
            case Validations.movilValidation(formStatus.movil):
                setErrorValidations({ status: false, message: "Número de teléfono inválido" });
                break;
            case formStatus.politicy:
                setErrorValidations({ status: false, message: "Debes leer y aceptar la política de privacidad" });
                break;
            default:
                setErrorValidations({ status: true, message: "Correcto" })
                break;
        }
    };

    return (
        <div className="flex flex-col min-w-full">
            <div className="text-3xl md:text-4xl font-bold flex justify-center items-center text-center md:text-left">
                <h2>Nosotros te contáctamos</h2>
            </div>
            <div className="flex justify-center py-32">
                <form action={handleSubmit} className="flex flex-col w-[350px] text-slate-800 bg-slate-50 p-10 rounded-[70px] py-20 gap-10 shadow-[0_20px_50px_rgba(45,_77,_116,_0.7)]  ">
                    <input type="text" placeholder="Nombre" name="name" onChange={onInputChange} />
                    <input type="text" placeholder="tucorreo@hotmail.com" name="email" onChange={onInputChange} />
                    <input type="tel" placeholder="móvil" name="movil" onChange={onInputChange} />
                    <div className="flex gap-3 justify-center">
                        <input type="checkbox" name="politicy" onChange={onInputChange} /><span>Acepto <a className="text-indigo-900" href="https://studyfp.com/privacidad/">política de privacidad</a></span>
                    </div>
                    {
                        !errorValidations.status ? <span className="text-red-500 text-center text-xs">{errorValidations.message}</span> :
                            mailStatus.status ? <span className="text-green-500 text-center text-xs">{mailStatus.message}</span> : <span className="text-red-500 text-center text-xs">{mailStatus.message}</span>
                    }

                    <div className="flex justify-center">
                        <button className="w-1/2 h-10  rounded-3xl text-white font-semibold bg-gradient-to-r from-blue-950 to-sky-500">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
