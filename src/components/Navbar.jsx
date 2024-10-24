import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { NAVIGATION_LINKS } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElemet = document.querySelector(href);

    if (targetElemet) {
      const offset = -85;
      // Calculate the distance between element and the top
      const elementPosition = targetElemet.getBoundingClientRect().top;
      const offsetPosition = elementPosition + offset + window.scrollY;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }

    setIsMobileMenuOpen(false);
  }
  return (
    <div>
      <nav className='fixed left-0 right-0 z-50 top-4'>
        {/* Desktop Menu */}
        <div className='items-center justify-center hidden max-w-2xl py-3 mx-auto border rounded-lg border-stone-50/30 bg-black/20 backdrop-blur-lg lg:flex'>
          <div className='flex items-center justify-between gap-6'>
            {/* Logo Div */}
            <div>
              <a href='#'>
                <img src={logo} width={150} alt='logo'/>
              </a>
            </div>

            {/* Menus */}
            <div>
              <ul className='flex items-center gap-4'>
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a className='text-sm hover:text-yellow-400' href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className='rounded-lg backdrop-blur-md lg:hidden'>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <div>
              <a>
                <img src={logo} width={90} className='m-2'/>
              </a>
            </div>
            {/* Menus */}
            <div className='flex items-center'>
              <button className='focus:outline-none lg:hiden' onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <FaTimes className='w-5 h-6 m-2'/>
                ) : (
                  <FaBars className='w-5 h-6 m-2'/>
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className='flex flex-col gap-4 mt-4 ml-4 backdrop-blur-md'>
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className='block w-full text-lg' onClick={(e) => handleLinkClick(e, item.href)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) }
        </div>
      </nav>
    </div>
  )
}

export default Navbar