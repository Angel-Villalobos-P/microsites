import { Link } from "gatsby"
import React from "react"
import { renderHTML } from "../agility/utils"
import "./TwoColumnsAndBlackbox.scss"

const TwoColumnsAndBlackbox = ({ item }) => {
  const customFields = item !== undefined ? item.item.fields : null

  const CTA = () => {
    const buttonStyleClass = customFields?.buttonStyle?.fields.cSSClass

    return (
      // <Link
      //   className={`btn ${buttonStyleClass}`}
      //   to={customFields?.cTALink.href}
      // >
      //   {customFields?.cTALink.text}
      // </Link>
      <a
        className={`btn ${buttonStyleClass}`}
        href={customFields?.cTALink.href}
      >
        {" "}
        {customFields?.cTALink.text}
      </a>
    )
  }
  const BoxCTA = () => {
    const boxButtonStyleClass = customFields?.boxButtonStyle?.fields.cSSClass

    const handleScrollToPlans = () => {
      if (typeof window === `undefined`) return
      if (document.querySelector(".table-block")) {
        window.scrollTo({
          top: document.querySelector(".table-block").offsetTop,
          behavior: "smooth",
        })
      }
    }

    return (
      <button
        className={`btn ${boxButtonStyleClass} cta`}
        onClick={handleScrollToPlans}
      >
        {customFields.cTAPlansLink.text}
      </button>
    )
  }

  return (
    <section className="tc-cont-blackbox">
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          <div className="col-12 col-md-6">
            <div className="list-wrapper">
              <span className="headline-line"></span>
              <p className="left-text-title">{customFields.title}</p>
              <p className="left-text-introduction">
                {customFields.introduction}
              </p>
              <p className="left-text-subtitle">{customFields.subtitle}</p>
              {/* <p className="left-text-description">
                {customFields.description}
              </p> */}
              <div
                className="left-text-description"
                dangerouslySetInnerHTML={renderHTML(customFields.description)}
              />
              <CTA />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="list-wrapper box-wrapper d-flex justify-content-end">
              <div className="box">
                <p data-text="Plans" className="box-text">
                  {customFields.text}
                </p>
                <BoxCTA />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoColumnsAndBlackbox
