import React from "react"
import "./ClientsAndPartners.scss"

const ClientsAndPartners = ({ item }) => {
  const customFields = item !== undefined ? item.item.fields : null

  return (
    <section className="clients-partners">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="title-text">
              <h2 className="title">{customFields?.title}</h2>
              <p className="text">{customFields?.text}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <img className="img" src={customFields?.clientsLogos?.url} />
            <img
              className="img-mobile"
              src={customFields?.clientsLogosMobile?.url}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default ClientsAndPartners
