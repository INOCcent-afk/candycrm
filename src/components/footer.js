import React from "react"
import style from "./footer.module.scss"

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <footer>
        <ul>
          <p>Contact Us</p>
          <li>101 E Park Blvd. Suite 101</li>
          <li>Plano, TX 75074</li>
          <li>Phone: (214) 299-7399</li>
          <ul>
            <p className={style.logo}>honey</p>
            <li>Copyright @ 2020 Honey LLC.</li>
          </ul>
        </ul>
        <ul>
          <p>Software Use</p>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
        <ul>
          <p>Site Map</p>
          <li>Home</li>
          <li>Sales</li>
          <li>Marketing</li>
          <li>Managers</li>
          <li>Agencies</li>
          <li>Vendors</li>
          <li>Pricing</li>
          <li>Log In</li>
          <li>Create Free Account</li>
        </ul>
        <ul>
          <p>Social Links</p>
          <div className={style.socialdiv}>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMi41MSIgaGVpZ2h0PSIyMi41MSIgdmlld0JveD0iMCAwIDIyLjUxIDIyLjUxIj4KICA8ZyBpZD0iR3JvdXBfMjUwOCIgZGF0YS1uYW1lPSJHcm91cCAyNTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNzM3LjgzMiAtMzUyNC41NjIpIj4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfODAiIGRhdGEtbmFtZT0iRWxsaXBzZSA4MCIgY3g9IjkuOTMyIiBjeT0iOS45MzIiIHI9IjkuOTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjczNi43OTIgMzUyNS44ODUpIiBmaWxsPSIjZmZmIi8+CiAgICA8ZyBpZD0iR3JvdXBfMjUwNyIgZGF0YS1uYW1lPSJHcm91cCAyNTA3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjczNy44MzIgMzUyNC41NjIpIj4KICAgICAgPHBhdGggaWQ9IlBhdGhfMTAwNCIgZGF0YS1uYW1lPSJQYXRoIDEwMDQiIGQ9Ik0tMjcyNi41OCwzNTI0LjU2MmExMS4yNTEsMTEuMjUxLDAsMCwwLTExLjI1MiwxMS4yNTIsMTEuMjUzLDExLjI1MywwLDAsMCwxMS4yNTIsMTEuMjU4LDExLjI1NywxMS4yNTcsMCwwLDAsMTEuMjU4LTExLjI1OEExMS4yNTYsMTEuMjU2LDAsMCwwLTI3MjYuNTgsMzUyNC41NjJabTMuMTA1LDYuODg4aC0xLjYzOGEuNjE2LjYxNiwwLDAsMC0uNjQyLjd2MS41MjJoMi4yNzFsLS4yNjMsMi41ODRoLTIuMDA4djcuMzU0aC0zLjA0NXYtNy4zNTRoLTEuNDQ2di0yLjU4OWgxLjQ0NlYzNTMyYTIuODUzLDIuODUzLDAsMCwxLDMuMDctMy4wN2wyLjI1Ni4wMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3MzcuODMyIC0zNTI0LjU2MikiIGZpbGw9IiMzYjU5OTgiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="
              alt="icon"
            />
            <p>Facebook</p>
          </div>
          <div className={style.socialdiv}>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMi43NjIiIGhlaWdodD0iMjIuNzY3IiB2aWV3Qm94PSIwIDAgMjIuNzYyIDIyLjc2NyI+CiAgPGcgaWQ9Ikdyb3VwXzI1MTEiIGRhdGEtbmFtZT0iR3JvdXAgMjUxMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjY4OC42MzIgLTM1MjQuMzEyKSI+CiAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzgxIiBkYXRhLW5hbWU9IkVsbGlwc2UgODEiIGN4PSI5LjkzNCIgY3k9IjkuOTM0IiByPSI5LjkzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2ODcuMTg1IDM1MjYuMTUyKSIgZmlsbD0iI2ZmZiIvPgogICAgPGcgaWQ9Ikdyb3VwXzI1MTAiIGRhdGEtbmFtZT0iR3JvdXAgMjUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2ODguNjMyIDM1MjQuMzEyKSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzEwMDUiIGRhdGEtbmFtZT0iUGF0aCAxMDA1IiBkPSJNLTI2NzcuMjUxLDM1MjQuMzEyYTExLjM4MiwxMS4zODIsMCwwLDAtMTEuMzgxLDExLjM4MSwxMS4zODMsMTEuMzgzLDAsMCwwLDExLjM4MSwxMS4zODYsMTEuMzg2LDExLjM4NiwwLDAsMCwxMS4zODEtMTEuMzg2QTExLjM4NSwxMS4zODUsMCwwLDAtMjY3Ny4yNTEsMzUyNC4zMTJabS0zLjAxLDE2Ljk5aC0yLjcyMXYtOC4xNzloMi43MjFabS0xLjM2MS05LjNoLS4wMTVhMS40MSwxLjQxLDAsMCwxLTEuNTA3LTEuNDE2LDEuNDIzLDEuNDIzLDAsMCwxLDEuNTQzLTEuNDExLDEuNDA5LDEuNDA5LDAsMCwxLDEuNTE3LDEuNDExQTEuNDE2LDEuNDE2LDAsMCwxLTI2ODEuNjIyLDM1MzIuMDA1Wm0xMS4xNjgsOS4zaC0yLjcyMXYtNC4zNzVjMC0xLjEtLjM4OS0xLjg1MS0xLjM3Ni0xLjg1MWExLjQ4NywxLjQ4NywwLDAsMC0xLjQsMSwxLjg1OCwxLjg1OCwwLDAsMC0uMDkxLjY2M3Y0LjU2N2gtMi43MjFzLjAzNi03LjQxNSwwLTguMTc5aDIuNzIxdjEuMTU4YTIuNywyLjcsMCwwLDEsMi40NTMtMS4zNTFjMS43OTEsMCwzLjEzMSwxLjE2OCwzLjEzMSwzLjY4MlptLTUuNTg0LTd2LS4wMjVjLS4wMDUuMDEtLjAxLjAxNS0uMDE1LjAyNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2ODguNjMyIC0zNTI0LjMxMikiIGZpbGw9IiMwMDdhYjkiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="
              alt="icon"
            />
            <p>LinkedIn</p>
          </div>
          <div className={style.socialdiv}>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjIuNzYyIiBoZWlnaHQ9IjIyLjc2MiIgdmlld0JveD0iMCAwIDIyLjc2MiAyMi43NjIiPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIwLjI1IiB5MT0iMC45MzMiIHgyPSIwLjc1IiB5Mj0iMC4wNjciIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjJiZDVmIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMC41MDkiIHN0b3AtY29sb3I9IiNkNTM0NzciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNmY1ZmE4Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBpZD0iR3JvdXBfMjUxMiIgZGF0YS1uYW1lPSJHcm91cCAyNTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDg2LjM0MiAtMzUyNC4wOTIpIj4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfODIiIGRhdGEtbmFtZT0iRWxsaXBzZSA4MiIgY3g9IjEwLjQ1MiIgY3k9IjEwLjQ1MiIgcj0iMTAuNDUyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQ4NS40MTMgMzUyNS4wMTkpIiBmaWxsPSIjZmZmIi8+CiAgICA8cGF0aCBpZD0iUGF0aF8xMDA2IiBkYXRhLW5hbWU9IlBhdGggMTAwNiIgZD0iTS0yNDc0Ljk2NCwzNTI0LjA5MmExMS4zNzcsMTEuMzc3LDAsMCwwLTExLjM3OCwxMS4zNzgsMTEuMzc4LDExLjM3OCwwLDAsMCwxMS4zNzgsMTEuMzg0LDExLjM3OSwxMS4zNzksMCwwLDAsMTEuMzg0LTExLjM4NEExMS4zNzgsMTEuMzc4LDAsMCwwLTI0NzQuOTY0LDM1MjQuMDkyWm03LjM2NiwxNC4xNjdhNC41NzIsNC41NzIsMCwwLDEtNC41NzcsNC41NzFoLTUuNTcyYTQuNTcyLDQuNTcyLDAsMCwxLTQuNTc3LTQuNTcxdi01LjU3MmE0LjU3Nyw0LjU3NywwLDAsMSw0LjU3Ny00LjU3N2g1LjU3MmE0LjU3Niw0LjU3NiwwLDAsMSw0LjU3Nyw0LjU3N1ptLTQuNTc3LTkuMDg0aC01LjU3MmEzLjUxNiwzLjUxNiwwLDAsMC0zLjUxMywzLjUxMnY1LjU3MmEzLjUxMiwzLjUxMiwwLDAsMCwzLjUxMywzLjUwN2g1LjU3MmEzLjUxMSwzLjUxMSwwLDAsMCwzLjUxMi0zLjUwN3YtNS41NzJBMy41MTYsMy41MTYsMCwwLDAtMjQ3Mi4xNzUsMzUyOS4xNzVabS0yLjc4OSw5LjY1NGEzLjM1NCwzLjM1NCwwLDAsMS0zLjM1My0zLjM1OCwzLjM1MiwzLjM1MiwwLDAsMSwzLjM1My0zLjM1MywzLjM1MywzLjM1MywwLDAsMSwzLjM1OCwzLjM1M0EzLjM1NSwzLjM1NSwwLDAsMS0yNDc0Ljk2NCwzNTM4LjgyOVptMy43NjgtNi4yNDhhLjgzOS44MzksMCwwLDEtLjg0MS0uODQxLjg0My44NDMsMCwwLDEsLjg0MS0uODQxLjgzOS44MzksMCwwLDEsLjg0MS44NDFBLjgzNi44MzYsMCwwLDEtMjQ3MS4yLDM1MzIuNTgxWm0tMS40NzQsMi44OWEyLjI5NCwyLjI5NCwwLDAsMS0yLjI5NCwyLjI5NCwyLjI5MywyLjI5MywwLDAsMS0yLjI4OC0yLjI5NCwyLjI5MiwyLjI5MiwwLDAsMSwyLjI4OC0yLjI4OEEyLjI5MywyLjI5MywwLDAsMS0yNDcyLjY3LDM1MzUuNDdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz4KICA8L2c+Cjwvc3ZnPgo="
              alt="icon"
            />
            <p>Instagram</p>
          </div>
          <div className={style.socialdiv}>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMi43NjEiIGhlaWdodD0iMjIuNzYxIiB2aWV3Qm94PSIwIDAgMjIuNzYxIDIyLjc2MSI+CiAgPGcgaWQ9Ikdyb3VwXzI1MTMiIGRhdGEtbmFtZT0iR3JvdXAgMjUxMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYzOC45NDggLTM1MjQuNTYyKSI+CiAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzgzIiBkYXRhLW5hbWU9IkVsbGlwc2UgODMiIGN4PSIxMC40ODIiIGN5PSIxMC40ODIiIHI9IjEwLjQ4MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2MzguMjI4IDM1MjUuNzQ1KSIgZmlsbD0iI2ZmZiIvPgogICAgPHBhdGggaWQ9IlBhdGhfMTAwNyIgZGF0YS1uYW1lPSJQYXRoIDEwMDciIGQ9Ik0tMjYyNy41NjcsMzUyNC41NjJhMTEuMzgxLDExLjM4MSwwLDAsMC0xMS4zODEsMTEuMzgsMTEuMzgyLDExLjM4MiwwLDAsMCwxMS4zODEsMTEuMzgsMTEuMzgxLDExLjM4MSwwLDAsMCwxMS4zODEtMTEuMzhBMTEuMzgxLDExLjM4MSwwLDAsMC0yNjI3LjU2NywzNTI0LjU2MlptNS42MTMsOS41ODdjMCwuMTE2LjAwOC4yMzMuMDA4LjM1MWE3LjY4Niw3LjY4NiwwLDAsMS03LjczOSw3LjczOSw3LjcsNy43LDAsMCwxLTQuMTctMS4yMjEsNS43LDUuNywwLDAsMCwuNjQ5LjAzOSw1LjQ2OCw1LjQ2OCwwLDAsMCwzLjM3OC0xLjE2NSwyLjcyMywyLjcyMywwLDAsMS0yLjU0LTEuODkxLDIuNjQ1LDIuNjQ1LDAsMCwwLC41MTEuMDQ5LDIuNjgxLDIuNjgxLDAsMCwwLC43MTYtLjEsMi43MiwyLjcyLDAsMCwxLTIuMTgxLTIuNjY3di0uMDM0YTIuNjgsMi42OCwwLDAsMCwxLjIzMS4zNCwyLjcxNSwyLjcxNSwwLDAsMS0xLjIwOS0yLjI2NCwyLjcxNCwyLjcxNCwwLDAsMSwuMzY3LTEuMzY3LDcuNzI1LDcuNzI1LDAsMCwwLDUuNjA3LDIuODQyLDIuNjkyLDIuNjkyLDAsMCwxLS4wNzEtLjYxOSwyLjcyLDIuNzIsMCwwLDEsMi43Mi0yLjcyLDIuNzIyLDIuNzIyLDAsMCwxLDEuOTg2Ljg1OCw1LjQ2MSw1LjQ2MSwwLDAsMCwxLjcyOC0uNjU5LDIuNzM4LDIuNzM4LDAsMCwxLTEuMiwxLjUwNSw1LjUsNS41LDAsMCwwLDEuNTYzLS40MjhBNS41MTgsNS41MTgsMCwwLDEtMjYyMS45NTQsMzUzNC4xNDlaIiBmaWxsPSIjNTVhY2VlIi8+CiAgPC9nPgo8L3N2Zz4K"
              alt="icon"
            />
            <p>Twitter</p>
          </div>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
