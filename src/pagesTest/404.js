import React, { Fragment } from "react"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
import { Helmet } from "react-helmet"
import GlobalMicrositesHeader from "../components/GlobalMicrositeHeader"
import GlobalMicrositesFooter from "../components/GlobalMicrositeFooter"
import "./404.scss"

const NotFoundPage = () => {
  const backgroundStyles = `
    .not-found-wrapper {
      background-color: #000;
    }

    @media (min-width: 768px) {
      .not-found-wrapper {
       
      }
    }
  `
  return (
    <Fragment>
      <Helmet>
        <title>404 Page Not Found - Pixel506</title>
        <meta name="robots" content="noindex,nofollow"></meta>
      </Helmet>
      <GlobalMicrositesHeader />
      <style>{backgroundStyles}</style>
      <main>
        <section className="not-found">
          <div className="not-found-wrapper background-cover">
            <div className="container not-found-container">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-center justify-content-md-start align-items-center pt-5 circles-wrapper">
                    <span className="pink-circle">4</span>
                    <span className="pink-circle">0</span>
                    <span className="pink-circle">4</span>
                  </div>
                  <h1 className="title">Page Not Found...</h1>
                  <p className="subheadline">
                    Uh-oh, we couldn’t find the page you’re looking for! We
                    invite you to check out our Insights or dig into our Case
                    Studies.
                  </p>
                  {/* <p className="cta-text">{props.aboveCTAsText}</p> */}
                  {/* <div className="d-flex justify-content-around justify-content-md-start align-items-center">
                    <Link
                      className="btn btn-primary-pink black mr-md-4"
                      to={props.rightCTA.url}
                    >
                      {props.rightCTA.text}
                    </Link>
                    <Link
                      className="btn btn-secondary-pink"
                      to={props.leftCTA.url}
                    >
                      {props.leftCTA.text}
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <GlobalMicrositesFooter />
    </Fragment>
  )
}
// (
//   <Layout>
//     <Seo title="404: Not found" />
//     <h1>404: Not Found</h1>
//     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//   </Layout>
// )

export default NotFoundPage
