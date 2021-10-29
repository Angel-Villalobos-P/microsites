import React from "react"
import { Link } from "gatsby"
import "./CTAFooter.scss"

const CTAFooter = ({ item }) => {
  const customFields = item !== undefined ? item.item.fields : null

  const CTA = () => {
    const buttonStyleClass = customFields?.buttonStyle?.fields?.cSSClass

    if (customFields?.cTAScrollToForm && customFields?.cTALink?.href) {
      return (
        <Link
          className={`btn footer-cta ${buttonStyleClass}`}
          to={customFields?.cTALink.href}
        >
          {customFields?.cTALink.text}
        </Link>
      )
    }

    return (
      <button
        className={`btn footer-cta ${
          customFields?.backgroundColor === "black" ? "" : "black"
        } ${buttonStyleClass}`}
      >
        {customFields?.cTALink?.text}
      </button>
    )
  }

  return (
    <section>
      {/* <styles>{styles}</styles> */}
      <div className="cta-footer d-flex align-items-center">
        <div className="container-fluid">
          <div className="row justify-content-sm-center">
            <div className="col-8 ">
              <div className="cta-text">{customFields?.cTAText}</div>
            </div>
            <div className="col-4 p-0">
              <div className="lines-image d-flex justify-content-center">
                <img src={customFields?.image ? customFields?.image?.url : ""} />
              </div>
            </div>
            <div className="col-12">
              <CTA />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTAFooter
