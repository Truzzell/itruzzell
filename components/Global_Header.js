import stylesHeader from "../styles/Header.module.scss"
import { motion } from "framer-motion"
import { titleAnimation, fade } from "../styles/animations"

const Header = () => {
    return (
        <motion.div 
        variants={fade}
        className={stylesHeader.container}>
            <div className="hide">
                <motion.h1 
                variants={titleAnimation} 
                className={stylesHeader.title}>
                    <span>iT</span>ruzzell
                </motion.h1>
            </div>
            <div className="hide">
                <motion.p 
                variants={titleAnimation} 
                className={stylesHeader.slogan}>
                    We <span>love</span> what we do
                </motion.p>
            </div>
            
        </motion.div>
    )
}

export default Header
