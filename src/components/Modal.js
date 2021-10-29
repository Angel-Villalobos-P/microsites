import React, {
    forwardRef,
    useRef,
    useEffect,
    useImperativeHandle,
  } from "react"
  import "./Modal.scss"
  
  /**
   * Renders a modal for the page.
   * @function Modal
   */
  
  const Modal = forwardRef((props, ref) => {
    /**
     * Detects if the user is navigating from an iPhone.
     */
  
    const isIOS =
      typeof navigator !== `undefined`
        ? /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
        : false
    const modalRef = useRef()
    const modalClass = props.hasBackdrop ? "modal backdrop" : "modal"
  
    const handleCloseAction = (targetModal) => {
      targetModal?.classList.remove("slide")
  
      setTimeout(() => {
        targetModal?.classList.remove("visible")
      }, 400)
    }
  
    /**
     * useEffect hook to add and remove the close handler to the before unload event.
     */
  
    useEffect(() => {
      const modal = ref.current
      if (typeof window !== `undefined`) {
        window.addEventListener("beforeunload", modal.close())
      }
  
      return () => {
        if (typeof window !== `undefined`) {
          window.removeEventListener("beforeunload", modal.close())
        }
      }
    }, [ref])
  
    /**
     * Handler to open and close the modal.
     */
  
    useImperativeHandle(ref, () => ({
      open() {
        const currentModal = modalRef.current
        currentModal.removeAttribute("style")
  
        currentModal.classList.add("visible")
  
        currentModal.focus()
  
        setTimeout(() => {
          currentModal.classList.add("slide")
        }, 25)
      },
  
      close() {
        const currentModal = modalRef.current
        handleCloseAction(currentModal)
      },
  
      closeOnBackdrop({ target }) {
        const currentModal = modalRef.current
        if (target.classList.value.includes("backdrop")) {
          handleCloseAction(currentModal)
        }
        return
      },
    }))
  
    /**
     * JSX rendering of the element.
     */
  
    return (
      <div
        style={{ display: "none" }}
        ref={modalRef}
        className={`${modalClass} ${props.className ? props.className : ""}`}
        onClick={(e) => ref.current.closeOnBackdrop(e)}
      >
        <div className={`modal-dialog ${isIOS ? "iOS" : ""}`}>
          <button className="modal-close" onClick={() => ref.current.close()}>
            <span></span>
          </button>
  
          {props.children}
        </div>
      </div>
    )
  })
  
  export default Modal
  