import { course, Course } from "@/interfaces"
import Image from "next/image"

interface Props {
  course: course
}


export const ProgramItemComponent = ({ course }: Props) => {
  return (
    <div className="bg-white rounded-lg hover:bg-slate-300 transition-all duration-300">
      <div className="">
        <Image src="/imgs/cursos/depilacion_mecanica/depilacion_mecanica.png" width={400} height={100} alt="Curso de depilación mecánica y decoloración del vello" />
      </div>
      <h4>
        {course.codigo} - {course.name}
      </h4>

    </div>
  )
}
