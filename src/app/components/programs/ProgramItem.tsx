import { program } from "@/interfaces"

interface Props {
    program: program
}


export const ProgramItemComponent = ({program}:Props) => {
  return (
    <div className="bg-white rounded-lg hover:bg-slate-300 transition-all duration-300">
        {program.name}
    </div>
  )
}
