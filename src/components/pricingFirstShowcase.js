import React from "react"
import style from "./pricingFirstShowcase.module.scss"
const PricingFirstShowcase = () => {
  return (
    <div className={style.container1}>
      <div className={style.title}>
        <h1>Get started with Candy</h1>
        <h5>
          Try it for free and Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </h5>
      </div>
      <div className={style.firstCircle}></div>
      <div className={style.secondCircle}></div>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.cardTitle}>
            <h1>Lite</h1>
          </div>
          <div className={style.cardContent}>
            <div className={style.cardContentTitle}>
              <h1>$49</h1>
              <p>/month</p>
            </div>
            <div className={style.cardInfoContainer}>
              <div className={style.cardInfo}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyBpZD0iR3JvdXBfMjM4MSIgZGF0YS1uYW1lPSJHcm91cCAyMzgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjUuMjY3IiBoZWlnaHQ9IjI0LjkzNSIgdmlld0JveD0iMCAwIDI1LjI2NyAyNC45MzUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB5MT0iMC41IiB4Mj0iMSIgeTI9IjAuNSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzJiZGEyOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzEzZWJlZSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGlkPSJQYXRoXzkzMyIgZGF0YS1uYW1lPSJQYXRoIDkzMyIgZD0iTTY2Ni40NzMsMTEyNC4xYTEyLjc1MiwxMi43NTIsMCwwLDAtNi41MTksMS43ODcsMTIuNjY3LDEyLjY2NywwLDEsMCw2LjUxOS0xLjc4N1ptNy4wODQsOS42NTItNy43NTgsOS40OTFhMS41MDYsMS41MDYsMCwwLDEtMi4xNzMuMTUzbC00LjA5NC0zLjc4YTEuNSwxLjUsMCwwLDEtLjA5LTIuMTFsLjItLjIwNmExLjQ5MSwxLjQ5MSwwLDAsMSwyLjExLS4wODFsMS41NDQsMS40MjhhMS41LDEuNSwwLDAsMCwyLjE2NC0uMTUzbDUuNTc2LTYuODA2YTEuNSwxLjUsMCwwLDEsMi4xLS4yMTZsLjIxNS4xNzlBMS40OTQsMS40OTQsMCwwLDEsNjczLjU1OCwxMTMzLjc1MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTMuODQgLTExMjQuMSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+PC9zdmc+"
                  alt="icon"
                />
                <p>Unlimited Users</p>
              </div>
              <div className={style.cardInfo}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyBpZD0iR3JvdXBfMjM4MSIgZGF0YS1uYW1lPSJHcm91cCAyMzgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjUuMjY3IiBoZWlnaHQ9IjI0LjkzNSIgdmlld0JveD0iMCAwIDI1LjI2NyAyNC45MzUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB5MT0iMC41IiB4Mj0iMSIgeTI9IjAuNSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzJiZGEyOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzEzZWJlZSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGlkPSJQYXRoXzkzMyIgZGF0YS1uYW1lPSJQYXRoIDkzMyIgZD0iTTY2Ni40NzMsMTEyNC4xYTEyLjc1MiwxMi43NTIsMCwwLDAtNi41MTksMS43ODcsMTIuNjY3LDEyLjY2NywwLDEsMCw2LjUxOS0xLjc4N1ptNy4wODQsOS42NTItNy43NTgsOS40OTFhMS41MDYsMS41MDYsMCwwLDEtMi4xNzMuMTUzbC00LjA5NC0zLjc4YTEuNSwxLjUsMCwwLDEtLjA5LTIuMTFsLjItLjIwNmExLjQ5MSwxLjQ5MSwwLDAsMSwyLjExLS4wODFsMS41NDQsMS40MjhhMS41LDEuNSwwLDAsMCwyLjE2NC0uMTUzbDUuNTc2LTYuODA2YTEuNSwxLjUsMCwwLDEsMi4xLS4yMTZsLjIxNS4xNzlBMS40OTQsMS40OTQsMCwwLDEsNjczLjU1OCwxMTMzLjc1MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTMuODQgLTExMjQuMSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+PC9zdmc+"
                  alt="icon"
                />
                <p>500 Contacts</p>
              </div>
            </div>
            <button>Sign Up</button>
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(180deg,#d888f0, #7f5efe)",
          }}
          className={style.card}
        >
          <div
            style={{
              background: "#c67ff3",
            }}
            className={style.cardTitle}
          >
            <h1>Standard</h1>
          </div>
          <div className={style.cardContent}>
            <div className={style.cardContentTitle}>
              <h1 style={{ color: "#fff" }}>$149</h1>
              <p style={{ color: "#fff" }}>/month</p>
            </div>
            <div className={style.cardInfoContainer}>
              <div className={style.cardInfo}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNS4yNjciIGhlaWdodD0iMjQuOTM1IiB2aWV3Qm94PSIwIDAgMjUuMjY3IDI0LjkzNSI+PGcgaWQ9Ikdyb3VwXzIzNzkiIGRhdGEtbmFtZT0iR3JvdXAgMjM3OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+PHBhdGggaWQ9IlBhdGhfOTMzIiBkYXRhLW5hbWU9IlBhdGggOTMzIiBkPSJNNjY2LjQ3MywxMTI0LjFhMTIuNzUyLDEyLjc1MiwwLDAsMC02LjUxOSwxLjc4NywxMi42NjcsMTIuNjY3LDAsMSwwLDYuNTE5LTEuNzg3Wm03LjA4NCw5LjY1Mi03Ljc1OCw5LjQ5MWExLjUwNiwxLjUwNiwwLDAsMS0yLjE3My4xNTNsLTQuMDk0LTMuNzhhMS41LDEuNSwwLDAsMS0uMDktMi4xMWwuMi0uMjA2YTEuNDkxLDEuNDkxLDAsMCwxLDIuMTEtLjA4MWwxLjU0NCwxLjQyOGExLjUsMS41LDAsMCwwLDIuMTY0LS4xNTNsNS41NzYtNi44MDZhMS41LDEuNSwwLDAsMSwyLjEtLjIxNmwuMjE1LjE3OUExLjQ5NCwxLjQ5NCwwLDAsMSw2NzMuNTU4LDExMzMuNzUyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY1My44NCAtMTEyNC4xKSIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9nPjwvc3ZnPg=="
                  alt="icon"
                />
                <p style={{ color: "#fff" }}>Unlimited Users</p>
              </div>
              <div className={style.cardInfo}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNS4yNjciIGhlaWdodD0iMjQuOTM1IiB2aWV3Qm94PSIwIDAgMjUuMjY3IDI0LjkzNSI+PGcgaWQ9Ikdyb3VwXzIzNzkiIGRhdGEtbmFtZT0iR3JvdXAgMjM3OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+PHBhdGggaWQ9IlBhdGhfOTMzIiBkYXRhLW5hbWU9IlBhdGggOTMzIiBkPSJNNjY2LjQ3MywxMTI0LjFhMTIuNzUyLDEyLjc1MiwwLDAsMC02LjUxOSwxLjc4NywxMi42NjcsMTIuNjY3LDAsMSwwLDYuNTE5LTEuNzg3Wm03LjA4NCw5LjY1Mi03Ljc1OCw5LjQ5MWExLjUwNiwxLjUwNiwwLDAsMS0yLjE3My4xNTNsLTQuMDk0LTMuNzhhMS41LDEuNSwwLDAsMS0uMDktMi4xMWwuMi0uMjA2YTEuNDkxLDEuNDkxLDAsMCwxLDIuMTEtLjA4MWwxLjU0NCwxLjQyOGExLjUsMS41LDAsMCwwLDIuMTY0LS4xNTNsNS41NzYtNi44MDZhMS41LDEuNSwwLDAsMSwyLjEtLjIxNmwuMjE1LjE3OUExLjQ5NCwxLjQ5NCwwLDAsMSw2NzMuNTU4LDExMzMuNzUyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY1My44NCAtMTEyNC4xKSIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9nPjwvc3ZnPg=="
                  alt="icon"
                />
                <p style={{ color: "#fff" }}>2500 Contacts</p>
              </div>
            </div>
            <button>Sign Up</button>
          </div>
        </div>
        <div className={style.card}>
          <div
            style={{ background: "linear-gradient(0deg,#fe6370,#f3c27e)" }}
            className={style.cardTitle}
          >
            <h1>Pro</h1>
          </div>
          <div className={style.cardContent}>
            <div className={style.cardContentTitle}>
              <h1>$249</h1>
              <p>/month</p>
            </div>
            <div className={style.cardInfoContainer}>
              <div className={style.cardInfo}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyBpZD0iR3JvdXBfMjM4MSIgZGF0YS1uYW1lPSJHcm91cCAyMzgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjUuMjY3IiBoZWlnaHQ9IjI0LjkzNSIgdmlld0JveD0iMCAwIDI1LjI2NyAyNC45MzUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB5MT0iMC41IiB4Mj0iMSIgeTI9IjAuNSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzJiZGEyOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzEzZWJlZSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGlkPSJQYXRoXzkzMyIgZGF0YS1uYW1lPSJQYXRoIDkzMyIgZD0iTTY2Ni40NzMsMTEyNC4xYTEyLjc1MiwxMi43NTIsMCwwLDAtNi41MTksMS43ODcsMTIuNjY3LDEyLjY2NywwLDEsMCw2LjUxOS0xLjc4N1ptNy4wODQsOS42NTItNy43NTgsOS40OTFhMS41MDYsMS41MDYsMCwwLDEtMi4xNzMuMTUzbC00LjA5NC0zLjc4YTEuNSwxLjUsMCwwLDEtLjA5LTIuMTFsLjItLjIwNmExLjQ5MSwxLjQ5MSwwLDAsMSwyLjExLS4wODFsMS41NDQsMS40MjhhMS41LDEuNSwwLDAsMCwyLjE2NC0uMTUzbDUuNTc2LTYuODA2YTEuNSwxLjUsMCwwLDEsMi4xLS4yMTZsLjIxNS4xNzlBMS40OTQsMS40OTQsMCwwLDEsNjczLjU1OCwxMTMzLjc1MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTMuODQgLTExMjQuMSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+PC9zdmc+"
                  alt="icon"
                />
                <p>Unlimited Users</p>
              </div>
              <div className={style.cardInfo}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyBpZD0iR3JvdXBfMjM4MSIgZGF0YS1uYW1lPSJHcm91cCAyMzgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjUuMjY3IiBoZWlnaHQ9IjI0LjkzNSIgdmlld0JveD0iMCAwIDI1LjI2NyAyNC45MzUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB5MT0iMC41IiB4Mj0iMSIgeTI9IjAuNSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzJiZGEyOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzEzZWJlZSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGlkPSJQYXRoXzkzMyIgZGF0YS1uYW1lPSJQYXRoIDkzMyIgZD0iTTY2Ni40NzMsMTEyNC4xYTEyLjc1MiwxMi43NTIsMCwwLDAtNi41MTksMS43ODcsMTIuNjY3LDEyLjY2NywwLDEsMCw2LjUxOS0xLjc4N1ptNy4wODQsOS42NTItNy43NTgsOS40OTFhMS41MDYsMS41MDYsMCwwLDEtMi4xNzMuMTUzbC00LjA5NC0zLjc4YTEuNSwxLjUsMCwwLDEtLjA5LTIuMTFsLjItLjIwNmExLjQ5MSwxLjQ5MSwwLDAsMSwyLjExLS4wODFsMS41NDQsMS40MjhhMS41LDEuNSwwLDAsMCwyLjE2NC0uMTUzbDUuNTc2LTYuODA2YTEuNSwxLjUsMCwwLDEsMi4xLS4yMTZsLjIxNS4xNzlBMS40OTQsMS40OTQsMCwwLDEsNjczLjU1OCwxMTMzLjc1MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTMuODQgLTExMjQuMSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+PC9zdmc+"
                  alt="icon"
                />
                <p>10000 Contacts</p>
              </div>
            </div>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingFirstShowcase
