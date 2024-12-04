import { Metadata } from "next";
import { BannerComponent, FormModalComponent, ModalidadesComponent, PartnersComponent, ProgramsComponent, SpeackWithUs, TestimoniesComponent, WeContactUComponent } from "./components";
import { FooterComponent } from "./components/footer/footer";

const canonical = "https://cursosepegratis.es"
export const metadata: Metadata = {
  title: 'Cursos 100% subvencionados',
  description: 'Descubre tu camino y expande tus conocimientos con nuestra amplia oferta de cursos de formación profesional y 100% subvencionados por instituciones estatales reconocidas como el SEPE, SOC, FUNDAE, Cámara de comercio ... No te piertas esta gran oportunidad',
  alternates:{
    canonical: canonical,
  },
  
}




export default function Home() {
  return (

      <div className="">
        <main className="flex flex-col">
          {/* <BanerTopComponent /> */}
          <BannerComponent />
          <PartnersComponent />
          <ModalidadesComponent />
          <ProgramsComponent />
          <TestimoniesComponent />
          <SpeackWithUs />
          <WeContactUComponent />
          <FooterComponent />
          <FormModalComponent />
        </main>
      </div>
  );
}
