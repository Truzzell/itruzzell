import Head from 'next/head'
import Image from "next/image"
import HomeStyle from '../styles/Home.module.scss'
import { fade } from "../styles/animations"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired, faFilm, faCode } from '@fortawesome/free-solid-svg-icons'



export default function Home() {
  return (
    <div>
        
      <Head>
        <title>iTruzzell</title>
        <link rel="icon" href="/favicon.png" />
      </Head> 
      
      <h1> 
          Ein vielseitiges <span className={HomeStyle.highlight}>Team</span> für Ihr Projekt!
      </h1> 
     
      <div className="content">
            <div className={HomeStyle.card1}>
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
            </div>
            
            <div className={HomeStyle.card2}>
              <div className={HomeStyle.img}>
              <Image
                src="/web.jpg"
                alt="We build your System"
                layout="fill"
                objectFit="cover"
                />
              </div>
            </div>

            <div className={HomeStyle.card3}>
              <div className={HomeStyle.img}>
                <Image
                src="/system.jpg"
                alt="We build your System"
                layout="fill"
                objectFit="cover"
                />
                </div>
            </div>

            <div className={HomeStyle.card4}>
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
            </div>

            <div className={HomeStyle.card5}>
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
              </div>
              <div className={HomeStyle.card6}>
              <div className={HomeStyle.img}>
              <Image
                src="/video.jpg"
                alt="We build your System"
                layout="fill"
                objectFit="cover"
              />
              </div>
              </div>
        
            </div>
            
    

</div>
      
  )
};
