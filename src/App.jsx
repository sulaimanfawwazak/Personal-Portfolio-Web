import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Bio from './components/Bio'
import Skills from './components/Skills'
import WorkExperiences from './components/WorkExperiences'
import Educations from './components/Educations'
import ContactForm from './components/ContactForm'

const App = () => {
  return (
    <div className='relative h-full overflow-y-auto antialiased'>
      {/* Background Image as div */}
      <div className='fixed inset-0 bg-fixed bg-center bg-cover bg-img'></div>

      {/* Container for the others */}
      <div className='container relative z-10 flex flex-col items-center p-4 mx-auto space-y-8'>
        <Hero/>
        <Navbar/>
        <Projects/>
        <Bio/>
        <Skills/>
        <WorkExperiences/>
        <Educations/>
        <ContactForm/>
      </div>
    </div>
  )
}

export default App