'use client'
import { useCourseName } from "@/app/store/CourseName/CourseNameStore";
import { useModalFormStatus } from "@/app/store/ModalForm/ModalStore";
import { course } from "@/interfaces"
import momentjs from "moment"
import Image from "next/image"
import { TbClockHour8 } from "react-icons/tb";


interface Props {
  course: course
}


export const ProgramItemComponent = ({ course }: Props) => {
  const {setModalStatus} = useModalFormStatus();
  const {setCourseInfo} = useCourseName();
  const initDate = momentjs(course.init_date);
  const endDate = momentjs(course.end_date);
  

  const dates = {
    fechaInicio: initDate.format('DD-MM-YYYY'),
    fechaFin: endDate.format('DD-MM-YYYY'),
  }

  const onButtonClick = () =>{
    setCourseInfo(course.name);
    setModalStatus(true);
  }


  return (
    <div className="dark:bg-white bg-gray-200 shadow-xl rounded-lg hover:bg-slate-300 transition-all duration-300 w-100 md:w-96 p-3 flex flex-col gap-5">
      <div className="flex justify-center items-center">
        <Image className="rounded-xl" src={course.img} width={400} height={100} alt="Curso de depilación mecánica y decoloración del vello" />
      </div>
      <div>
        <h4 className="dark:text-slate-800 font-semibold">
          {course.codigo} - {course.name}
        </h4>
      </div>
      <div className="flex flex-col gap-1 text-slate-800">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex gap-2">
              <TbClockHour8 size={25} />
              <span>{course.hours} horas</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">Inicio: {dates.fechaInicio}</span>
              <span className="font-bold">Fin: {dates.fechaFin}</span>
            </div>
          </div>
          <div className="flex relative flex-col text-xs">
            <div className="flex flex-col bg-slate-200 absolute -translate-x-[180px] w-48 p-1 rounded-tl-full shadow-md">
              <span className="translate-x-6">subvencionado por</span>
              <Image className="translate-x-4" src={course.entidad_subvencion} width={150} height={220} alt="logo del consorci" />
            </div>
          </div>
        </div>
        <hr className="p-2" />
        <span className="text-slate-400">Requisitos</span>
        <div className="flex gap-2">
          {
            course.requirements.map(
              el => <div key={el} className="bg-slate-400 rounded-full p-1 text-white text-xs"><span className="p-1">{el}</span></div>
            )
          }
        </div>
        <div className="flex justify-center items-center rounded-full mt-4">
          <button className="bg-[#284B63] hover:bg-[#3a6d8f] rounded-full text-slate-100 p-3 font-bold text-sm" onClick={onButtonClick}>inscribirme ya!</button>
        </div>
      </div>
    </div>
  )
}
