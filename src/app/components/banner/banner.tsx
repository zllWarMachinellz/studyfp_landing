
import Link from "next/link";

export const BannerComponent = () => {
    return (
        <div className="flex flex-row md:pl-4 ">
            <div className="flex flex-col justify-center">
                <div className=" text-center bannerpointlg:text-center">
                    <h1 className="text-[40px] md:text-6xl font-extrabold bg-gradient-to-b from-slate-600 to-blue-800 bg-clip-text text-transparent">Cursos 100% subvencionados</h1>
                </div>
                <div className="flex  text-center bannerpointlg:text-center">
                    <p className="text-s md:text-lg text-stone-500 my-6">Nuestros cursos subvencionados están financiados por todas las entidades estatales (FUNDAE, SEPE, SOC, Cámara de comercio...), lo que significa que puedes acceder a formación de calidad sin ningún coste por tu parte. Ofrecemos una amplia gama de cursos diseñados para mejorar tus habilidades, actualizar tus conocimientos y abrir nuevas oportunidades laborales. Ya seas un trabajador activo, autónomo o desempleado, tenemos un curso para ti.</p>
                </div>
                <div className="flex justify-center bannerpointlg:items-center">
                    <Link href={`https://studyfp.com/`} className="w-[338.5px]">
                        <div className="bg-[#284B63] text-white text-sm md:text-lg font-bold p-3 flex justify-center items-center rounded-lg">
                            <span>¡Cursos gratis pulsa aquí!</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="hidden bannerpointlg:flex">
                <video autoPlay loop muted playsInline preload="auto">
                    <source src="https://res.cloudinary.com/dgouy8xcx/video/upload/v1740571553/sfhsdvxhxov1lwbgfm2z.webm" type="video/webm" />
                </video>

                {/* <Image className="" src={`/imgs/banner/banner_sepe.png`} width={'2820'} height={'724'} alt="banner cursos sepe"></Image> */}
            </div>
        </div>
    );
}