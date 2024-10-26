import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experiences = () => {
  return (
    <section className='pt-20' id='experiences'>
      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='text-4xl font-bold tracking-tighter text-center'
        >
          Experiences
      </motion.h2>

      {/* Experiences Start */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='p-10 space-y-8'>
        {EXPERIENCES.map((experience, index) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.5}}
            key={index} className='p-4 border rounded-xl border-stone-50/30 bg-white/10'>
            <h3 className='text-2xl font-semibold'>{experience.title}</h3>
            <p className='text-xl'>{experience.company}</p>
            <p className='text-sm text-stone-300'>{experience.duration}</p>
            <p className='mt-2 text-base'>{experience.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Experiences;