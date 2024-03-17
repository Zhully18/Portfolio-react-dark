import React from 'react'
import './Work.css'
import Portfolio1 from '../Asset/portfolio-1.png'
import Portfolio2 from '../Asset/portfolio-2.png'
import Portfolio3 from '../Asset/portfolio-3.png'
import Portfolio4 from '../Asset/portfolio-4.png'
import Portfolio5 from '../Asset/portfolio-5.png'
import Portfolio6 from '../Asset/portfolio-6.png'

const Work = () => {
  return (
    <section id='works'>
        <h2 className="workstitle">My Portfolio </h2>
        <span className="worksDesc">I take pride in paying attention to the smallest details and i love to develop soul pleasing websites</span>
        <div className="worksImg">
            <img src={Portfolio1} alt="" />
            <img src={Portfolio2} alt="" />
            <img src={Portfolio3} alt="" />
            <img src={Portfolio4} alt="" />
            <img src={Portfolio5} alt="" />
            <img src={Portfolio6} alt="" />
        </div>
        <button className="workbtn">See More</button>
    </section>
  );
}

export default Work
