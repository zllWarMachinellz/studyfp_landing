import { categories } from "@/app/data/cursos"
import { ProgramItemComponent } from "./ProgramItem"

export const ProgramsComponent = () => {
  return (

    <div className=''>
      <div className='text-3xl md:text-4xl font-bold flex justify-center items-center text-center md:text-left'>
        <h2>Programas</h2>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {
          categories.map((category) => (
            <ProgramItemComponent key={category.id} program={category} />
          ))
        }
      </div>
    </div>
  )
}
