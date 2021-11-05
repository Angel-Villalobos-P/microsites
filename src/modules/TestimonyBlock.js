import React from "react"
import { renderHTML } from "../agility/utils"
import { Link } from "gatsby"
import "./TestimonyBlock.scss"

const TestimonyBlock = ({ item }) => {
//   const customFields = item.customFields
  const customFields = item !== undefined ? item.item.fields : null


  const CTA = () => {
    if (customFields?.cTAScrollToForm && !customFields.cTALink) return null

    if (customFields?.cTAScrollToForm && customFields.cTALink.href) {
      const buttonStyleClass = customFields.buttonStyle.customFields.cSSClass
        ? customFields.buttonStyle.customFields.cSSClass
        : "btn-primary-white"

      return (
        <Link
          className={`btn ${buttonStyleClass}`}
          to={customFields.cTALink.href}
        >
          {customFields.cTALink.text}
        </Link>
      )
    }

    if (customFields?.cTAScrollToForm && !customFields?.cTALink.href) {
      const buttonStyleClass = customFields?.buttonStyle.fields.cSSClass
        ? customFields?.buttonStyle.fields.cSSClass
        : "btn-primary-white"

      const handleScrollToForm = () => {
        if (typeof window === `undefined`) return
        if (document.querySelector(".form-section")) {
          window.scrollTo({
            top: document.querySelector(".form-section").offsetTop,
            behavior: "smooth",
          })
        }
      }

      return (
        <button
          className={`btn ${
            customFields.backgroundColor === "black" ? "" : "black"
          } ${buttonStyleClass}`}
          onClick={handleScrollToForm}
        >
          {customFields.cTALink.text}
        </button>
      )
    }

    if (!customFields?.cTAScrollToForm && customFields?.cTALink) {
      const buttonStyleClass = customFields.buttonStyle.fields.cSSClass
        ? customFields?.buttonStyle.fields.cSSClass
        : "btn-primary-white"

      return (
        <Link
          className={`btn ${buttonStyleClass}`}
          to={customFields.cTALink.href}
        >
          {customFields.cTALink.text}
        </Link>
      )
    }

    return null
  }

  return (
    <section className="testimony-block">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-6 col-md-6 col-sm-12 col-12">
            <div className="wrapper">
              <span className="headline-line" />
              <h2 className="title">{customFields?.title}</h2>
              <p className="text">{customFields?.text}</p>
              {/* <CTA /> */}
            </div>
          </div>
          <div className="col-6 col-md-6 col-sm-12 col-12">
            <div
              className="testimony"
              dangerouslySetInnerHTML={renderHTML(customFields?.testimony)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <CTA />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonyBlock
