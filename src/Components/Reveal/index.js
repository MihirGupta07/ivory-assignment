import React from 'react'
import { motion } from "framer-motion"


const Reveal = (props) => {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .8, delay: props.index ?  + 3*props.index/10 : .5 }}
            style={{display: 'flex', flexDirection: "column"}}
        >
            {props.children}
        </motion.div>
    )
}

export default Reveal