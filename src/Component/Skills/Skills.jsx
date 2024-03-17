import React from 'react'
import './Skills.css'
import UI from '../Asset/ui-design.png'
import web from '../Asset/website-design.png'
import app from '../Asset/app-design.png'

const Skills = () => {
  return (
    <div className='skills'>
        <span className="skill-title">What I do<br/></span>
        <span className="description">I am a skilled and passionate frontend developer Demo text: This is a demo text. I will add more to it later when i am done Demo text: This is a demo text. I will add more to it later when i am done </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UI} alt="" />
                <div className="skillText">
                    <h2>UI/UX Design</h2>
                    <p>Demo text:Demo text: This is a demo text. I will add more to it later when i am done</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={web} alt="" />
                <div className="skillText">
                    <h2>Web Design</h2>
                    <p>Demo text: This is a demo text. I will add more to it later when i am done</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={app} alt="" />
                <div className="skillText">
                    <h2>App Design</h2>
                    <p>This is a demo text, i will add more to it Demo text: This is a demo text. I will add more to it later when i am done</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills