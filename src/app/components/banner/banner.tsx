import Image from "next/image";
import Link from "next/link";

export const BannerComponent = () => {
    return (
        <div className="flex flex-row md:pl-4">
            <div className="flex flex-col justify-center">
                <div className=" text-center md:text-left">
                    <h1 className="text-[40px] md:text-6xl font-extrabold text-gray-900 dark:text-slate-100">Cursos 100% subvencionados</h1>
                </div>
                <div className="flex text-center md:text-left">
                    <p className="text-sm md:text-lg text-stone-500 dark:text-stone-400 my-6">Nuestros cursos subvencionados están financiados por todas las entidades estatales (FUNDAE, SEPE, SOC, Cámara de comercio...), lo que significa que puedes acceder a formación de calidad sin ningún coste por tu parte. Ofrecemos una amplia gama de cursos diseñados para mejorar tus habilidades, actualizar tus conocimientos y abrir nuevas oportunidades laborales. Ya seas un trabajador activo, autónomo o desempleado, tenemos un curso para ti.</p>
                </div>
                <div className="flex justify-center md:justify-start">
                    <div className="bg-[#284B63] text-white text-sm md:text-lg font-bold p-3 w-[228.5px] md:w-1/4 flex justify-center items-center rounded-lg">
                        <Link href={`https://studyfp.com/`} className="">¡Cursos gratis pulsa aquí!</Link>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex">
                <Image src={`/imgs/banner/banner_sepe.png`} width={'1920'} height={'1080'} alt="banner cursos sepe"></Image>
            </div>
        </div>
    );
}