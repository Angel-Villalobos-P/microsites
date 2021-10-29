import React, { useState, useEffect } from "react"
import { useTrackVisibility } from "react-intersection-observer-hook"

/**
 * Lazy loading component that takes the src of the real image, the placeholder, the alt for the image and the extraclasses.
 * @function LazyImage
 */
const LazyImage = React.memo(
  ({ src, placeholder, alt = "", extraClasses = "" }) => {
    const [imgRef, { isVisible }] = useTrackVisibility()
    const [loading, setLoading] = useState(true)
    const [currentSrc, updateSrc] = useState(placeholder)
    const [imgLoaded, setImgLoaded] = useState(false)

    /**
     * useEffect hooks that changes the src when the image is visible.
     */
    useEffect(() => {
      const imageToLoad = new Image()
      if (isVisible && !imgLoaded) {
        imageToLoad.src = src
        imageToLoad.onload = () => {
          setLoading(false)
          updateSrc(src)
          setImgLoaded(true)
        }
      }
    }, [isVisible, src, imgLoaded])

    /**
     * Renders the image.
     */
    return (
      <img
        ref={imgRef}
        className={`lazy ${extraClasses}`}
        src={currentSrc}
        style={{
          opacity: loading ? 0.5 : 1,
          transition: "opacity .15s linear",
        }}
        alt={alt}
        id="schema_image"
      />
    )
  }
)

export default LazyImage
