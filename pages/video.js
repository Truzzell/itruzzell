import VideoStyle from "../styles/Video.module.scss"
import HomeStyle from "../styles/Home.module.scss"

const video = () => {
    return (
        <>
        <h1>Image <span>Videos</span> & Schnitt </h1>
        <div className="content">
            <div className="card">
                <div className={HomeStyle.icon}>
                    <h2>Trailer 2021</h2>
                </div>
                <div className={VideoStyle.youtube}>
                    <video 
                    controls 
                    controlsList="nodownload" 
                    src="https://video.filmmakers.de/videos/47/117183-143647-h.mp4" />
                </div>                
            </div>

            <div className="card">
                <div className={HomeStyle.icon}>
                    <h2>Sløborn</h2>
                </div>
                <div className={VideoStyle.youtube}>
                    <video 
                    controls 
                    controlsList="nodownload" 
                    src="https://video.filmmakers.de/videos/32/117183-142032-h.mp4" />
                </div>                
            </div>
                
            <div className="card">
                <div className={HomeStyle.icon}>
                    <h2>Babylon Berlin</h2>
                </div>
                <div className={VideoStyle.youtube}>
                    <video 
                    controls
                    controlsList="nodownload" 
                    src="https://video.filmmakers.de/videos/23/117183-142023-h.mp4" />
                </div>
            </div>

            <div className="card">
                <div className={HomeStyle.icon}>
                    <h2>Strangers</h2>
                </div>
                <div className={VideoStyle.youtube}>
                    <video 
                    controls
                    controlsList="nodownload" 
                    src="https://video.filmmakers.de/videos/83/117183-51683-h.mp4" />
                </div>
            </div>

            <div className="card">
                <div className={HomeStyle.icon}>
                    <h2>EHO (Stilles Echo)</h2>
                </div>
                <div className={VideoStyle.youtube}>
                    <video 
                    controls
                    controlsList="nodownload" 
                    src="https://video.filmmakers.de/videos/27/117183-142027-h.mp4" />
                </div>
            </div>

            <div className="card">
                <div className={HomeStyle.icon}>
                    <h2>Ein verborgenes Leben</h2>
                </div>
                <div className={VideoStyle.youtube}>
                    <video 
                    controls
                    controlsList="nodownload" 
                    src="https://video.filmmakers.de/videos/55/117183-143655-h.mp4" />
                </div>
            </div>
        
        </div>
        </>
    )
}

export default video

