import { Metadata } from "next";
import { BannerComponent, FormModalComponent, ModalidadesComponent, PartnersComponent, ProgramsComponent, SpeackWithUs, TestimoniesComponent, WeContactUComponent } from "./components";
import { FooterComponent } from "./components/footer/footer";


export const metadata: Metadata = {
  title: 'Cursos 100% subvencionados',
  description: 'Descubre tu camino y expande tus conocimientos con nuestra amplia oferta de cursos de formación profesional y 100% subvencionados por el SEPE.',

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
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
