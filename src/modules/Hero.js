import React from "react"
import "./Hero.scss"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
// import Form from "./../components/Form"

const Hero = ({ item }) => {

  const customFields = item !== undefined ? item.item.fields : null

  if (!customFields) return null

  const lowQuality = `${
    customFields?.lowQualityImage
      ? encodeURI(customFields?.lowQualityImage.url)
      : ""
  }`
  const highQualityDesktop = `${encodeURI(
    customFields.highQualityDesktopImage.url
  )}`
  const highQuality = `${
    customFields.highQualityMobileImage
      ? encodeURI(customFields.highQualityMobileImage.url)
      : highQualityDesktop
  }`

  const headlineDecorationColor = `${
    customFields?.headlineDecorationColor
      ? customFields?.headlineDecorationColor?.fields.hexadecimalValue
      : "#E12A5C"
  }`
  const headlineTextColor = `${
    customFields?.headlineTextColor
      ? customFields?.headlineTextColor?.fields.hexadecimalValue
      : "#FFF"
  }`
  const titleColor = `${
    customFields?.titleColor
      ? customFields?.titleColor?.fields.hexadecimalValue
      : "#FFF"
  }`
  const subHeadlineColor = `${
    customFields?.subheadlineColor
      ? customFields?.subheadlineColor?.fields?.hexadecimalValue
      : "#FFF"
  }`
  const buttonStyleClass = customFields?.cTAStyle
    ? customFields.cTAStyle.fields.cSSClass
    : "btn-primary-pink"

  const alt = customFields?.highQualityDesktopImage.label
    ? customFields?.highQualityDesktopImage.label
    : customFields.title

  const backgroundStyles = `
    .hero.item-${item.item.contentID} .title {
      color: ${titleColor}
    }

    .hero.item-${item.item.contentID} .headline-decoration {
      color: ${headlineDecorationColor}
    }

    .hero.item-${item.item.contentID} .headline-content {
      color: ${headlineTextColor}
    }

    .hero.item-${item.item.contentID} .subheadline {
      color: ${subHeadlineColor}
    }

    .hero.item-${item.item.contentID} {
      background-image: url(${highQuality}),url(${lowQuality});
      min-height: 450px;
      background-position: ${customFields.backgroundPosition}
    }

    @media (min-width: 768px) {
      .hero.item-${item.item.contentID} {
        background-image: url(${highQualityDesktop}),url(${lowQuality});
        min-height: 550px;
      }
    }
  `

  const CTA = () => {
    if (
      customFields.scrollToFormOnClick &&
      customFields.cTASettings &&
      customFields.cTASettings.href &&
      customFields.hasForm
    ) {
      return (
        <Link
          className={`btn ${buttonStyleClass}`}
          to={customFields.cTASettings.href}
        >
          {customFields.cTASettings.text}
        </Link>
      )
    }
    if (customFields.cTASettings && customFields.cTASettings.href) {
      return (
        <Link
          className={`btn ${buttonStyleClass}`}
          to={customFields.cTASettings.href}
        >
          {customFields.cTASettings.text}
        </Link>
      )
    }

    if (
      customFields.scrollToFormOnClick &&
      customFields.cTASettings &&
      !customFields.cTASettings.href &&
      !customFields.hasForm
    ) {
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
          className={`btn ${buttonStyleClass}`}
          onClick={handleScrollToForm}
        >
          {customFields.cTASettings.text}
        </button>
      )
    }

    return null
  }

  return (
    <section
      className={`hero background-cover item-${item.item.contentID}`}
      title={alt}
      role="banner"
    >
      <Helmet>
        <link rel="preload" as="image" href={lowQuality} />
        <link rel="preload" as="image" href={highQuality} />
        <link rel="preload" as="image" href={highQualityDesktop} />
      </Helmet>
      <style>{backgroundStyles}</style>
      <div className="container">
        <div
          className={
            customFields.hasForm
              ? "row justify-content-between mt-5 mb-md-5"
              : "row"
          }
        >
          <div
            className={
              customFields.hasForm
                ? "col-12 col-sm-6 mt-4 mb-sm-0 d-flex flex-column justify-content-center"
                : "col-12 col-sm-10"
            }
          >
            {customFields.headline && (
              <div className="headline-wrapper">
                <span
                  className="headline-decoration"
                  style={{
                    backgroundColor:
                      item.customFields.headlineDecorationColor.customFields
                        .hexadecimalValue,
                  }}
                ></span>
                <p className="headline-content mb-0">{customFields.headline}</p>
              </div>
            )}

            <h1 className="title">{customFields.title}</h1>

            <p
              className={`subheadline ${
                customFields.wrapSubheadline === "true" ? "wrapped" : ""
              }`}
            >
              {customFields.subheadline}
            </p>

            <CTA />
          </div>
          {customFields.hasForm && (
            <div className="col-12 col-sm-5 form-wrapper">
              <h2 className="text-center mb-4">{customFields.formHeadline}</h2>
              {/* <Form form={customFields.form} /> */}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
