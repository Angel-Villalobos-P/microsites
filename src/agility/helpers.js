import './core/getEventListener';
import shortid from 'short-uuid';


/**
 * Divides an array into same size chunks
 * @param {Array} array
 * @param {Number} chunkSize
 */
export const chunkArray = (array, chunkSize) => {
  const results = []

  while (array.length) {
    results.push(array.splice(0, chunkSize))
  }

  return results
}

/**
 * Shuffles an array
 * @param {Array} array
 */
export const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

/**
 * Get the value of a cookie by name
 * @param {String} pName
 */
export const getCookie = pName => {
  const cookie = document.cookie.match(`(^|;) ?${pName}=([^;]*)(;|$)`)
  return cookie ? cookie[2] : null
}

/**
 * Sets a Cookie
 * @param {String} pName
 * @param {Mixed} pValue
 * @param {Number} pDays
 */
export const setCookie = (pName, pValue, pDays) => {
  const date = new Date()
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * pDays)
  document.cookie = `${pName}=${pValue};path=/;expires=${date.toGMTString()}`
}

/**
 * Deletes a cookie by name
 * @param {String} pName
 */
export const deleteCookie = pName => {
  setCookie(pName, "", -1)
}

/**
 * Starts to watch if an element enters the viewport and triggers a callback
 * @param {Element} element
 * @param {Function} callback
 * @param {Object} options
 * @param {Number} delay
 */
export const inViewPort = (
  element,
  callback,
  options = { rootMargin: "50px", threshold: 0 },
  delay = 0
) => {
  if (!element || !callback) return false

  let inViewObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target
        if (delay > 0) {
          setTimeout(() => {
            callback(target)
            inViewObserver.unobserve(target)
          }, delay)
          return
        }
        callback(target)
        inViewObserver.unobserve(target)
      }
    })
  }, options)

  inViewObserver.observe(element)
}

/**
 * Checks If Element is in ViewPort
 * @param {Element} pElement
 */
export const isInViewport = pElement => {
  const rect = pElement.getBoundingClientRect()
  const windowHeight =
    "innerHeight" in window
      ? window.innerHeight
      : document.documentElement.offsetHeight

  const top = rect.top + windowHeight <= windowHeight
  const bottom = rect.bottom >= windowHeight

  return top && bottom
}

/**
 * Transforms an HEX Color into RGBA
 * @param {String} pHex
 * @param {Number} pOpacity
 */
export const hexToRgba = (pHex, pOpacity) => {
  let hexLetters
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(pHex)) {
    hexLetters = pHex.substring(1).split("")
    if (hexLetters.length === 3) {
      hexLetters = [
        hexLetters[0],
        hexLetters[0],
        hexLetters[1],
        hexLetters[1],
        hexLetters[2],
        hexLetters[2],
      ]
    }
    hexLetters = "0x" + hexLetters.join("")
    return (
      "rgba(" +
      [
        (hexLetters >> 16) & 255,
        (hexLetters >> 8) & 255,
        hexLetters & 255,
      ].join(",") +
      "," +
      pOpacity +
      ")"
    )
  }
  throw new Error("Bad Hex")
}

/**
 * If string is longer that the max allowed charactes returns it with ... at the end
 * @param {String} pString
 * @param {Number} maximunCharacters
 */
export const trimText = (pString, maximunCharacters = 55) => {
  if (pString.length > maximunCharacters + 5) {
    return `${pString.substring(0, maximunCharacters)}...`
  }
  return pString
}

/**
 * Generates a string separated by hyphens and lowercase from a String
 * @param {String} title
 */
export const generateSlug = title => {
  return `${title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")}-${shortid.generate()}`;
}

/**
 * Adds a 0 before a number if is single digit
 * @param {Number} pVal
 */
export const isSingleDigit = pVal => {
  return String(+pVal).charAt(0) === String(pVal)
}

/**
 * String html tags from string
 * @param {*} html 
 */
