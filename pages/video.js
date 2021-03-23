import VideoStyle from "../styles/Video.module.scss"

const video = () => {
    return (
        <>
        <h1>Image Videos & Schnitt </h1>
        <div className="content">
            <div className={VideoStyle.youtube}>
                <video 
                controls 
                controlsList="nodownload" 
                src="https://video.filmmakers.de/videos/47/117183-143647-h.mp4" />
            </div>
            <div className={VideoStyle.youtube}>
                <video 
                controls
                controlsList="nodownload" 
                src="https://video.filmmakers.de/videos/32/117183-142032-h.mp4" />
            </div>
            <div className={VideoStyle.youtube}>
                <video 
                controls
                controlsList="nodownload" 
                src="https://video.filmmakers.de/videos/23/117183-142023-h.mp4" />
            </div>
            <div className={VideoStyle.youtube}>
                <video 
                controls
                controlsList="nodownload" 
                src="https://video.filmmakers.de/videos/83/117183-51683-h.mp4" />
            </div>
            <div className={VideoStyle.youtube}>
                <video 
                controls
                controlsList="nodownload" 
                src="https://video.filmmakers.de/videos/27/117183-142027-h.mp4" />
            </div>
            <div className={VideoStyle.youtube}>
                <video 
                controls
                controlsList="nodownload" 
                src="https://video.filmmakers.de/videos/55/117183-143655-h.mp4" />
            </div>

        
        </div>
        </>
    )
}

export default video

