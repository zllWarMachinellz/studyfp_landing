'use client'
import { useCourseName } from "@/app/store/CourseName/CourseNameStore";
import { useModalFormStatus } from "@/app/store/ModalForm/ModalStore";
import { course } from "@/interfaces"
import Image from "next/image"
import { TbClockHour8 } from "react-icons/tb";


interface Props {
  course: course
}


export const ProgramItemComponent = ({ course }: Props) => {
  const { setModalStatus } = useModalFormStatus();
  const { setCourseInfo } = useCourseName();


  const onButtonClick = () => {
    setCourseInfo(course.name);
    setModalStatus(true);
  }


  return (
    <article>
      <div className="dark:bg-white bg-gray-200 shadow-xl rounded-lg hover:bg-slate-300 transition-all duration-300 w-100 md:w-96 p-3 flex flex-col gap-5">
        <div className="flex justify-center items-center">
          <Image className="rounded-xl" src={course.img} width={400} height={100} alt={course.name} />
        </div>
        <div>
          <h3 className="dark:text-slate-800 font-semibold">
            {course.codigo} - {course.name}
          </h3>
        </div>
        <div className="flex flex-col gap-1 text-slate-800">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="flex gap-2">
                <TbClockHour8 size={25} />
                <span>{course.hours} horas</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold">Inicio: {course.init_date}</span>
                <span className="font-bold">Fin: {course.end_date}</span>
              </div>
            </div>
            <div className="flex relative flex-col text-xs">
              <div className="flex flex-col bg-slate-200 absolute -translate-x-[180px] w-48 p-1 rounded-tl-full shadow-md">
                <span className="translate-x-6">subvencionado por</span>
                <Image className="translate-x-4" src={course.entidad_subvencion} width={150} height={220} alt="logo de la entidad de la subvencion" />
              </div>
            </div>
          </div>
          <hr className="p-2" />
          <span className="text-slate-600">Requisitos</span>
          <div className="flex gap-2">
            {
              course.requirements.map(
                el => <div key={el} className="bg-slate-700 rounded-full p-1 text-white text-xs"><span className="p-1">{el}</span></div>
              )
            }
          </div>
          <button className="bg-stone-100 shadow-[0_5px_10px_1px_rgba(0,0,0,0.4)] hover:bg-[#3a6d8f] hover:text-white rounded-full text-slate-900 p-2 mt-4 font-bold text-sm" onClick={onButtonClick}>Inscribirme ahora
          </button>

        </div>
      </div>
    </article>
  )
}
