'use client'
import { useSendMail } from "@/app/hooks";
import { useCourseName } from "@/app/store/CourseName/CourseNameStore";
import { useModalFormStatus } from "@/app/store/ModalForm/ModalStore";
import { Validations } from "@/utils/validations";
import { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

export const FormModalComponent = () => {

  const { setModalStatus, ModalStatus } = useModalFormStatus();
  const { CourseInfo } = useCourseName();
  const [formStatus, setFormStatus] = useState({
    name: '',
    email: '',
    movil: '',
    politicy: false,
  });
  const { mailStatus, sendMail } = useSendMail();
  const [errorValidations, setErrorValidations] = useState({ status: false, message: "" });

  useEffect(() => {
    if (mailStatus.status) {
      setFormStatus({
        name: '',
        email: '',
        movil: '',
        politicy: false,
      });
    }
    
  }, [mailStatus])

  useEffect(() => {

    if (errorValidations.status) {
      const { ...restFormStatus } = formStatus
      const params = { ...restFormStatus, ['courseName']: CourseInfo }
      sendMail(params)
    }

  }, [errorValidations,CourseInfo,formStatus,sendMail])


  if (!ModalStatus) {
    return null;
  }

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = target
    setFormStatus({
      ...formStatus,
      [name]: type === 'checkbox' ? checked : value,

    })
  }




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

  document.body.style.overflow = 'hidden';
  return (
    <div className='backdrop-blur-sm fixed w-screen h-screen flex justify-center items-center flex-col bg-[rgba(0,0,0,0.85)]'>
      <div className="flex w-screen h-screen justify-end end-10 top-10 fixed ">
        <IoMdCloseCircleOutline size={40} className="cursor-pointer" onClick={() => { setModalStatus(false), document.body.style.overflow = '' }} />
      </div>
      <form action={handleSubmit} className='flex flex-col w-[350px] text-slate-800 bg-slate-50 p-10 rounded-[70px] py-20 gap-10 z-10'>
        <input type="text" placeholder="Nombre" name="name" onChange={onInputChange} />
        <input type="text" placeholder="tucorreo@hotmail.com" name="email" onChange={onInputChange} />
        <input type="tel" placeholder="móvil" name="movil" onChange={onInputChange} />
        <input type="text" name='course' value={CourseInfo} readOnly={true} />
        <div className="flex gap-3 justify-center">
          <input type="checkbox" name="politicy" onChange={onInputChange} /><span>Acepto <a className="text-indigo-900" href="https://studyfp.com/privacidad/">política de privacidad</a></span>
        </div>
        {
          !errorValidations.status ? <span className="text-red-500 text-center text-xs">{errorValidations.message}</span> :
            mailStatus.status ? <span className="text-green-500 text-center text-xs">{mailStatus.message}</span> : <span className="text-red-500 text-center text-xs">{mailStatus.message}</span>
        }
        <div className="flex justify-center">
          <button className="w-1/2 h-10  rounded-3xl text-white font-semibold bg-gradient-to-r  from-blue-950 to-sky-500">Enviar</button>
        </div>
      </form>
    </div>
  )
}
