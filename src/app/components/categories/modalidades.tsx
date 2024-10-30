import { categories } from "@/app/data/modalidades";
import { ModalidadItemComponent } from "./modalidadItem";





export const ModalidadesComponent = () =>{

    const modalidades = categories;
    console.log(modalidades)

    return (
        <div className="flex flex-col">
            <div className="text-3xl md:text-4xl font-bold pt-20 md:text-left md:pl-20 text-center">
                <h2>Modalidades</h2>
            </div>
            <div className="flex flex-row py-32 gap-4 flex-wrap px-5 md:px-20">
            {
                modalidades.map((modalidad) => 
                            (<ModalidadItemComponent key={modalidad.id} modalidad={modalidad}/>))

            }
            </div>
        </div>
    );
}