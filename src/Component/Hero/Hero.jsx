import React from 'react'
import './Hero.css'
import hire from '../Asset/hireme.png'
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div>
        <section id="hero">
            <div className="hero-left">
                <span className="hello">Hello,</span>
                <span className="intro">I'm <span className='name'>Zhuliakho</span><br/> Frontend Developer</span>
                <p className="introPara">I'm a skilled frontend developer with experience in creating visually appealing, fully functional and user friendly website</p>
                <Link><button className='btn'><img src={hire} alt="" />Hire Me</button></Link>
            </div>
            <div className="hero-right">
                
            </div>
        </section>
    </div>
  )
}

export default Hero