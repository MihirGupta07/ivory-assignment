import React from 'react'
import "./style.css"
import Reveal from '../Reveal'
const GameIframe = (props) => {
    return (
        <Reveal>
            <div className='iframeContainer'>
                <iframe title="gameIframe" className='gameIframe' src={props.gameLink}></iframe>
            </div>
        </Reveal>
    )
}

export default GameIframe