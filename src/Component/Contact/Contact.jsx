import React from 'react'
import './Contact.css'
import Walmart from '../Asset/walmart.png'
import Adobe from '../Asset/adobe.png'
import Microsoft from '../Asset/microsoft.png'
import facebook from '../Asset/facebook.png'
import facebookIcon from '../Asset/facebook-icon.png'
import twitterIcon from '../Asset/twitter.png'
import instagramIcon from '../Asset/instagram.png'
import youtubeIcon from '../Asset/youtube.png'

const Contact = () => {
  return (
    <section id="contactPage">
        <div className="clients">
            <h2 className="contactPageTitle">My Clients</h2>
            <p className="clientDesc">I have had oppurtunity to work with ....</p>

        </div>
        <div className="clientsImgs">
            <img src={Walmart} alt="" className="clientImg" />
            <img src={Adobe} alt="" className="clientImg" />
            <img src={Microsoft} alt="" className="clientImg" />
            <img src={facebook} alt="" className="clientImg" />
        </div>
        <div id="contact">
            <h2 className="contactTitle">Contact Me</h2> 
            <span className="contactDesc">Please fill out the form below to discuss work oppurtunities</span> 
            <form action="" className="contactForm">
                <input type="text" name="name" placeholder="Your name" />
                <input type="email" name="email" placeholder="Your Email" />
                <textarea name="msg" rows="5"> Your message</textarea>
                <button type="submit" value= 'send'>Submit</button>
                <div className="links">
                    <img src={facebookIcon} alt="" className="link" />
                    <img src={twitterIcon} alt="" className="link" />
                    <img src={instagramIcon} alt="" className="link" />
                    <img src={youtubeIcon} alt="" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact