import React from "react"
// import SVG from "../components/SVG"
import "./GridListing.scss"
import { renderHTML } from "./../agility/utils"
import { isSingleDigit } from "./../agility/helpers"
import { Link } from "gatsby"
import Dotted from "../images/dotted.svg"

const GridListing = ({ item }) => {
  const customFields = item !== undefined ? item.item.fields : null
  const moduleColor = customFields?.moduleColor?.fields?.hexadecimalValue
  const topText = customFields?.topText ? customFields?.topText : null
  const bottomText = customFields?.buttomText ? customFields?.buttomText : null

  const items = customFields?.listItems?.map((item, key) => {
    const humanIndex = key + 1
    return {
      ...item.fields,
      color: moduleColor,
      number: isSingleDigit(humanIndex) ? `0${key + 1}` : `${key + 1}`,
    }
  })
  const CTA = () => {
    // if (customFields?.cTAScrollToForm && !customFields?.cTALink) return null

    if (customFields?.cTAScrollToForm && customFields?.cTALink?.href) {
      const buttonStyleClass = customFields?.buttonStyle?.fields.cSSClass
        ? customFields?.buttonStyle.fields.cSSClass
        : "btn-primary-white"

      return (
        <Link
          className={`btn ${buttonStyleClass}`}
          to={customFields?.cTALink?.href}
        >
          {customFields?.cTALink?.text}
        </Link>
      )
    }

    if (customFields?.cTAScrollToForm && !customFields?.cTALink?.href) {
      const buttonStyleClass = customFields?.buttonStyle?.fields.cSSClass
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
          {customFields?.cTALink?.text}
        </button>
      )
    }

    return null
  }

  const GridItem = ({ props }) => {
    const lgClass = items.length > 4 ? "" : "col-lg-3"

    console.log(items.length>4);

    return (
      // <div className={"col-12 col-sm-6 col-md-4 col-lg-3 grid-item"}>
      <div className={`col-12 col-sm-6 col-md-4 ${lgClass} grid-item`}>
        <p
          className="grid-item__index"
          style={{ color: props.color, borderColor: props.color }}
        >
          {props.number}
        </p>

        {props.title && !props.hideTitle && (
          <h3 className="grid-item__title">{props.title}</h3>
        )}

        <div
          className="grid-item__description"
          dangerouslySetInnerHTML={renderHTML(props.description)}
        ></div>
      </div>
    )
  }

  const GridItems = ({ gridItems }) => {
    const items = []
    gridItems?.map((gridItem, index) => {
      items.push(<GridItem props={gridItem} key={index} />)
    })
    return items
  }

  return (
    <section className="grid-listing">
      <div className="squares-wrapper d-none d-md-block">
        {/* <SVG
          name={"dotted-squares"}
          width={495}
          height={226}
          fill={moduleColor}
        ></SVG> */}
        <Dotted />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="headline-decoration d-none d-sm-block"
              style={{ borderColor: moduleColor }}
            ></div>
            <h2 className="title">{customFields?.title}</h2>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              {topText ? <p className="topText">{topText}</p> : ""}
            </div>
          </div>
          <GridItems gridItems={items} />
          {/* {bottomText ? (
            <div className="col-12 bottomText">
              <p>{customFields?.buttomText}</p>
            </div>
          ) : (
            ""
          )} */}
        </div>
        <div className="row justify-content-center">
          {bottomText ? (
            <div className="col-12 bottomText">
              <p>{customFields?.buttomText}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={
            customFields?.cTAAlignment !== undefined
              ? "d-flex justify-content-center"
              : ""
          }
        >
          <CTA />
        </div>
      </div>
    </section>
  )
}

export default GridListing
