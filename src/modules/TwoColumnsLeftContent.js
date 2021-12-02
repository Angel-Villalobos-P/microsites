import React from "react"
import { Link } from "gatsby"
import { renderHTML } from "../agility/utils"
import "./TwoColumnsLeftContent.scss"

const TwoColumnsLeftContent = ({ item }) => {
  const customFields = item !== undefined ? item.item.fields : null

  const CTA = () => {
    const buttonStyleClass = customFields?.buttonStyle?.fields.cSSClass

    return (
      <Link
        className={`btn ${buttonStyleClass}`}
        to={customFields?.cTALink?.href}
      >
        {customFields?.cTALink?.text}
      </Link>
    )
  }

  return (
    <section className="tc-left-content">
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          <div className="col-12 col-6 col-md-6">
            <div className="list-wrapper">
              <span className="headline-line"></span>
              <p className="left-text-title">{customFields?.title}</p>
              <div
                className="left-textBlock"
                dangerouslySetInnerHTML={renderHTML(customFields?.textBlock)}
              />
              <CTA />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoColumnsLeftContent
