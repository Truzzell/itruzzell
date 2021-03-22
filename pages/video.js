import VideoStyle from "../styles/Video.module.scss"

const video = () => {
    return (
        <>
        <h1>Image Videos & Schnitt </h1>
        <div className="content">
            <div className={VideoStyle.youtube}>
                <video controls src="https://video.filmmakers.de/videos/47/117183-143647-h.mp4" />
            </div>
        </div>
        </>
    )
}

export default video

