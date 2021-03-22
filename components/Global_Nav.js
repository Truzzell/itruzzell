import Link from "next/link"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import navStyle from "../styles/Nav.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars, faArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import { faNetworkWired, faFilm, faCode, faHome } from '@fortawesome/free-solid-svg-icons'
import { titleAnimation } from "../styles/animations"



const variants = {
    open: { 
        opacity: 1,
        rotateY: 0,
        pointerEvents: "all",
        transition: { 
            when: "beforChildren",
            staggerChildren: 0.25, delayChildren: 0.2 } 
    },

    closed: { 
        opacity: 0,
        pointerEvents: "none", 
        rotateY: 90,
    },
}


const Global_Nav = () => {

const constraintsRef = useRef(null);
const [isOpen, setIsOpen] = useState(false);

    return (
        
        <motion.div 
        className={navStyle.dragarea}  
        ref={constraintsRef}
        >
            
            <motion.nav
             className={navStyle.modal}
             initial={false}
             animate={isOpen ? "open" : "closed"}
             variants={variants}
             >
                <ul onClick={() => setIsOpen(!isOpen)}>
                    <Link href="/">                           
                        <li>
                            <FontAwesomeIcon
                            className={navStyle.picto}
                            icon={faHome} />
                            <h2>Start</h2>
                        </li>  
                    </Link>
                    <Link href="/web">
                        <li>
                            <FontAwesomeIcon 
                            className={navStyle.picto}
                            icon={faCode} />
                            <h2>Web & Grafik</h2>
                        </li>
                    </Link>
                    <Link href="/video">
                        <li> 
                            <FontAwesomeIcon
                            className={navStyle.picto} 
                            icon={faFilm} />

                            <h2>Video</h2>
                        </li>
                    </Link>
                    <Link href="/system">
                        <li>
                            <FontAwesomeIcon
                            className={navStyle.picto} 
                            icon={faNetworkWired}
                             />
                            <h2>Systeme</h2>
                         </li>
                     </Link>
                </ul>
            </motion.nav>
            

            <motion.div 
        className={navStyle.navButton} 
        drag
        dragConstraints={constraintsRef}
        // dragElastic={0.2}
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{
            scale: 0.9,
        }}
        >   

       
            <FontAwesomeIcon 
                className={navStyle.faIcons}
                icon={isOpen ? faTimes : faBars}
                // style={{width:"1rem"}}
                
            />
            <FontAwesomeIcon
                className={navStyle.faIconMove}
                icon={faArrowsAlt} 
                // style={{width:"1rem"}}
                
            />


             
        </motion.div>

        
           
        </motion.div>
        
        
        
   
        
    )
}

export default Global_Nav





// const StyledNav = styled(motion.div)`
//     color: #fff;
// 	display: flex;
//     position: absolute;
//     height: 5vh;
//      /* width: 100vw; */
//     background-color: black;
//     top: 0;

//     h1 {
//          margin: 0;
//     }

//     ul {
// 	display: flex;
//     /* flex-wrap: wrap; */
// 	list-style: none;
//     }
  
//     ul li a {
//  	margin: 5px 15px;
//     }
// `;

