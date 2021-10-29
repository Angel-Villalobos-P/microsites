import React from "react"

/**
 * Component to render a SVG.
 * @function SVG
 */

const SVG = ({
  name,
  fill = "#000",
  width = 25,
  height = 25,
  className = "",
}) => {
  const useTag = `<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#${name}" />`

  console.log(useTag);
  return (
    <svg
      className={className}
      width={width}
      height={height}
      aria-hidden="true"
      fill={fill}
      dangerouslySetInnerHTML={{ __html: useTag }}
    >
    </svg>
  )
}

export default SVG
