import React from 'react'
import { EDUCATIONS } from '../constants'

const Educations = () => {
  return (
    <section className='py-8' id='educations'>
      <h2 className='mb-4 text-3xl font-bold text-center'>Educations</h2>
      {EDUCATIONS.map((education, index) => (
        <div key={index} className='p-10 mb-6'>
          <h3 className='text-xl font-semibold'>{education.degree}</h3>
          <p className='text-lg'>{education.institution}</p>
          <p className='text-sm text-stone-300'>{education.duration}</p>
          <p className='mt-2'>{education.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Educations