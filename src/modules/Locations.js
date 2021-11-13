import React from "react"
import "./Locations.scss"
import { Link } from "gatsby"

const Locations = ({ item }) => {
    const customFields = item?.item.fields
    const cards = customFields?.locationsCards || []

  const Location = ({ props }) => {

    const CTA = () => {
      const buttonStyleClass = props.locationCTAStyle.fields?.cSSClass
        ? props.locationCTAStyle.fields?.cSSClass
        : "btn-primary-white"
      return (
        <Link className={`btn ${buttonStyleClass}`} to={props.ctaLink.href}>
          {props.ctaLink.text}
        </Link>
      )
    }

    return (
      <div className="col-12 col-md-4 mb-5 d-flex flex-column justify-content-between">
        <h3 className="locations-name mb-2 mb-sm-4">{props.title}</h3>
        <div
          className="locations-address mb-2 mb-sm-4"
          dangerouslySetInnerHTML={{ __html: props.address }}
        ></div>
        <div>{props.ctaLink && props.ctaLink.href && <CTA />}</div>
      </div>
    )
  }

  return (
    <section className="locations">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <h2 className="locations-title">{customFields?.title}</h2>
          </div>
        </div>
        <div className="row">
          {cards.map(card => (
            <Location key={card.contentID} props={card.fields} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Locations
