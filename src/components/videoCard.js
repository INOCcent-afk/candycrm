import React from "react"
import style from "./videoCard.module.scss"

const VideoCard = props => {
  return (
    <div className={style.videoCard}>
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
      <video src={props.video} loop autoPlay muted></video>
    </div>
  )
}

export default VideoCard
