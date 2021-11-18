import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TestPage = ({ serverData }) => {
  return (
    <Layout>
      <Seo title="Test Page" />
      <h1>SSR page</h1>
      <p>Uding a test page</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default TestPage