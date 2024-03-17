import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Asset/logo.png'
import {Link} from 'react-scroll'
import contact from '../Asset/contact.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
        <nav className="navbar" >
            <img src={logo} alt="Logo" className='logo'/>
            <div className="menu">
               <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100 } duration={500} className="menuList" onClick={()=> setShowMenu(!showMenu)}>Home</Link>
               <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60 } duration={500} className="menuList" onClick={()=> setShowMenu(!showMenu)}>About</Link>
               <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60 } duration={500} className="menuList" onClick={()=> setShowMenu(!showMenu)}>Project</Link>
               <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-60 } duration={500} className="menuList" onClick={()=> setShowMenu(!showMenu)}>Blog</Link>
            </div>
            <button className="menubtn" onClick={() =>{
            document.getElementById('contact').scrollIntoView({behaviour: 'smooth'});
            }}>
                <img src={contact} alt="" className="menu" />Contact Me
            </button>
        </nav>
    </div>
  )
}

export default Navbar