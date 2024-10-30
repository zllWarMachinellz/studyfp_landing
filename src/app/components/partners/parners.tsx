


import Image from "next/image";

export const PartnersComponent = () =>{
    return (
        <div className="mt-16">
          <div className="flex justify-center text-3xl md:text-4xl font-bold text-center">
            <h2>Títulos oficiales respaldados por</h2>
          </div>
          <div className="flex flex-row gap-10 justify-center mt-10 flex-wrap ">
            <Image src={`./imgs/logos/logo_fundae.svg`} width={372} height={67} alt="logo fundae" ></Image>
            <Image src={`./imgs/logos/logo-soc.svg`} width={372} height={67} alt="logo soc" ></Image>
            <Image src={`./imgs/logos/logo-sepe.svg`} width={372} height={67} alt="logo sepe" ></Image>
          </div>
        </div>
    );
}