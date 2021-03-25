import HomeStyle from "../styles/Home.module.scss"

const system = () => {
    return (
        <>
            <h1>Alles <span>rund</span> um Windows, <span>Netzwerke</span> & Server</h1>
            <div className="content">
                <div className="card">
                    <div className={HomeStyle.icon}>
                        <h2>Datensicherung</h2>
                    </div>
                    <div className={HomeStyle.cardText}>
                  
                        <p>Wir erstellen nach Ihren wünschen und beraten Sie gerne bei allem rund um Datensicherung, z.B: 
                            <ul>
                                <li>Cluster-Systeme </li>
                                <li>Cloud Lösung</li>
                                <li>Home Server</li>
                            </ul>
                        </p>
                  
                  {/* <button type="button" className={HomeStyle.button}>
                      Kontakt
                  </button> */}
                </div>                        
            
                </div>
                <div className="card">
                    <div className={HomeStyle.icon}>
                        <h2>Windows</h2>
                    </div>
                </div>
                <div className="card">
                    <div className={HomeStyle.icon}>
                        <h2>Linux</h2>
                    </div>
                </div>
                <div className="card">
                    <div className={HomeStyle.icon}>
                        <h2>Server</h2>
                    </div>
                </div>
                <div className="card">
                    <div className={HomeStyle.icon}>
                        <h2>Netzwerke</h2>
                    </div>
                </div>
                <div className="card">
                    <div className={HomeStyle.icon}>
                        <h2>Betriebssysteme</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default system
