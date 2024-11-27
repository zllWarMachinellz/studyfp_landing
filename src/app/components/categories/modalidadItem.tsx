import { FaChalkboardTeacher } from "react-icons/fa";
import { modalidad } from "@/interfaces";
import { RiPresentationLine } from "react-icons/ri";
import { FaLaptopHouse } from "react-icons/fa";
import React from "react";
import Link from "next/link";

interface Props {
    modalidad: modalidad;
}

const icons = [
    { id: '1', icon: <RiPresentationLine size={40} /> },
    { id: '2', icon: <FaChalkboardTeacher size={40} /> },
    { id: '3', icon: <FaLaptopHouse size={40} /> },
]

export const ModalidadItemComponent = ({ modalidad }: Props) => {
    const [{ icon }] = icons.filter(el => {
        return modalidad.id === el.id
    });

    return (
        <>
        <Link href={`${modalidad.redirect}`} className="transition-all hover:bg-[#284B63] hover:text-slate-100 relative flex flex-grow !flex-row  items-center rounded-[10px]  border-[1px] border-gray-200 bg-white dark:bg-slate-900 bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">

                            <span className="flex items-center text-brand-500 dark:text-white">
                                {
                                    icon
                                }
                            </span>
                        </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                        <h2 className="text-xl font-bold text-navy-700 dark:text-white">{modalidad.name}</h2>
                        <p className="font-dm text-sm font-medium">{`${modalidad.courses} Cursos`}</p>

                    </div>
            </Link>
        </>
    );
}