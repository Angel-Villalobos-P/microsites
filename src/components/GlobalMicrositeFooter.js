import React from "react"
import { Link } from "gatsby"
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
          <div className="col-12 col-md-6 d-flex flex-column mb-sm-5 justify-content-center">
            <div className="d-flex w-100 justify-content-center justify-content-sm-start order-1 order-sm-3">
              <LogoSlogan />
            </div>
            {/* <p className="subscribe-title order-sm-1 order-2 mb-sm-4">
              {customFields?.subscribeTitle}
            </p> */}
            {/* <div className="subscribe-wrapper order-3 order-sm-2 mb-sm-4">
              <Subscribe {...subscribeFormData} />
            </div> */}
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-sm-end align-items-sm-end mb-sm-5">
            <a className="info-details" href="mailto:contact@pixel506.com">contact@pixel506.com</a>
            <a className="info-details" href="tel:+16462846828">+1 (646) 284 6828</a>
            <a className="info-details" href="tel:+16462846818">+1 (646) 284 6818</a>
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
                  href="https://www.facebook.com/pixel506"
                  rel="noopener"
                  // target={customFields?.facebookUrl?.target}
                  aria-label="Pixel506 Facebook page (Opens a new Window)."
                >
                  <Facebook />
                </a>
              </li>
              <li className="social-links__item">
                <a
                  href="https://www.instagram.com/pixel506official/"
                  // rel="noopener"
                  // target={customFields?.instagramUrl?.target}
                  aria-label="Pixel506 Instagram page (Opens a new Window)."
                >
                  <Instagram />
                </a>
              </li>
              <li className="social-links__item">
                <a
                  href="https://www.youtube.com/channel/UCGaR5CY3HA_2CcGkhYbZQ5Q/featured"
                  rel="noopener"
                  // target={customFields?.youtubeUrl?.target}
                  aria-label="Pixel506 Youtube page (Opens a new Window)."
                >
                  <Youtube />
                </a>
              </li>
              <li className="social-links__item">
                <a
                  href="https://twitter.com/Pixel506"
                  rel="noopener"
                  // target={customFields?.twitterUrl?.target}
                  aria-label="Pixel506 Twitter page (Opens a new Window)."
                >
                  <Twitter />
                </a>
              </li>
              <li className="social-links__item">
                <a
                  href="https://www.linkedin.com/company/pixel506/"
                  rel="noopener"
                  // target={customFields?.linkedInUrl?.target}
                  aria-label="Pixel506 LinkedIn page (Opens a new Window)."
                >
                  <LinkedIN />
                </a>
              </li>
            </ul>
          </div>
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
