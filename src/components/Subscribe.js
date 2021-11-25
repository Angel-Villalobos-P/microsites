import React, { Fragment, useRef } from "react"
import { useForm } from "react-hook-form"
import "./Subscribe.scss"
import Modal from "./Modal"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Link } from "gatsby"
import Facebook from "../images/Facebook.svg"
import Instagram from "../images/Instagram.svg"
import Youtube from "../images/Youtube.svg"
import Twitter from "../images/Twitter.svg"
import LinkedIN from "../images/LinkedIN.svg"

/**
 * Component to render the subscribe form using the mailchimp plugin.
 * @function Subscribe
 */

const Subscribe = ({
  label = "Subscribe",
  btnTxt = "Subscribe",
  placeholder = "",
}) => {
  const { handleSubmit, register, errors, formState } = useForm()
  const { isDirty } = formState
  const alreadySubscribedModal = useRef()
  const subscribedModal = useRef()
  const darkMode =
    typeof window !== `undefined`
      ? window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      : false

  /**
   * Handler for the mailchimp response when the email is submitted to subscribe.
   * @function onSubmit
   */
  const onSubmit = async ({ email, name }) => {
    console.log(email, name)
    const response = await addToMailchimp(email, { FNAME: name })
    if (response.result === "success") {
      subscribedModal.current.open()
    }
    if (response.result === "error" && response.msg.includes("already")) {
      alreadySubscribedModal.current.open()
    }
    if (response.result === "error" && response.msg.includes("invalid")) {
      errors.apiInvalid = response.msg
    }
    if (response.result === "error" && response.msg.includes("too many")) {
      errors.tooMany = response.msg
    }
  }

  return (
    <Fragment>
      <form className="subscribe-form" onSubmit={handleSubmit(onSubmit)}>
        <div
          className={`float-control ${isDirty ? "is-dirty" : ""}`}
        >
          <input
            name="name"
            className="dark-bg"
            placeholder=""
            {...register("name", {
              required: true,
            })}
          />
          <label className="label float-label"> Name </label>
        </div>
        <div
          className={`float-control ${isDirty ? "is-dirty" : ""}`}
        >
          <input
            name="email"
            className="dark-bg"
            placeholder={placeholder}
            title="Enter your email and name to subscribe to our newsletter"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />

          <label className="label float-label"> {label} </label>
        </div>
        {errors?.email && errors?.email.message}
        <div className="text-center">
          <button className="btn btn-subscribe" type="submit">
            {btnTxt}
          </button>
        </div>
      </form>

      <Modal
        ref={alreadySubscribedModal}
        hasBackdrop={true}
        className={`already-modal ${darkMode ? "dark" : ""}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 py-5 py-sm-0">
              <p className="title my-3 py-1 my-sm-0 py-sm-0">
                Already Onboard!
              </p>
              <p className="content">
                Thanks for being awesome, but it looks like you are already
                subscribed to our newsletter. Please check your spam folder in
                case you’re missing them :)
              </p>
              <p className="deeper">Dig Deeper into our</p>
              <div className="d-flex justify-content-around mb-4">
                <Link className="btn btn-primary-pink" to="/insights">
                  Insights
                </Link>
                <Link className="btn btn-secondary-pink" to="/case-studies">
                  Case Studies
                </Link>
              </div>
              <div className="d-flex justify-content-end flex-column mb-4 pb-2">
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
          </div>
        </div>
      </Modal>

      <Modal ref={subscribedModal} className="welcome-modal">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="title p-0 mb-3">¡Welcome on Board!</p>
              <p className="p-0 mt-3 mb-5 content">
                Look Forward to Future Pixel Updates
              </p>
              <button
                className="btn btn-primary-black"
                onClick={() => subscribedModal.current.close()}
              >
                Keep Exploring
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  )
}

export default Subscribe