export const stripHTML = html => {
  return html.replace(/(<([^>]+)>)/gi, "");
}

/**
 * Return read time for HTML content
 * @param {html} content
 */
export const getReadTime = content => {
  const strippedString = stripHTML(content);
  let cleanString = strippedString.replace(/(^\s*)|(\s*$)/gi, "")
  cleanString = cleanString.replace(/[ ]{2,}/gi, " ")
  cleanString = cleanString.replace(/\n /, "\n")
  const wordCount = cleanString.split(" ").length

  return Math.ceil(wordCount / 200)
}

/**
 * Private Function to remove all events from node
 * @param {*} targetNode 
 * @param {*} event 
 */
const removeAllListeners = (targetNode, event) => {
  if (typeof Element === `undefined`) return
  const events = targetNode.getEventListeners(event);
  events.forEach(event => {
    targetNode.removeEventListener(event.type, event.listener, event.useCapture)
  })
}

/**
 * Adds touch functionality to an element
 * @param {String} direction
 * @param {Funtion} callback
 * @param {Boolean} destroy
 */
export function swipe(direction, callback = () => {}, prevent = false, destroy = false) {
  if (typeof Element === `undefined`) return
  const touchsurface = this
  let swipedir, startX, startY, startTime

  const unify = e => (e.touches ? e.touches[0] : e)

  const start = e => {
    swipedir = null
    startX = unify(e).clientX
    startY = unify(e).clientY
    startTime = new Date().getTime()
  }

  const move = e => {
    if (!startX || !startY) return

    const distX = unify(e).clientX
    const distY = unify(e).clientY

    const xDiff = startX - distX
    const yDiff = startY - distY

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        swipedir = "left"
      } else {
        swipedir = "right"
      }
    } else {
      if (yDiff > 0) {
        swipedir = "up"
      } else {
        swipedir = "down"
      }
    }

    startX = null
    startY = null

    if (prevent && swipedir === direction) e.preventDefault()
  }

  const end = e => {
    const elapsedTime = new Date().getTime() - startTime

    if (elapsedTime > 100 && swipedir === direction) {
      callback(e)
    }
  }

  if (destroy) {
    removeAllListeners(touchsurface, 'touchstart')
    removeAllListeners(touchsurface, 'mousedown')

    removeAllListeners(touchsurface, 'touchmove')
    removeAllListeners(touchsurface, 'mousemove')

    removeAllListeners(touchsurface, 'touchend')
    removeAllListeners(touchsurface, 'mouseup')
  } else {
    touchsurface.addEventListener("touchstart", start, false)
    touchsurface.addEventListener("mousedown", start, false)

    touchsurface.addEventListener("touchmove", move, false)
    touchsurface.addEventListener("mousemove", move, false)

    touchsurface.addEventListener("touchend", end, false)
    touchsurface.addEventListener("mouseup", end, false)
  }
}

/**
 * Animates the scroll of an element
 * @param {Number} to
 * @param {Function} callback
 * @param {Number} duration
 */
export function scrollTo(to, callback = () => {}, duration = 700) {
  if (typeof window === `undefined`) return
  const doc = document.documentElement;
  const start = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
  const destiny = to ? to : 0
  const change = destiny - start
  let currentTime = 0

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  const animateScroll = () => {
    currentTime += 10

    const val = easeInOutQuad(currentTime, start, change, duration)
    const animationFrame = () => window.scroll({ top: val })

    window.requestAnimationFrame(animationFrame)

    if (currentTime < duration) {
      setTimeout(animateScroll, 10)
    } else {
      window.scroll({ top: to })
      callback()
    }
  }

  animateScroll()
}

/**
 * Get iframe Code
 * @param {*} url 
 */
export const getIframe = async (url) => {
  const response = await fetch(`https://oembed.radiopublic.com/oembed?url=${url}`)
  const json = await response.json();
  return json
}