import Head from 'next/head'
import Image from "next/image"
import HomeStyle from '../styles/Home.module.scss'
import { motion } from "framer-motion"
import { fade, fromLeft, fromRight } from "../styles/animations"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired, faFilm, faCode } from '@fortawesome/free-solid-svg-icons'



export default function Home() {
  return (
    <motion.div variants={fade}>
        
      <Head>
        <title>iTruzzell</title>
        <link rel="icon" href="/favicon.png" />
      </Head> 
      
      <motion.h1
      variants={fade}> 
          Ein vielseitiges <span className={HomeStyle.highlight}>Team</span> für Ihr Projekt!
      </motion.h1> 
     
      <div className="content">
            <motion.div
            variants={fromLeft} 
            className="card1 card">
              <div className={HomeStyle.icon}>
              <FontAwesomeIcon 
              className={HomeStyle.picto}
              icon={faCode} />
                <h2>Web & Grafik</h2>
              </div>
              <div className={HomeStyle.cardText}>
                
                  <ul>
                    <li>Webdesign</li>
                    <li>Bildbearbeitung</li>
                    <li>Vektorisierung</li>
                  </ul>
              
              <button type="button" className={HomeStyle.button}>
                  Kontakt
              </button>
              </div>
            </motion.div>
            
            <motion.div 
            variants={fromRight} 
            className="card2 card">
              <div className="img">
              <Image
                src="/home/web.jpg"
                alt="We build your System"
                layout="fill"
                objectFit="cover"
                />
              </div>
            </motion.div>

            <motion.div
             variants={fromLeft} 
             className="card3 card">
              <div className="img">
                <Image
                src="/home/system.jpg"
                alt="We build your System"
                layout="fill"
                objectFit="cover"
                />
                </div>
            </motion.div>

            <motion.div 
             variants={fromRight} 
             className="card4 card">
                <div className={HomeStyle.icon}>
                    <FontAwesomeIcon
                    className={HomeStyle.picto} 
                    icon={faNetworkWired} />
                    <h2>Systeme</h2>
                </div>
                <div className={HomeStyle.cardText}>
                  
                    <ul>
                      <li>Systemintegration</li>
                      <li>Netwerksysteme</li>
                      <li>Windows & Linux Server</li>
                    </ul>
                  
                  <button type="button" className={HomeStyle.button}>
                      Kontakt
                  </button>
                </div>
            </motion.div>

            <motion.div  
            variants={fromLeft} 
            className="card5 card">
                <div className={HomeStyle.icon}>
              
                    <FontAwesomeIcon
                    className={HomeStyle.picto} 
                    icon={faFilm} /> 

                    <h2>Videoschnitt</h2>
                </div>
                <div className={HomeStyle.cardText}>
                  
                    <ul>
                    <li>Image Videos</li>
                      <li>Videoschnitt</li>
                      <li>Schauspiel</li>
                    </ul>
                  
                  <button type="button" className={HomeStyle.button}>
                      Kontakt
                  </button>
                </div>                                   
              </motion.div>

              <motion.div
               variants={fromRight} 
               className="card6 card">
              <div className="img">
              <Image
                src="/home/video.jpg"
                alt="We build your System"
                layout="fill"
                objectFit="cover"
              />
              </div>
              </motion.div>
        
            </div>
            
    

</motion.div>
      
  )
};
