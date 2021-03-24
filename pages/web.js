import Image from "next/image"
import Link from "next/link"
import HomeStyle from '../styles/Home.module.scss'


const web = () => {
    return (
        <>
        <h1>Webseiten <span>&</span> Grafikdesign</h1>
        <div className="content">
                <div className="card1 card"> 
                    <div className={HomeStyle.icon}>
                        <h2>Webseiten Gestaltung</h2>
                    </div>
                   
                    <Link 
                    href="https://www.shishinodojo.de"
                    passHref>
                        <a target="_blank">
                        <div className="img">
                    <Image
                        src="/web/web_03.png"
                        alt="Webseiten Erstellung"
                        layout="fill"
                        objectFit="cover"
                        quality="75"
                        objectPosition="top"
                    />
                        </div>  
                        </a>
                    </Link>
                      
                </div>

                <div className="card2 card">
                    <div className={HomeStyle.icon}>
                        <h2>Webseiten Gestaltung</h2>
                    </div>
                    <a href="https://www.gottlob-berlin.de"
                        target="_blank">
                    <div className="img">
                        
                        <Image
                            src="/web/web_02.png"
                            alt="Webseiten Erstellung"
                            layout="fill"
                            objectFit="cover"
                            quality="75"
                            objectPosition="top"

                        />
                        
                    </div>  
                    </a>
                </div>

                <div className="card3 card">
                    <div className={HomeStyle.icon}>
                        <h2>Fotomontage</h2>
                    </div>
                    <div className="img">
                        <Image
                            src="/web/web_05.jpg"
                            alt="Fotomontagen"
                            layout="fill"
                            objectFit="cover"
                            quality="75"
                            objectPosition="top"                            
                        />
                    </div>  
                </div>

                <div className="card4 card">
                    <div className={HomeStyle.icon}>
                        <h2>Logo Gestaltung</h2>
                    </div>
                    <div className="img">
                        <Image
                            src="/web/web_04.png"
                            alt="Logo Gestaltung"
                            layout="fill"
                            objectFit="cover"
                            quality="75"
                            objectPosition="top"
                        />
                    </div>  
                </div>

                <div className="card5 card">
                    <div className={HomeStyle.icon}>
                        <h2>Vektorisierung</h2>
                    </div>
                    <div className="img">
                        <Image
                            src="/web/web_06.png"
                            alt="Vektorisierung"
                            layout="fill"
                            objectFit="cover"
                            quality="75"
                            objectPosition="top"
                        />
                    </div>  
                </div>

                <div className="card6 card">
                    <div className={HomeStyle.icon}>
                        <h2>Flyer Gestaltung</h2>
                    </div>
                    <div className="img">
                        <Image
                            src="/web/web_01.png"
                            alt="Flyergestaltung"
                            layout="fill"
                            objectFit="cover"
                            quality="75"
                            objectPosition="top"
                        />
                    </div>  
                </div>
        </div>
        </>
    )
}

export default web
