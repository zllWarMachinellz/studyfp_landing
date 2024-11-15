import { courses } from "@/app/data/cursos"
import { ProgramItemComponent } from "./ProgramItem"

export const ProgramsComponent = () => {
  return (

    <div className=''>
      <div className='text-3xl md:text-4xl font-bold flex justify-center items-center text-center md:text-left'>
        <h2>Cursos</h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:p-20 p-5 py-20 ">
        {
          courses.map((course) => (
            <ProgramItemComponent key={course.id} course={course} />
          ))
        }
      </div>
    </div>
  )
}
