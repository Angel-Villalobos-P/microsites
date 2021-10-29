import * as React from "react"
import PropTypes from "prop-types"
// import "./layout.css"
import GlobalMicrositeHeader from "./GlobalMicrositeHeader"
import GlobalMicrositeFooter from "./GlobalMicrositeFooter"

const Layout = ({ children }) => {
  return (
    <>
      <div className="pixel506">
        <GlobalMicrositeHeader />
        <main>{children}</main>
        <GlobalMicrositeFooter/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
