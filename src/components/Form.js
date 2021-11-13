import React, { useState } from "react"
import "./Form.scss"
import { generateSlug } from "./../agility/helpers"
import { navigate } from "gatsby-link"

/**
 * React component to render a form looping trough the form input's.
 * @function Form
 * @param {form}
 */

const Form = ({ form }) => {
  const ctaStyle = form?.fields?.cTAStyle
    ? form.fields?.cTAStyle.fields?.cSSClass
    : "btn-primary-pink"
  const ctaLabel = form?.fields?.cTALabel
    ? form?.fields?.cTALabel
    : "Submit"

  /**
   * @function handleSubmit
   * Adds a class to the button used on the form when submitted.
   */

  const handleSubmit = e => {
    e.preventDefault()

    let form = document.getElementsByName("Contact Form Hero")
    let formData = new FormData(...form)

    document.querySelector(".px-form").classList.add("submitted")
    if (typeof window === `undefined`) {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: `${form.customFields.name} Submitted`,
        })
      }
    }
    //==================================================

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/thank-you"))
      .catch(error => console.log("error al enviar form-> ", error))

    //==================================================
  }

  /**
   * @function input
   * Takes an input element and detects the type of input that is is supposed to be to render it.
   */

  const Input = ({ input }) => {
    const inputName = input.name ? input.name : generateSlug(input.label)
    const required = Boolean(input.required)
    const [isDirty, setIsDirty] = useState(false)
    const [fileName, setFileName] = useState("")
    const [digit, setDigit] = useState("")
    const options = input.choices ? input.choices.split("\r\n") : []
    const choices = options.filter(checkbox => {
      return Boolean(checkbox)
    })

    const handleInput = e => setIsDirty(e.target.value.length > 0)

    /**
     * Options to detect the type of input, renders an element depending on the component's properties.
     */

    if (input.type === "long-text") {
      const validLetters = e => {
        let value = e.target.value

        // value = value.replace(/[^A-Za-z]/gi, "")
        // value = value.replace(/[^a-z ]*$/gim, "")
        value.replace(/_|[^\w\s*]|\s{2}/g, "")

        setDigit(value)
      }

      return (
        <div className="px-form-group">
          <textarea
            id={inputName}
            name={inputName}
            onInput={handleInput}
            onChange={e => validLetters(e)}
            className={`px-form-textarea ${isDirty ? "is-dirty" : ""}`}
            value={digit}
            required={required}
          ></textarea>
          <label htmlFor={inputName}>{input.label}</label>
        </div>
      )
    }

    if (input.type === "file") {
      const handleFile = e => {
        const file = e.target.files[0]
        setIsDirty(e.target.value.length > 0)
        if (file) {
          setFileName(file.name)
        } else {
          setFileName("")
        }
      }

      return (
        <div className="px-form-file">
          <input
            name={inputName}
            type={input.type}
            onInput={handleFile}
            className={`px-form-input ${isDirty ? "is-dirty" : ""}`}
            required={required}
          />
          <label htmlFor={inputName}>{input.label}</label>
          <span className="px-form-file-name">{fileName}</span>
        </div>
      )
    }

    if (input.type === "checkboxes") {
      return (
        <div className="px-form-options">
          <fieldset>
            <legend>{input.label}</legend>
            {choices.map((choice, index, arr) => {
              const checkboxrequired = input.required
                ? JSON.parse(input.required)
                : false
              const slug = generateSlug(choice)

              return (
                <div className="px-form-checkbox" key={index}>
                  <input
                    id={slug}
                    name={inputName}
                    type="checkbox"
                    value={choice}
                    required={checkboxrequired}
                  />
                  <label htmlFor={slug}>
                    <span>{choice}</span>
                  </label>
                </div>
              )
            })}
          </fieldset>
        </div>
      )
    }

    if (input.type === "radio") {
      return (
        <div className="px-form-options">
          <fieldset>
            <legend>{input.label}</legend>
            {choices.map((choice, index) => (
              <div className="px-form-radio" key={index}>
                <input
                  id={generateSlug(choice)}
                  name={inputName}
                  type="radio"
                  value={choice}
                  required={required}
                />
                <label htmlFor={generateSlug(choice)}>
                  <span>{choice}</span>
                </label>
              </div>
            ))}
          </fieldset>
        </div>
      )
    }

    if (input.type === "select") {
      return (
        <div className="px-form-select">
          <select
            id={inputName}
            name={inputName}
            onInput={handleInput}
            className={`${isDirty ? "is-dirty" : ""}`}
            required={required}
          >
            <option value=""></option>
            {choices.map((choice, index) => (
              <option value={choice} key={index}>
                {choice}
              </option>
            ))}
          </select>
          <label htmlFor={inputName}>{input.label}</label>
        </div>
      )
    }

    if (input.type === "email") {
      const validCorporateEmails = e => {
        let val = e.target.value

        let corporateEmails = [
          "gmail.com",
          "yahoo.es",
          "outlook.com",
          "zoho.com",
          "hotmail.com",
        ].some(d => val.endsWith(d))

        setDigit(val)

        if (corporateEmails) {
          setDigit("Email is not allowed")

          setTimeout(() => {
            setDigit("")
          }, 3000)
        }
      }

      return (
        <div className="px-form-group">
          <input
            id={inputName}
            name={inputName}
            type={input.type}
            onChange={e => validCorporateEmails(e)}
            value={digit}
            className={`px-form-input ${isDirty ? "is-dirty" : ""}`}
            required={required}
          />
          <label htmlFor={inputName}>{input.label}</label>
        </div>
      )
    }

    /**
     * If the .type is not defined then it renders a default one.
     */

    return (
      <div className="px-form-group">
        <input
          id={inputName}
          name={inputName}
          type={input.type}
          onInput={handleInput}
          className={`px-form-input ${isDirty ? "is-dirty" : ""}`}
          required={required}
        />
        <label
          className={input.name === "contact" ? "ml-4" : ""}
          htmlFor={inputName}
        >
          {input.label}
        </label>
      </div>
    )
  }

  return (
    <form
      id="contact-form-hero"
      name={form?.fields?.name}
      method="post"
      onSubmit={handleSubmit}
      className={`px-form ${form?.fields?.small ? "small" : ""}`}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
    >
      <input type="hidden" name="form-name" value={form?.fields?.name} />
      {form?.fields.inputs.map((input, index) => (
        <Input input={input.fields} key={index} />
      ))}
      <div data-netlify-recaptcha="true"></div>
      <div className="px-form-submit">
        <button
          // onClick={handleSubmit}
          type="submit"
          className={`btn black ${ctaStyle}`}
        >
          {ctaLabel}
        </button>
      </div>
    </form>
  )
}

export default Form
