import { testimonios } from '@/app/data/testimonios'
import React from 'react'
import { TestimonieItemComponent } from './testimonieItem'

export const TestimoniesComponent = () => {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold flex justify-center items-center">
        <h2>Testimonios</h2>
      </div>
      <div className='py-32 grid grid-cols-1 md:grid-cols-3 gap-4 p-5'>
        {
          testimonios.map(testimonie => (

            <TestimonieItemComponent key={testimonie.id} testimonies={testimonie} />

          ))
        }
      </div>
    </div>
  )
}
