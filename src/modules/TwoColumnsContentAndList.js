import React, { Fragment } from "react"
import { isSingleDigit } from "../agility/helpers"
import { renderHTML } from "../agility/utils"
import { Link } from "gatsby"
import "./TwoColumnsContentAndList.scss"

const TwoColumnsContentAndList = ({ item }) => {
  //   const customFields = item.customFields
  const customFields = item !== undefined ? item.item.fields : null

  const list = customFields?.contentList

  const formattedItems = list?.map((item, key) => {
    const humanIndex = key + 1
    return {
      ...item.fields,
      number: isSingleDigit(humanIndex) ? `0${key + 1}` : `${key + 1}`,
    }
  })

  const ListItem = ({ props }) => {
    const title = props.displayTitle ? props.displayTitle : props.title
    return (
      <Fragment>
        {/* <div className="col-2 col-sm-3 mb-2 mb-sm-4 text-center"> */}
        <div className="col-2 mb-2 mb-sm-4 text-center">
          <p className="list-number">{props.number}</p>
        </div>
        <div className="col-10 col-sm-9 mb-4 mb-sm-4">
          {/* <p className="list-title">{title}</p> */}
          <div
            className="list-description"
            dangerouslySetInnerHTML={renderHTML(props.description)}
          ></div>
        </div>
      </Fragment>
    )
  }

  const ListItems = ({ items }) => {
    return (
      <>
        {/* <div className="col-2 col-sm-3 mb-2 mb-sm-4 text-start">
          <p className="subtitle">{customFields.subtitle}</p>
        </div> */}
        {items?.map((listItem, index) => {
          return <ListItem props={listItem} key={index} />
        })}
      </>
    )
  }

  const CTA = () => {
    const buttonStyleClass = customFields?.buttonStyle.fields.cSSClass
      ? customFields?.buttonStyle.fields.cSSClass
      : "btn-primary-white"
    return (
      <Link
        className={`btn ${buttonStyleClass}`}
        to={customFields?.ctaLink?.href}
      >
        {customFields?.ctaLink?.text}
      </Link>
    )
  }

  return (
    <section className={`tc-cont-list tc-cont-list-${item?.item?.contentID}`}>
      {/* <style>{styles}</style> */}
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          <div className="col-12 col-md-6 p-0">
            <div className="list-wrapper left-wrapper">
              <span className="headline-line"></span>
              <p className="left-text-title">{customFields?.title}</p>
              <div
                className="left-text"
                dangerouslySetInnerHTML={renderHTML(customFields?.text)}
              />
              <CTA />
            </div>
          </div>
          <div className="col-12 col-md-6 p-0">
            <div className="list-wrapper right-wrapper">
              <div className="row">
                <div className="col-12 col-sm-4 mb-2 mb-sm-4 text-center">
                  <p className="subtitle">{customFields?.subtitle}</p>
                </div>
              </div>
              <div className="row">
                <ListItems items={formattedItems} />
              </div>
              <div className="row">
                <div className="col-2 col-sm-8 mb-2 mb-sm-4 text-left">
                  <p className="right-description">
                    {customFields?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoColumnsContentAndList
