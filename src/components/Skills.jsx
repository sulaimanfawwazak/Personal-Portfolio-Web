import React from 'react'
import { SKILLS } from '../constants'

const Skills = () => {
  return (
    <div className='container mx-auto' id='skills'>
      <h2 className='mt-20 mb-12 text-4xl font-semibold text-center'>Skills</h2>
      <div className='flex flex-col px-4 py-2 mx-2 border rounded-3xl lg:px-20 border-stone-50/30'>
        {SKILLS.map((skill, index) => (
          // Don't add border for the last item
          <div key={index} className={`py-6 flex items-center justify-between ${ index !== SKILLS.length - 1 ? 'border-b border-stone-50/30' : ''}`}>
            {/* Icons and Names */}
            <div className='flex items-center'>
              {skill.icon}
              <h3 className='px-6 text-lg lg:text-2xl'>{skill.name}</h3>
            </div>
            {/* Years of Experience */}
            <div className='font-semibold text-md lg:text-xl'>
              <span>{skill.experience}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills