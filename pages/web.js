import Image from "next/image"
import HomeStyle from '../styles/Home.module.scss'

const web = () => {
    return (
        <>
        <h1>Webseiten & Grafikdesign</h1>
        <div className="content">
                <div className={HomeStyle.card1}> 
                    <div className={HomeStyle.imgText}>
                        <p>Webseiten Gestaltung</p>
                    </div>
                    <div className={HomeStyle.img}>
                    <Image
                        src="/web_03.png"
                        alt="Webseiten Erstellung"
                        layout="fill"
                        objectFit="cover"
                    />
                    </div>    
                </div>

                <div className={HomeStyle.card2}>
                    <div className={HomeStyle.imgText}>
                        <p>Webseiten Gestaltung</p>
                    </div>
                    <div className={HomeStyle.img}>
                        <Image
                            src="/web_02.png"
                            alt="Webseiten Erstellung"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>  
                </div>

                <div className={HomeStyle.card3}>
                    <div className={HomeStyle.imgText}>
                        <p>Fotomontage</p>
                    </div>
                    <div className={HomeStyle.img}>
                        <Image
                            src="/web_05.jpg"
                            alt="Fotomontagen"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>  
                </div>

                <div className={HomeStyle.card4}>
                    <div className={HomeStyle.imgText}>
                        <p>Logo Gestaltung</p>
                    </div>
                    <div className={HomeStyle.img}>
                        <Image
                            src="/web_04.png"
                            alt="Logo Gestaltung"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>  
                </div>

                <div className={HomeStyle.card5}>
                    <div className={HomeStyle.imgText}>
                        <p>Vektorisierung</p>
                    </div>
                    <div className={HomeStyle.img}>
                        <Image
                            src="/web_06.png"
                            alt="Vektorisierung"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>  
                </div>

                <div className={HomeStyle.card6}>
                    <div className={HomeStyle.imgText}>
                        <p>Flyer Gestaltung</p>
                    </div>
                    <div className={HomeStyle.img}>
                        <Image
                            src="/web_01.png"
                            alt="Flyergestaltung"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>  
                </div>
        </div>
        </>
    )
}

export default web
