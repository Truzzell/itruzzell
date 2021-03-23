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
            className={HomeStyle.card1}>
              <div className={HomeStyle.icon}>
              <FontAwesomeIcon 
              className={HomeStyle.picto}
              icon={faCode} />
                <h2>Web & Grafik</h2>
              </div>
              <div className={HomeStyle.cardText}>
                <h3>
                  <ul>
                    <li>Webdesign</li>
                    <li>Bildbearbeitung</li>
                    <li>Vektorisierung</li>
                  </ul>
                </h3>
              <button type="button" className={HomeStyle.button}>
                  Kontakt
              </button>
              </div>
            </motion.div>
            
            <motion.div 
            variants={fromRight} 
            className={HomeStyle.card2}>
              <div className={HomeStyle.img}>
              <Image
                src="/web.jpg"
                alt="We build your System"
                layout="fill"
                objectFit="cover"
                />
              </div>
            </motion.div>

            <motion.div
             variants={fromLeft} 
             className={HomeStyle.card3}>
              <div className={HomeStyle.img}>
                <Image
                src="/system.jpg"
                alt="We build your System"
                layout="fill"
                objectFit="cover"
                />
                </div>
            </motion.div>

            <motion.div 
             variants={fromRight} 
             className={HomeStyle.card4}>
                <div className={HomeStyle.icon}>
                    <FontAwesomeIcon
                    className={HomeStyle.picto} 
                    icon={faNetworkWired} />
                    <h2>Systeme</h2>
                </div>
                <div className={HomeStyle.cardText}>
                  <h3>
                    <ul>
                      <li>Systemintegration</li>
                      <li>Netwerksysteme</li>
                      <li>Windows & Linux Server</li>
                    </ul>
                  </h3>
                  <button type="button" className={HomeStyle.button}>
                      Kontakt
                  </button>
                </div>
            </motion.div>

            <motion.div  
            variants={fromLeft} 
            className={HomeStyle.card5}>
                <div className={HomeStyle.icon}>
                    <FontAwesomeIcon
                    className={HomeStyle.picto} 
                    icon={faFilm} />

                    <h2>Videoschnitt</h2>
                </div>
                <div className={HomeStyle.cardText}>
                  <h3>
                    <ul>
                    <li>Image Videos</li>
                      <li>Videoschnitt</li>
                    </ul>
                  </h3>
                  <button type="button" className={HomeStyle.button}>
                      Kontakt
                  </button>
                </div>                                   
              </motion.div>

              <motion.div
               variants={fromRight} 
               className={HomeStyle.card6}>
              <div className={HomeStyle.img}>
              <Image
                src="/video.jpg"
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
