import React from 'react';
import { PROJECTS } from '../constants';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className='pt-20' id='projects'>
      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -20}}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.8 }}
        className='mb-8 text-4xl font-semibold text-center lg:text-4xl'
      >
        Projects
      </motion.h2>

      {/* Projects */}
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {PROJECTS.map((project) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={project.id} 
            className='relative overflow-hidden group rounded-3xl'
          >
            {/* Image wrapped in anchor tag */}
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                src={project.image} 
                alt={project.name} 
                className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-110'
              />
            </a>

            {/* Overlay with project details */}
            <motion.div 
              initial={{ opacity: 0 }} 
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-500 opacity-0 pointer-events-none backdrop-blur-lg group-hover:opacity-100 md:pointer-events-auto'
            >
              <h3 className='mb-2 text-xl font-semibold'>{project.name}</h3>
              <p className='p-4 mb-12'>{project.description}</p>
              <a 
                href={project.githubLink} 
                target='_blank' 
                rel='noopener noreferrer' 
                className='px-4 py-2 text-black bg-white rounded-full hover:bg-gray-300'
              >
                <div className='flex items-center'>
                  <span>View on GitHub</span>
                  <MdArrowOutward/>
                </div>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects;
