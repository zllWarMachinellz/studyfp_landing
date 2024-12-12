import { Metadata } from "next";
import { BanerTopComponent, BannerComponent, FormModalComponent, ModalidadesComponent, PartnersComponent, ProgramsComponent, SpeackWithUs, TestimoniesComponent, WeContactUComponent } from "./components";
import { FooterComponent } from "./components/footer/footer";

const canonical = "https://cursosepegratis.es"
export const metadata: Metadata = {
  title: 'Cursos 100% subvencionados',
  description: 'Expande conocimientos con nuestra oferta de cursos 100% subvencionados por instituciones como el Sepe, Soc, Fundae y Cámara de comercio.',
  alternates:{
    canonical: canonical,
  },
  
}


export default function Home() {
  return (

      <div className="">
        <main className="flex flex-col">
          <BanerTopComponent />
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
