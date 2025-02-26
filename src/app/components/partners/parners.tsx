


import Image from "next/image";

export const PartnersComponent = () =>{
    return (
        <div className="mt-16 py-20">
          <div className="flex justify-center text-2xl md:text-4xl font-bold text-center">
            <h2 className="text-neutral-900 dark:text-slate-200">Títulos oficiales respaldados por</h2>
          </div>
          <div className="flex flex-row gap-10 justify-center items-center mt-10 flex-wrap ">
            <Image src={`./imgs/logos/logo_fundae.svg`} width={320} height={67} alt="fundae" ></Image>
            <Image src={`./imgs/logos/logo-soc.svg`} width={320} height={67} alt="generalitat de cataluña" ></Image>
            <Image src={`./imgs/logos/logo-actic.svg`} width={150} height={67} alt="actic" ></Image>
            <Image src={`./imgs/logos/logo-sepe.svg`} width={320} height={67} alt="sepe" ></Image>
            <Image src={`./imgs/logos/logo-camara.svg`} width={200} height={67} alt="camara de comercio" ></Image>
            <Image src={`./imgs/logos/logo-socs.svg`} width={320} height={67} alt="soc" ></Image>
            <Image src={`./imgs/logos/logo-garantia.svg`} width={260} height={67} alt="garantia juvenil" ></Image>
          </div>
        </div>
    );
}