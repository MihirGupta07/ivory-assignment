import React, { useState } from 'react'
import Screen1 from './Screen1'
import "./style.css"
import Screen2 from './Screen2'
import {Element} from 'react-scroll';
import GameIframe from '../Iframe';
import { GAME_LINKS } from '../../Constants';

const HomeScreen = () => {
    const [gameUrl, setGameUrl] = useState(GAME_LINKS.game0)

    return (
        <div>
            <Element name="Screen1">
                <Screen1 />
            </Element>
            <Element name="Screen2">
                <Screen2 gameUrl={gameUrl} setGameUrl={setGameUrl} />
            </Element>
            {!!gameUrl && <Element name="Screen3">
                <div className='h100 screenContainer'>
                    <GameIframe gameLink={gameUrl} />
                </div>
            </Element>}

        </div>
    )
}

export default HomeScreen