import React from "react"
import style from "./indexFifthShowcase.module.scss"
import VideoCard from "./videoCard"
import Video1 from "../images/email-marketing-management-ae58b40ebf551b6397a72e55bed85ada.mp4"
import Video2 from "../images/marketing-content-4e6b573a0657e2bb37c71e2fb567cce6.mp4"
import Video3 from "../images/activity-tracking-601a72762b407251c59403926f4e9ce9.mp4"
import Video4 from "../images/bulk-sales-actions-867fb1acecf952024aa5b1dd5c52a00e.mp4"

const IndexFifthShowcase = () => {
  return (
    <div className={style.container5}>
      <h1 className={style.title}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, iste.
      </h1>
      <div className={style.videosContainer}>
        <VideoCard
          title="Email marketing management"
          video={Video1}
          paragraph={
            "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque similique dolorum, perferendis temporibus omnis ipsa doloremque quaerat beatae quod delectus vero distinctio? Exercitationem, nobis nam."
          }
        />
        <VideoCard
          title="Tried and tested MSP marketing content"
          video={Video2}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque similique dolorum, perferendis temporibus omnis ipsa doloremque quaerat beatae quod delectus vero distinctio? Exercitationem, nobis nam."
          }
        />
        <VideoCard
          title="Automated activity tracking"
          video={Video3}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque similique dolorum, perferendis temporibus omnis ipsa doloremque quaerat beatae quod delectus vero distinctio? Exercitationem, nobis nam."
          }
        />
        <VideoCard
          title="Bulk sales actions"
          video={Video4}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque similique dolorum, perferendis temporibus omnis ipsa doloremque quaerat beatae quod delectus vero distinctio? Exercitationem, nobis nam."
          }
        />
      </div>
    </div>
  )
}

export default IndexFifthShowcase
