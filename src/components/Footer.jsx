import React from 'react'
import logo from '../assets/logo.png'
import { SOCIAL_MEDIA_LINKS } from '../constants'

const Footer = () => {
  return (
    <div className='mt-20 mb-8'>
      {/* Logo */}
      <div className='flex items-center justify-center'>
        <img src={logo} width={200} className='my-20'/>
      </div>
      <div className='flex items-center justify-center gap-8'>
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a key={index} href={link.href} target='_blank' rel='noopener noreferer'>
            {link.icon}
          </a>
        ))}
      </div>
      <p className='mt-8 text-sm tracking-wide text-center text-gray-400'>
        &copy;pwnwas. All rights reserved.
      </p>
    </div>
  )
}

export default Footer