import { Metadata } from "next";
import { BanerTopComponent, BannerComponent, FormModalComponent, ModalidadesComponent, PartnersComponent, ProgramsComponent, SpeackWithUs, TestimoniesComponent, WeContactUComponent } from "./components";
import { FooterComponent } from "./components/footer/footer";
import ComponentCopy from "./components/footer/copy";

const canonical = "https://cursosepegratis.es"
export const metadata: Metadata = {
  title: 'Cursos 100% subvencionados',
  description: 'Expande conocimientos con nuestra oferta de cursos 100% subvencionados por instituciones como el Sepe, Soc, Fundae y Cámara de comercio.',
  alternates: {
    canonical: canonical,
  },

}


export default function Home() {
  return (

    <div className="">
      <FormModalComponent />
      <main className="">
        <div>
          <section>
            <BanerTopComponent />
          </section>
        </div>
        <div className="flex flex-col justify-center items-center">
          <section className="max-w-[1280px] w-full pt-20">
            <BannerComponent />
            <PartnersComponent />
          </section>
        </div>
        <div className="flex flex-col justify-center items-center bg-[url(/imgs/modalidades/modalidades.png)] bg-cover bg-center">
          <section className="max-w-[1280px] w-full">
            <ModalidadesComponent />
          </section>
        </div>
        <div className="flex flex-col justify-center items-center">
          <section className="max-w-[1280px] w-full pt-20">

            <ProgramsComponent />
          </section>
        </div>
        <div className="flex flex-col justify-center items-center">
          <section className="max-w-[1280px] w-full">
            <TestimoniesComponent />
            <SpeackWithUs />
            <WeContactUComponent />
          </section>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#284B63]">
          <section className="max-w-[1280px] w-full">
            <FooterComponent />
          </section>
        </div>
        <div className="flex flex-col justify-center items-center">
          <section className="max-w-[1280px] w-full">
            <ComponentCopy />
          </section>
          
        </div>
        
      </main>
      
    </div>
  );
}
