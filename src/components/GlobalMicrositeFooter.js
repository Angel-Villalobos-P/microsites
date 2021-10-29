import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Subscribe from "./Subscribe"
import "./GlobalMicrositeFooter.scss"
import LogoSlogan from "../images/logo-slogan.svg"
import Facebook from "../images/Facebook.svg"
import Instagram from "../images/Instagram.svg"
import Youtube from "../images/Youtube.svg"
import Twitter from "../images/Twitter.svg"
import LinkedIN from "../images/LinkedIN.svg"

/**
 * Component to render the footer.
 * @function GlobalFooter
 */
const GlobalMicrositeFooter = () => {
  const [content, setcontent] = useState({})

  useEffect(() => {
    fetch("/.netlify/functions/footerContent")
      .then(res => res.json())
      .then(data => setcontent(data.response))
  }, [])

  const customFields = content?.fields
  const subscribeFormData = {
    label: customFields?.subscribeFormLabel,
    btnTxt: customFields?.subscribeSubmitButtonText,
  }
  const route = {
    hash: "",
    host: "performance.pixel506.com",
    hostname: "performance.pixel506.com",
    href: "https://performance.pixel506.com/",
    key: "initial",
    origin: "https://performance.pixel506.com",
    pathname: "/home-seo-ppc",
    port: "",
    protocol: "https:",
    search: "",
    state: null,
  }

  /**
   * Loops trough the links and returns an array of JSX elements.
   * @function renderLinks
   */

  const renderLinks = () => {
    const links = []

    const menuLinks = [
      {
        menuText: "Services",
        path: "/services",
      },
      {
        menuText: "Case Studies",
        path: "/case-studies",
      },
      {
        menuText: "Who Is Pixel",
        path: "/about-us",
      },
      {
        menuText: "Insights",
        path: "/insights",
      },
      {
        menuText: "Podcasts",
        path: "/podcasts",
      },
      {
        menuText: "Insights",
        path: "/insights",
      },
      {
        menuText: "Careers",
        path: "/careers",
      },
      {
        menuText: "Let's Talks",
        path: "/contact-us",
      },
      {
        menuText: "Nearshore",
        path: "/nearshore",
      },
    ]

    const url = typeof window !== "undefined" ? window.location.href : ""
    menuLinks.forEach(node => {
      links.push(
        <li
          className={`nav-links__item ${
            // node.path === route.pathname ? "active" : ""
            node.path === url ? "active" : ""
          }`}
          // key={node?.pageID}
        >
          <Link to={node.path}>{node.menuText}</Link>
        </li>
      )
    })

    links.push(
      <li
        key={"sitemap"}
        className={`nav-links__item ${
          "/sitemap" === route.pathname ? "active" : ""
        }`}
      >
        <Link to={"/sitemap"}>Sitemap</Link>
      </li>
    )
    links.push(
      <li
        key={"privacy-policy"}
        className={`nav-links__item ${
          "/privacy-policy" === route.pathname ? "active" : ""
        }`}
      >
        <Link to={"/privacy-policy"}>Privacy Policy</Link>
      </li>
    )
    return links
  }

  /**
   * Footer  JS rendering.
   */

  return (
    <footer>
      <div className="container-fluid">
        <div className="row justify-content-sm-center">
          <div className="col-12 col-md-6 d-flex flex-column mb-sm-5">
            <div className="d-flex w-100 justify-content-center justify-content-sm-start order-1 order-sm-3">
              <LogoSlogan />
            </div>
            <p className="subscribe-title order-sm-1 order-2 mb-sm-4">
              {customFields?.subscribeTitle}
            </p>
            <div className="subscribe-wrapper order-3 order-sm-2 mb-sm-4">
              <Subscribe {...subscribeFormData} />
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-sm-end align-items-sm-end mb-sm-5">
            <p className="info-details">{customFields?.featuredEmailAddress}</p>
            <p className="info-details">{customFields?.contactNumberOne}</p>
            <p className="info-details">{customFields?.contactNumberTwo}</p>
            <nav className="d-sm-none">
              <ul className="mobile-nav">
                <li
                  key={"sitemap"}
                  className={`nav-links__item mb-3 ${
                    "/sitemap" === route.pathname ? "active" : ""
                  }`}
                >
                  <Link to={"/sitemap"}>Sitemap</Link>
                </li>
                <li
                  key={"privacy-policy"}
                  className={`nav-links__item ${
                    "/privacy-policy" === route.pathname ? "active" : ""
                  }`}
                >
                  <Link to={"/privacy-policy"}>Privacy Policy</Link>
                </li>
              </ul>
            </nav>
            <ul className="social-links mt-sm-3">
              <li className="social-links__item">
                <a
                  href={customFields?.facebookUrl?.href}
                  rel="noopener"
                  target={customFields?.facebookUrl?.target}
                  aria-label="Pixel506 Facebook page (Opens a new Window)."
                >
                  <Facebook />
                </a>
              </li>
              <li className="social-links__item">
                <a
                  href={customFields?.instagramUrl?.href}
                  rel="noopener"
                  target={customFields?.instagramUrl?.target}
                  aria-label="Pixel506 Instagram page (Opens a new Window)."
                >
                  <Instagram />
                </a>
              </li>
              <li className="social-links__item">
                <a
                  href={customFields?.youtubeUrl?.href}
                  rel="noopener"
                  target={customFields?.youtubeUrl?.target}
                  aria-label="Pixel506 Youtube page (Opens a new Window)."
                >
                  <Youtube />
                </a>
              </li>
              <li className="social-links__item">
                <a
                  href={customFields?.twitterUrl?.href}
                  rel="noopener"
                  target={customFields?.twitterUrl?.target}
                  aria-label="Pixel506 Twitter page (Opens a new Window)."
                >
                  <Twitter />
                </a>
              </li>
              <li className="social-links__item">
                <a
                  href={customFields?.linkedInUrl?.href}
                  rel="noopener"
                  target={customFields?.linkedInUrl?.target}
                  aria-label="Pixel506 LinkedIn page (Opens a new Window)."
                >
                  <LinkedIN />
                </a>
              </li>
            </ul>
          </div>
          {/* <nav
            aria-label="Footer navigation."
            className="d-none d-md-flex col-lg-8 mb-sm-5"
          >
            <ul className="nav-links w-100 d-flex justify-content-between align-items-center">
              {renderLinks()}
            </ul>
          </nav> */}
          <div className="col-12 col-sm-12">
            <p className="copyright">
              &#169; PIXEL506, LLC. ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default GlobalMicrositeFooter
