import React from "react"
import "./ImageAndInformationSquare.scss"
import { Link } from "gatsby"
import Facebook from "../images/Facebook.svg"
import Instagram from "../images/Instagram.svg"
import Youtube from "../images/Youtube.svg"
import Twitter from "../images/Twitter.svg"
import LinkedIN from "../images/LinkedIN.svg"

const ImageAndInformationSquare = ({ item }) => {
  const customFields = item?.item.fields
  console.log(item);
  const moduleColor = customFields?.mainColor.fields.hexadecimalValue
  const image = customFields?.image ? encodeURI(customFields.image.url) : null
  const styles = `
    .img-info-square.iis-${item.contentID} .wrapper {
      background-image: url(${image});
      border-color: ${moduleColor};
      background-size: 60%;
      background-repeat: no-repeat;
      background-position: left;
    }
  `
  const handleTitle = pTitle => {
    if (typeof document === `undefined`) return
    const isH1 = document.querySelector("h1") ? false : true
    if (isH1) {
      return <h1 className="title">{pTitle}</h1>
    } else {
      return <h2 className="title">{pTitle}</h2>
    }
  }

  return (
    <section className={`img-info-square iis-${item.contentID}`}>
      <style>{styles}</style>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wrapper">
              <div className="info-square">
                {handleTitle(customFields?.title)}
                <p className="text-block">{customFields?.textBlock}</p>
                <p className="cta-headline">{customFields?.cTAHeadlineText}</p>
                <div className="d-flex justify-content-between justify-content-sm-start">
                  {customFields?.leftCTA && (
                    <Link
                      className="btn btn-primary-pink mr-4"
                      to={customFields?.leftCTA.href}
                    >
                      {customFields?.leftCTA.text}
                    </Link>
                  )}
                  {customFields?.rightCTA && (
                    <Link
                      className="btn black btn-secondary-pink"
                      to={customFields?.rightCTA.href}
                    >
                      {customFields?.rightCTA.text}
                    </Link>
                  )}
                </div>
                <div className="d-flex justify-content-end flex-column mb-4 mt-4 mt-sm-0 pb-2">
                  <p className="social">We are on Social:</p>
                  <ul className="social-links mt-sm-3">
                    <li className="social-links__item">
                      <a
                        href="https://www.facebook.com/PIXEL506/"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Pixel506 Facebook page (Opens a new Window)."
                      >
                        <Facebook />
                      </a>
                    </li>
                    <li className="social-links__item">
                      <a
                        href="https://www.instagram.com/pixel506official/"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Pixel506 Instagram page (Opens a new Window)."
                      >
                        <Instagram />
                      </a>
                    </li>
                    <li className="social-links__item">
                      <a
                        href="https://www.youtube.com/channel/UCGaR5CY3HA_2CcGkhYbZQ5Q/featured"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Pixel506 Youtube page (Opens a new Window)."
                      >
                        <Youtube />
                      </a>
                    </li>
                    <li className="social-links__item">
                      <a
                        href="https://twitter.com/Pixel506"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Pixel506 Twitter page (Opens a new Window)."
                      >
                        <Twitter />
                      </a>
                    </li>
                    <li className="social-links__item">
                      <a
                        href="https://www.linkedin.com/company/pixel506/"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Pixel506 LinkedIn page (Opens a new Window)."
                      >
                        <LinkedIN />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="wrapper-borders"
                style={{ borderColor: moduleColor }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageAndInformationSquare
