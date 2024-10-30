

import Link from 'next/link'
import React from 'react'
import { MdWhatsapp } from "react-icons/md";


export const SpeackWithUs = () => {
    return (
        <div>
            <div className='text-3xl md:text-4xl font-bold flex justify-center items-center text-center md:text-left'>
                <h2>No pierdas esta gran oportunidad</h2>
            </div>
            <div className='flex justify-center items-center py-32'>
                <div className='flex gap-2 text-white shadow-lg font-semibold justify-center rounded-full p-4 items-center bg-gradient-to-r from-green-700 to-green-400'>
                    <MdWhatsapp fill='white' size={35} />
                    <Link href={`https://wa.link/bug306`} >
                        Habla con nosotros
                    </Link>
                </div>
            </div>
        </div>
    )
}
