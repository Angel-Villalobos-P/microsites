import React, { useState } from "react"
import { Link } from "gatsby"
import { renderHTML } from "../agility/utils"
import "./TableBlock.scss"

const TableBlock = ({ item }) => {
  const customFields = item !== undefined ? item.item.fields : null

  //   const tableCol = item !== undefined ? item?.tableCol : null

  const rows = customFields?.rows

  const columns = customFields?.columns

  const [showAllRows, setShowAllRows] = useState(false)

  const RowItems = ({ props }) => {
    const customFields = props.fields

    // const columnName = customFields?.columnName
    const text = customFields?.text
    const imgIcon = customFields?.imgIcon
    const highlightColumn = customFields?.highlightColumn

    return (
      <td
        className={`col-content ${
          highlightColumn === "true" ? "highlight-column" : ""
        }`}
      >
        {imgIcon ? (
          <img src={imgIcon.url} />
        ) : (
          // <p className="column-text">{text}</p>
          <div
            className="column-text"
            dangerouslySetInnerHTML={renderHTML(text)}
          />
        )}
      </td>
    )
  }

  const CTA = () => {
    const buttonStyleClass = customFields?.blockButtonStyle?.fields.cSSClass
      ? customFields.blockButtonStyle?.fields?.cSSClass
      : "btn-primary-white"

    return (
      <Link className={`btn ${buttonStyleClass}`} to={customFields?.cTA?.href}>
        {customFields?.cTA?.text}
      </Link>
    )
  }

  const TableCTA = props => {
    const buttonStyleClass = customFields?.buttonStyle.fields.cSSClass
      ? customFields?.buttonStyle.fields.cSSClass
      : "btn-primary-white"

    return (
      <Link
        className={
          props.color ? "btn highlight-white" : `btn ${buttonStyleClass}`
        }
        to={customFields?.cTA?.href}
      >
        {customFields?.cTALink?.text}
      </Link>
    )
  }

  return (
    <section className="table-block">
      <div className="container">
        <div className="row header-wrapper">
          <div className="col-12 col-md-6">
            {columns?.length > 1 ? <span className="headline-line" /> : null}
            <h1 className="title">{customFields?.title}</h1>
          </div>
          <div className="col-12 col-md-6">
            <p className="text">{customFields?.text}</p>
          </div>
        </div>
        <div className="row table-sm">
          <div className="col-12 d-flex justify-content-center">
            <table
              className={`table ${columns?.length === 1 ? "one-col" : ""}`}
            >
              <thead>
                <tr>
                  <th className="row-name-empty sticky-col" scope="col" />
                  {columns?.map((col, index) => {
                    return (
                      <th
                        className={`col-name ${
                          col.fields?.highlightColumn ? "highlight-column" : ""
                        }`}
                        key={index}
                        scope="col"
                      >
                        {col.fields?.columnName}
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                {rows?.map((row, index) => {
                  return (
                    <tr
                      key={index}
                      className={`${
                        !showAllRows && (index === 8 || index === 9)
                          ? "opacity"
                          : ""
                      } ${index > 9 && !showAllRows ? "hidden-row" : ""}`}
                    >
                      <th className="row-name sticky-col">
                        {row.fields?.rowtext}
                      </th>
                      {row?.fields?.rowItems?.map((item, indx) => {
                        return <RowItems key={indx} props={item} />
                      })}
                    </tr>
                  )
                })}
                <tr>
                  <th className="show-full-plans row-name-empty sticky-col">
                    <button
                      className="show-plans-btn"
                      onClick={() => setShowAllRows(!showAllRows)}
                    >
                      Show Full Plans
                    </button>
                  </th>
                  {columns?.map((colCta, i) => {
                    return (
                      <td
                        key={i}
                        className={`btn-cta ${
                          colCta?.fields.highlightColumn==="true" ? "highlight-column" : ""
                        }`}
                      >
                        <TableCTA color={colCta?.fields.highlightColumn==="true" ? "white":null}/>
                      </td>
                    )
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row footer-wrapper d-flex justify-content-center">
          <div className="col-md-9 d-flex text-center">
            {/* <p className="cta-text">{customFields.cTAText}</p> */}
            <div
              className="cta-text"
              dangerouslySetInnerHTML={renderHTML(customFields?.cTAText)}
            />
          </div>
          <div className="col-12 d-flex justify-content-center">
            <CTA />
          </div>
        </div>
      </div>
    </section>
  )
}
export default TableBlock
