import React from 'react'
import { GAME_DESC, GAME_LINKS, GAME_NAMES } from '../../Constants'
import { motion } from "framer-motion"
import "./style.css"
import Reveal from '../Reveal'
import { Link} from 'react-scroll';
import Button from '../Button'


const GameSelectorList = ({ gameUrl, setGameUrl }) => {

    return (
        <div className='orderedList'>
            {
                Object.keys(GAME_LINKS).map((game, index) => {
                    return <motion.div className='GameContainer'>
                        <Reveal index={index}>
                            <span className='colorBlueWhite GameNameText'>{GAME_NAMES[game]}</span>
                        </Reveal>
                        <Reveal index={index}>
                            <span className='colorWhite '>{GAME_DESC[game]}</span>
                        </Reveal>
                        <Reveal>
                            <Link
                                to="Screen3"
                                smooth={true}
                                duration={500}
                                delay={100}
                            >
                                <Button onClick={() => { setGameUrl(GAME_LINKS[game]) }} classes='colorBlue playGameButton' buttonText={`Play ${GAME_NAMES[game]}`} />
                            </Link>
                        </Reveal>

                    </motion.div>
                })
            }
        </div>
    )
}

export default GameSelectorList