import React from "react"
import "./ContentAndImage.scss"
import { Link } from "gatsby"
import { renderHTML } from "../agility/utils"
import LazyImage from "../components/LazyImage"

const ContentAndImage = ({ item }) => {
  const customFields = item !== undefined ? item.item.fields : null
  //   const textColor = customFields.backgroundColor === "black" ? "#FFF" : "#1C1C1C"

  const textColor = "#1C1C1C"
  const imageAlignment =
    customFields !== undefined && customFields?.imageAlignment !== undefined
      ? customFields.imageAlignment
      : ""

  //   const mainColor = customFields.mainColor
  //     ? customFields.mainColor.customFields.hexadecimalValue
  //     : "#e12a5c"
  const mainColor = "#e12a5c"
  const inlineStyles = `
    .content-img.ci-${item?.item?.contentID} .main-title, 
    .content-img.ci-${item?.item?.contentID} .headline,
    .content-img.ci-${item?.item?.contentID} .text-block {
      color: ${textColor};
    }
    .content-img.ci-${item?.item?.contentID} .main-title p span  {
      color: ${textColor};
    }
    .content-img.ci-${item?.item?.contentID} .headline-line {
      background-color: ${mainColor};
    }
  `
  const CTA = () => {
    const buttonStyleClass = customFields?.buttonStyle?.fields?.cSSClass
      ? customFields?.buttonStyle.fields.cSSClass
      : "btn-primary-white"

    if (customFields?.cTAScrollToForm && customFields?.ctaLink.href) {
      return (
        <Link
          className={`btn ${buttonStyleClass}`}
          to={customFields.ctaLink.href}
        >
          {customFields.ctaLink.text}
        </Link>
      )
    }

    if (customFields.cTAScrollToForm && !customFields.ctaLink.href) {
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
          {customFields.ctaLink.text}
        </button>
      )
    }

    return null
  }

  return (
    <section
      className={`content-img ci-${item?.item?.contentID} ${customFields?.backgroundColor}`}
    >
      <style>{inlineStyles}</style>
      <div className="container">
        <div className="row">
          <div
            className={`col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start ${
              imageAlignment !== "right"
                ? "order-2 mt-4 mt-sm-0"
                : "mb-4 mb-sm-0"
            }`}
          >
            <div className="d-flex justify-content-start align-items-center mb-2 mb-md-4 px-sm-2">
              <span className="headline-line"></span>
              <p className="headline mb-0">{customFields?.headline}</p>
            </div>
            <h2
              className="main-title mb-3 mb-sm-2 px-sm-2"
              dangerouslySetInnerHTML={{ __html: customFields?.mainTitle }}
            ></h2>
            <div className="d-lg-none">
              {customFields?.image && customFields?.imagePlaceholder && (
                <LazyImage
                  src={customFields?.image.url}
                  placeholder={customFields?.imagePlaceholder.url}
                  alt={customFields?.image ? customFields?.image.label : ""}
                  extraClasses="mobile image mb-3"
                />
              )}

              {customFields?.image && !customFields?.imagePlaceholder && (
                <img
                  className="mobile image mb-3"
                  src={customFields?.image ? customFields?.image.url : ""}
                  alt={customFields?.image ? customFields?.image.label : ""}
                />
              )}
            </div>
            <div
              className="text-block pb-1 mb-3 px-sm-2"
              dangerouslySetInnerHTML={renderHTML(customFields?.textBlock)}
            ></div>
            {customFields?.ctaLink && <CTA />}
          </div>
          <div
            className={`col-6 d-none d-lg-flex justify-content-center align-items-center ${
              customFields?.imageAlignment !== "right" ? "order-1" : ""
            } ${customFields?.imagePosition}-wrapper`}
          >
            {customFields?.image && customFields?.imagePlaceholder && (
              <LazyImage
                src={customFields?.image.url}
                placeholder={customFields?.imagePlaceholder.url}
                alt={customFields?.image ? customFields?.image.label : ""}
                extraClasses={`image ${customFields?.imagePosition}`}
              />
            )}

            {customFields?.image && !customFields?.imagePlaceholder && (
              <img
                className={`image ${customFields.imagePosition}`}
                src={customFields?.image ? customFields?.image.url : ""}
                alt={customFields?.image ? customFields?.image.label : ""}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentAndImage
