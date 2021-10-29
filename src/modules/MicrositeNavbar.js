import { Link } from "gatsby"
import React, { useState } from "react"
import "./MicrositeNavbar.scss"

/**
 * Lists all menu items
 * @function MicrositeNavbar
 */

const MicrositeNavbar = ({ item }) => {
  //   const items = item.customFields.items
  const items = item !== undefined ? item.item.fields.items : null

  /**
   * Shows the page using the item click
   */

  const Item = ({ menuItem }) => {
    return (
      <li>
        <Link
          className="menu-items-btn"
          to={`${menuItem.fields.pageURL.href}`}
          activeClassName="active"
        >
          {menuItem.fields?.itemname}
        </Link>
      </li>
    )
  }

  /**
   * Renders the UI of all the items on the dropdown.
   */
  const DropdownItems = () => {
    const [active, setActive] = useState(false)

    const toggleActive = () => {
      setActive(!active)
    }
    return (
      <div className="item-dropdown">
        <button className="label" onClick={toggleActive}>
          Categories
        </button>
        {/* <ul className="menu active"> */}
        <ul className={`menu ${active ? "active" : ""}`}>
          {/* <li>
            <button className="menu-items-btn">All</button>
          </li> */}
          {items?.map((item, index) => (
            <Item menuItem={item} key={index} />
          ))}
        </ul>
      </div>
    )
  }

  /**
   * Full render of menu items UI
   */
  return (
    <nav className="menu-items sticky">
      <div className="menu-items-categories justify-content-center">
        <DropdownItems />
      </div>
    </nav>
  )
}

export default MicrositeNavbar
