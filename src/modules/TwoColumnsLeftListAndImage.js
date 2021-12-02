import React from "react"
import { Link } from "gatsby"
import "./TwoColumnsLeftListAndImage.scss"
import { renderHTML } from "../agility/utils"

const TwoColumnsLeftListAndImage = ({ item }) => {
  const customFields = item !== undefined ? item.item.fields : null
  const listItems = customFields?.listItems

  const CTA = () => {
    const buttonStyleClass = customFields?.buttonStyle?.fields?.cSSClass
      ? customFields?.buttonStyle?.fields?.cSSClass
      : "btn-primary-white"

    if (customFields?.cTALink && customFields?.cTALink?.href) {
      return (
        <Link
          className={`btn ${buttonStyleClass} mb-5`}
          to={customFields?.cTALink?.href}
        >
          {customFields?.cTALink?.text}
        </Link>
      )
    }
    return null
  }

  return (
    <section
      className={`tc-left-list-img background-${customFields?.backgroundColor}`}
    >
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="list-wraper">
              <span className="headline-line"></span>
              <p className="left-text-title">{customFields?.title}</p>
              {/* <p className="left-textBlock">{customFields?.textblock}</p> */}
              <div
                className="left-textBlock"
                dangerouslySetInnerHTML={renderHTML(customFields?.textblock)}
              />
              {customFields?.image ? (
                <ul>
                  {listItems.map((item, index) => {
                    return <li key={index}>{item?.fields?.name}</li>
                  })}
                </ul>
              ) : null}
              {/* <CTA /> */}
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="list-wraper">
              {!customFields?.image ? (
                <ul>
                  {listItems?.map((item, index) => {
                    return <li key={index}>{item?.fields?.name}</li>
                  })}
                </ul>
              ) : (
                <img
                  className="image"
                  src={customFields?.image ? customFields?.image?.url : ""}
                />
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center m-100">
            <CTA />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoColumnsLeftListAndImage
