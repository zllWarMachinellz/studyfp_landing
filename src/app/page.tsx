import { Metadata } from "next";
import { BannerComponent, ModalidadesComponent, PartnersComponent, SpeackWithUs, TestimoniesComponent, WeContactUComponent } from "./components";


export const metadata: Metadata = {
  title: 'Cursos 100% subvencionados en españa',
  description: 'Descubre tu camino y expande tus conocimientos con nuestra amplia oferta de cursos de formación profesional y 100% subvencionados por el SEPE.',
}

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col">
        <BannerComponent/>
        <PartnersComponent/>
        <ModalidadesComponent/>
        <TestimoniesComponent/>
        <SpeackWithUs/>
        <WeContactUComponent/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
