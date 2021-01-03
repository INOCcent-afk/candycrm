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
        Innovative sales & marketing features for IT service providers
      </h1>
      <div className={style.videosContainer}>
        <VideoCard
          title="Email marketing management"
          video={Video1}
          paragraph={
            "From a simple intuitive email builder that enables you to compose beautiful emails campaigns to fully automated marketing plans and journeys. Honey helps you master email marketing."
          }
        />
        <VideoCard
          title="Tried and tested MSP marketing content"
          video={Video2}
          paragraph={
            "Honey offers a large library of marketing resources that cover the full gamut of IT services. All of it is automatically branded for your company so you can go to market in minutes."
          }
        />
        <VideoCard
          title="Automated activity tracking"
          video={Video3}
          paragraph={
            "Even if you don't love Outlook, chances are you rely on it to handle vital communications. Honey will automatically grab those activities and enter them in Honey for you."
          }
        />
        <VideoCard
          title="Bulk sales actions"
          video={Video4}
          paragraph={
            "Honey takes the grunt work out of sales follow up. Use Honey’s powerful bulk actions to follow up thousands of leads in under 5 minutes."
          }
        />
      </div>
    </div>
  )
}

export default IndexFifthShowcase
