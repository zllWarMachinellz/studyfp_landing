import { sendEmailContact } from "@/app/actions/sendEmail/sendEmail";


export const WeContactUComponent = () => {
    const handleSubmit = async (formData: FormData) => {
        
        const rawFormData = {
            name: formData.get('name'),
            mail: formData.get('mail'),
            phone: formData.get('phone'),
          }

          const params = {
            name: rawFormData.name?.toString(),
            mail: rawFormData.mail?.toString(),
            phone: rawFormData.phone?.toString(),
          }
         await sendEmailContact(params)
    };

    return (
        <div className="flex flex-col min-w-full">
            <div className="text-3xl md:text-4xl font-bold flex justify-center items-center text-center md:text-left">
                <h2>Nosotros te contáctamos</h2>
            </div>
            <div className="flex justify-center py-32">
                <form action={handleSubmit} className="flex flex-col w-[350px] bg-slate-50 p-10 rounded-[70px] py-20 gap-10 shadow-[0_20px_50px_rgba(31,_120,_50,_0.7)]  ">
                    <input type="text" placeholder="Nombre" name="name"/>
                    <input type="text" placeholder="tucorreo@hotmail.com" name="mail" />
                    <input type="text" placeholder="móvil" name="phone"/>
                    <div className="flex justify-center mt-4">
                        <button className=" w-1/2 h-10  rounded-3xl text-white font-semibold bg-gradient-to-r from-green-700 to-green-400">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
