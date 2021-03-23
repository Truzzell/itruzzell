import HomeStyle from "../styles/Home.module.scss"

const system = () => {
    return (
        <>
            <h1>Alles rund um Windows, Netzwerke & Server</h1>
            <div className="content">
                    <div className={HomeStyle.card}>
                        <p>
                            Cluster-Systeme zur Datensicherung
                        </p>
                    </div>
                    <div className={HomeStyle.card}>
                        <p>
                            Windows
                        </p>
                    </div>
                    <div className={HomeStyle.card}>
                        <p>
                            Linux
                        </p>
                    </div>
                    <div className={HomeStyle.card}>
                        <p>
                            Server
                        </p>
                    </div>
                    <div className={HomeStyle.card}>
                        <p>
                            Netzwerke
                        </p>
                    </div>
                    <div className={HomeStyle.card}>
                        <p>
                            Betriebssysteme
                        </p>
                    </div>
            </div>
        </>
    )
}

export default system
