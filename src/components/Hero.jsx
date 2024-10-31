import React from 'react';
import { HERO } from '../constants';
import { motion } from 'framer-motion';
import Terminal from './Terminal';

const Hero = () => {
  return (
    <section className='flex flex-wrap items-center justify-center w-full min-h-screen md:px-5' id='hero'>

      {/* Texts */}
      {/* Make full screen in mobile and 1/2 the width in desktop */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='w-full md:w-1/2'>
      
        {/* Name */}
        <h2 className='my-8 p-2 text-4xl font-bold sm:text-5xl md:text-[5rem] lg:text-[7rem]'>
          {HERO.name}
        </h2>
      
        {/* Hello */}
        <p className='px-2 text-3xl tracking-tighter lg:text-4xl'>
          {HERO.greet}
        </p>
        {/* <p className='p-2 mb-8 text-xl'> */}
          {/* {HERO.description} */}
        {/* </p> */}
      </motion.div>

      {/* Terminal */}
      {/* Make full screen in mobile and 1/2 the width in desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className='w-full md:pl-10 md:w-1/2'>
          {/* Terminal */}
        <Terminal/>
      </motion.div>
    </section>
  )
}

export default Hero