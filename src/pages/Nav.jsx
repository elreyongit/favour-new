import { useState } from 'react'
import ElreyLogo  from '../assets/elreyLogo.png'
import { FaBars } from 'react-icons/fa'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail, BiBriefcase } from 'react-icons/bi'
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
// import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false)

  const handleNavClick = () => {
    setShowNav(!showNav);
  }
  return (
    <div className='w-full flex lg:px-11 px-6 my-5 backdrop-blur bg-black text-white md:px-8 items-center drop-shadow-lg
    lg:justify-normal md:justify-normal justify-between lg:py-1 lg:mb-4 p fixed mt-0 z-50 '>
     <a href='/' className='cursor-pointer w-[35%] md:w-[25%]'>
      <div className='nav_left_logo flex gap-4 lg:m-3 md:m-3 m-0 lg:my-0 md:my-0 my-4 cursor-pointer items-center lg:justify-center' onClick={() => navigate('/')}>
        <img src={ElreyLogo} alt='Elrey' className='lg:w-[15%] w-[25%] md:w-[25%] filter invert'/>
        {/* <h2 className='text-xl tracking-wider'>Elrey</h2> */}
      </div>
     </a>

     <div className='nav_right_links lg:flex md:flex gap-11 m-3 lg:justify-end w-[65%] md:w-[55%] items-center hidden'>
      <a href="/" className='# hover:font-bold'
          >Home</a>
      <a href="/about" className='#about hover:font-bold'>About</a>
      <a href="/portfolio" className="hover:font-bold">Portfolio</a>
      <a href="/contact" className="hover:font-bold" >Contact</a>
      <a href="/services" className="hover:font-bold" >Services</a>

      <div className='bg-dark-favour text-white p-3 whitespace-nowrap px-5 rounded-lg cursor-pointer hover:bg-white hover:text-black' onClick={() => navigate('/contact')}>
        <p>Let&apos;s Talk</p>
      </div>
     </div>

     <div className="mobile_nav_section lg:hidden md:hidden flex items-center">
      <button
        onClick={handleNavClick}
        className="z-[60]"
        aria-label={showNav ? "Close Menu" : "Open Menu"}
      >
        {showNav ? (
          <MdOutlineCancel size={30} />
        ) : (
          <FaBars size={30} />
        )}
      </button>

      {/* Overlay */}
      <div
        onClick={handleNavClick}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          showNav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-black/95 backdrop-blur-lg border-l border-dark-favour z-50
          transform transition-transform duration-300 ease-in-out
          ${showNav ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col pt-24 px-6 gap-2">
          <a
            href="/"
            onClick={() => setShowNav(false)}
            className="flex items-center gap-3 p-4 border-b border-slate-700 hover:bg-white/10 rounded-md"
          >
            <AiOutlineHome size={22} />
            Home
          </a>

          <a
            href="/portfolio"
            onClick={() => setShowNav(false)}
            className="flex items-center gap-3 p-4 border-b border-slate-700 hover:bg-white/10 rounded-md"
          >
            <AiOutlineUser size={22} />
            Portfolio
          </a>

          <a
            href="/about"
            onClick={() => setShowNav(false)}
            className="flex items-center gap-3 p-4 border-b border-slate-700 hover:bg-white/10 rounded-md"
          >
            <BiBook size={22} />
            About
          </a>

          <a
            href="/services"
            onClick={() => setShowNav(false)}
            className="flex items-center gap-3 p-4 border-b border-slate-700 hover:bg-white/10 rounded-md"
          >
            <BiBook size={22} />
            Services
          </a>

          <a
            href="/contact"
            onClick={() => setShowNav(false)}
            className="flex items-center gap-3 p-4 border-b border-slate-700 hover:bg-white/10 rounded-md"
          >
            <BiMessageSquareDetail size={22} />
            Contact
          </a>

          <a
            href="/services"
            onClick={() => setShowNav(false)}
            className="flex items-center gap-3 p-4 border-b border-slate-700 hover:bg-white/10 rounded-md"
          >
            <BiBriefcase size={22} />
            Services
          </a>

          <button
            onClick={() => {
              setShowNav(false);
              navigate("/contact");
            }}
            className="mt-6 bg-dark-favour text-white py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Nav