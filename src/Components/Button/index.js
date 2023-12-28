import React from 'react'
import { motion } from "framer-motion"

import "./style.css"

const Button = ({ onClick = () => { }, buttonText = 'buttonText', classes = '' }) => {
    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            className={`${classes} buttonClass`} onClick={onClick}>
            {buttonText}
        </motion.button>
    )
}

export default Button