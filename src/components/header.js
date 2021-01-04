import React, { useState } from "react"
import styles from "./header.module.scss"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const getDropdowns = graphql`
  {
    vendorsContent: contentfulDropdown(
      contentful_id: { eq: "5RaYF3uyojgbGaG46Pl3fF" }
    ) {
      title
      paragraph {
        paragraph
      }
    }
    salesContent: contentfulDropdown(
      contentful_id: { eq: "7aLxuwcjW3AirnL9gUs9mG" }
    ) {
      title
      paragraph {
        paragraph
      }
    }
    agenciesContent: contentfulDropdown(
      contentful_id: { eq: "1k87VvwdOsilNXlWdlNSnj" }
    ) {
      title
      paragraph {
        paragraph
      }
    }
    managerContent: contentfulDropdown(
      contentful_id: { eq: "49ab3uC5ucE2pxmcKnJfED" }
    ) {
      title
      paragraph {
        paragraph
      }
    }
    marketingContent: contentfulDropdown(
      contentful_id: { eq: "67DU7T3q2jgYJUCrb73qQO" }
    ) {
      title
      paragraph {
        paragraph
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(getDropdowns)
  const [mobileNav, setMobileNav] = useState(false)
  const [dropdownTitle, setDropdownTItle] = useState(data.salesContent.title)
  const [dropdownP, setDropdownP] = useState(
    data.salesContent.paragraph.paragraph
  )
  const [dropdownBg, setDropdownBg] = useState(
    "linear-gradient(to right, #ee9ca7, #ffdde1)"
  )

  const showMobileNav = () => {
    setMobileNav(prev => !prev)
    document.body.classList.toggle("disable-scroll")
  }
  const hideMobileNav = () => {
    setMobileNav(false)
    document.body.className = ""
  }

  const salesContent = () => {
    setDropdownTItle(data.salesContent.title)
    setDropdownP(data.salesContent.paragraph.paragraph)
    setDropdownBg("linear-gradient(to right, #6441a5, #2a0845)")
  }

  const marketingContent = () => {
    setDropdownTItle(data.marketingContent.title)
    setDropdownP(data.marketingContent.paragraph.paragraph)
    setDropdownBg("linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)")
  }
  const managerContent = () => {
    setDropdownTItle(data.managerContent.title)
    setDropdownP(data.managerContent.paragraph.paragraph)
    setDropdownBg(" linear-gradient(to right, #f12711, #f5af19)")
  }
  const agenciesContent = () => {
    setDropdownTItle(data.agenciesContent.title)
    setDropdownP(data.agenciesContent.paragraph.paragraph)
    setDropdownBg("linear-gradient(to right, #ff416c, #ff4b2b)")
  }
  const vendorsContent = () => {
    setDropdownTItle(data.vendorsContent.title)
    setDropdownP(data.vendorsContent.paragraph.paragraph)
    setDropdownBg("linear-gradient(to right, #ee9ca7, #ffdde1)")
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <h1>
            <Link to="/">Candy</Link>
          </h1>
          <li className={styles.dropdown}>
            <Link to="/">Features</Link>
            <div className={styles.dropdownShow}>
              <ul className={styles.linkDiv}>
                <li onMouseEnter={salesContent}>Sales</li>
                <li onMouseEnter={marketingContent}>Marketing</li>
                <li onMouseEnter={managerContent}>Manager</li>
                <li onMouseEnter={agenciesContent}>Agencies</li>
                <li onMouseEnter={vendorsContent}>Vendors</li>
              </ul>
              <div className={styles.linkDivContent}>
                <h1>{dropdownTitle}</h1>
                <p>{dropdownP}</p>
                <button>Learn More</button>
                <div
                  style={{ background: `${dropdownBg}` }}
                  className={styles.dropdownBg}
                ></div>
              </div>
            </div>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/">Reviews</Link>
          </li>
        </div>
        <div onClick={showMobileNav} className={styles.hamburger}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.firstBtn}>
            <Link to="/">Log in</Link>
          </button>
          <button>
            <Link to="/">Create Free Account</Link>
          </button>
        </div>
      </header>
      <ul className={mobileNav ? "showNav" : "hidden-nav"}>
        <h1 onClick={hideMobileNav}>X</h1>
        <li>
          <Link to="/">
            <p>*</p>Sales
          </Link>
        </li>
        <li>
          <Link to="/">
            <p>*</p>Marketing
          </Link>
        </li>
        <li>
          <Link to="/">
            <p>*</p>Managers
          </Link>
        </li>
        <li>
          <Link to="/">
            <p>*</p>Agencies
          </Link>
        </li>
        <li>
          <Link to="/">
            <p>*</p>Vendors
          </Link>
        </li>
        <li>
          <Link to="/pricing">
            <p>*</p>Pricing
          </Link>
        </li>
        <li>
          <Link to="/">
            <p>*</p>Reviews
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
