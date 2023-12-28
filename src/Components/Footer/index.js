import React from 'react'
import "./style.css"
import imgg from "../../assets/ivory-logo-dark.png.png"
import Reveal from '../Reveal'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='FooterContainer'>
            <div className='footerItem'>
                <Reveal>
                    <span className='footerHeading'>About us</span>
                </Reveal>
                <Reveal>
                    <div>
                        <img className="logoImage" src={imgg} alt='img' />
                    </div>
                    <span className='footerText'>Ivory is on a mission to transform the ageing experience by nurturing sharper minds and promoting healthier living.</span>
                </Reveal>
            </div>
            <div className='footerItem'>
                <Reveal>
                    <span className='footerHeading'>Social Media</span>
                </Reveal>
                <Reveal>
                    <div className='iconsList'>
                        <a href='https://www.instagram.com/letsliveivory/' className='linkIcon'><FaInstagram /></a>
                        <a href='https://www.facebook.com/liveivory' className='linkIcon'><FaFacebook /></a>
                        <a href='https://www.linkedin.com/company/nostalgicdust/' className='linkIcon'><FaLinkedin /></a>
                        <a href='https://chat.whatsapp.com/DQLSZQOcIto7Fh9SXdK2qD' className='linkIcon'><FaWhatsapp /></a>

                    </div></Reveal>
            </div>

        </div>
    )
}

export default Footer