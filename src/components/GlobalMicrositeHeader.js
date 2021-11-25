import React from "react"
// import SVG from "./SVG"
import { Link } from "gatsby"
import "./GlobalMicrositeHeader.scss"
import LogoPixel from "../images/logo.svg"

/**
 * Renders the logo using the SVG component.
 * @function Logo
 */
const Logo = () => {
  return (
    <Link
      to="/"
      className="logo"
      aria-label="Pixel506 Logo, click to navigate to the Homepage"
    >
      {/* <SVG name="pixel-logo" width="120" height="30"></SVG> */}
      <LogoPixel />
    </Link>
  )
}

/**
 * Component to render the microsite global header
 * @function MicrositeGlobalHeader
 */

const GlobalMicrositeHeader = () => {
  return (
    <header className="px-header">
      <nav
        aria-label="Fixed to viewport when scrolling upwards Navigation menu."
        className="px-header-nav fixed"
      ></nav>
      <nav
        aria-label="Top document navigation menu."
        className={`px-header-nav`}
      >
        <div className="px-header-nav">
          <ul className="px-header-nav justify-content-space-between">
            <li>
              <Logo />
            </li>
            <li>
              <Link className="ppc m-3" to="/ppc-plans">
                PPC Plans
              </Link>
              <Link className="seo m-3" to="/seo-services-plans">
                SEO Plans
              </Link>
              <div className="dropdown">
                <button className="item-list-name">Who we are</button>
                <div className="dropdown-content">
                  {/* <Link to="/insights">Content library</Link> */}
                  {/* <Link to="#">Reviews</Link> */}
                  <Link to="/contact-us">Contact info</Link>
                  <Link to="/contact-us">About us</Link>
                  <Link to="/careers">Careers</Link>
                  <Link className="movil" to="/ppc-plans">
                    PPC Plans
                  </Link>
                  <Link className="movil" to="/seo-services-plans">
                    SEO PPC
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default GlobalMicrositeHeader
