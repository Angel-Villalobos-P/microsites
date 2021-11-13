import React from "react"
import "./FormSection.scss"
import Form from "./../components/Form"
// import HubspotForm from "react-hubspot-form"
// import "./HubspotForm.scss"
// import { Helmet } from "react-helmet"

const FormSection = ({ item }) => {
  const detailColor = item.fields?.detailColor
    ? item.fields?.detailColor.fields.hexadecimalValue
    : "#E12A5C"

  // var hspt_form = document.getElementById("reactHubspotForm0");
  // hspt_form?.classList?.add("hspt-customized-form");

  // console.log(hspt_form);

  // var form2 = document.getElementById("hbspt-form-1635799535859-7364425543")
  // console.log(form2);

  // const script = document.createElement('script');
  // script.src = "//js.hsforms.net/forms/shell.js";
  // script.async = true;


  return (
    <section className="form-section section">
      <div className="container">
        <h2 className="form-section-title">
          <span className="wrapper">
            <span
              style={{
                backgroundColor: detailColor,
              }}
            />
            {item?.item.fields?.title}
          </span>
        </h2>
        <Form form={item?.item.fields?.form} />
        {/* <HubspotForm
          portalId="7980722"
          formId="9355a118-6377-44af-97b1-50947f2cbef0"
          // css={scss}
          // cssClass="form-testing"
          // style="background: blue;"
        /> */}

        {/* <script
          charset="utf-8"
          type="text/javascript"
          src="//js.hsforms.net/forms/shell.js"
        ></script> */}
        {/* <Helmet>
        <script
          charset="utf-8"
          type="text/javascript"
          src="//js.hsforms.net/forms/shell.js"
        />
      </Helmet> */}
        {/* <script>
          {hbspt.forms.create({
            region: "na1",
            portalId: "7980722",
            formId: "9355a118-6377-44af-97b1-50947f2cbef0",
          })}
        </script> */}
      </div>
    </section>
  )
}

export default FormSection
