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
                    <div>
                    Cluster-Systeme 
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
