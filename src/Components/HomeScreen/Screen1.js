import React from 'react'
import "./style.css"
import Reveal from '../Reveal'
import Button from '../Button'
import { Link, Element, animateScroll as scroll } from 'react-scroll';



const Screen1 = () => {
    return (
        <div className='h100 screenContainer'>
            <div>
                <Reveal index={1}>
                    <span className='colorBlueWhite headingText' >Is your</span>
                </Reveal>
                <Reveal index={2}>

                    <span className='colorBlue headingText'>brain slowing down</span>
                </Reveal>

                <Reveal index={3}>

                    <span className='colorBlueWhite headingText' >with age?</span>
                </Reveal>
            </div>

            <div className='paragraph'>
                <Reveal index={4}>
                    <span className='colorBlueWhite'>Keep your brain sharp with neuroscience-backed assessments and games. Take your first step today. </span>
                </Reveal>
                <Link
                        to="Screen2"
                        smooth={true}
                        duration={500}
                    >
                <Reveal index={4}>
                    

                        <Button classes='colorWhite button' buttonText='Get Started' />
          
                </Reveal>
                    </Link>

            </div>
        </div>
    )
}

export default Screen1