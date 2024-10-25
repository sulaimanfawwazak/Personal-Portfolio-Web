import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
}

const Skills = () => {
  return (
    <div className='container mx-auto' id='skills'>
      {/* Title */}
      <h2 className='mt-20 mb-12 text-4xl font-bold text-center'>Skills</h2>

      {/* Skills Start */}
      <motion.div 
        initial='hidden'
        whileInView='visible'
        variants={containerVariants}
        viewport={{ once: true }}
        className='flex flex-col px-4 py-2 mx-2 border rounded-3xl lg:px-20 border-stone-50/30'>
        {SKILLS.map((skill, index) => (
          // Don't add border for the last item
          <motion.div 
            variants={itemVariants}
            key={index} className={`py-6 flex items-center justify-between ${ index !== SKILLS.length - 1 ? 'border-b border-stone-50/30' : ''}`}>
            {/* Icons and Names */}
            <div className='flex items-center'>
              {skill.icon}
              <h3 className='px-6 text-lg lg:text-2xl'>{skill.name}</h3>
            </div>
            {/* Years of Experience */}
            <div className='font-semibold text-md lg:text-xl'>
              <span>{skill.experience}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills