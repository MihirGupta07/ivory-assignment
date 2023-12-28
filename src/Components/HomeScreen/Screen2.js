import React, { useState } from 'react'
import "./style.css"
import Reveal from '../Reveal'
import Button from '../Button'
import GameSelectorList from '../GameSelectorList'

const Screen2 = ({ gameUrl, setGameUrl }) => {
    return (
        <div className='h100 screenContainer' screen2>

            <div className='paragraph'>
            <Reveal index={4}>
                    <span className='colorBlueWhite'> Engaging and entertaining, these games are tailored to provide fun experiences while exercising your brain.</span>
                </Reveal>
                <GameSelectorList gameUrl={gameUrl} setGameUrl={setGameUrl} />
                {/* <Reveal index={4}>
                    <Button classes='colorWhite button' buttonText='Get Started'/>
                </Reveal> */}
                
            </div>
        </div>
    )
}

export default Screen2