import React from "react"
import Hero from "../modules/Hero"

const createPage = ({ pageContext: { data } }) => {
  console.log("zones", data)

  const MainContentZone = data?.zones?.MainContentZone

  console.log("destruct ", MainContentZone)

  return (
    <div>
      {MainContentZone && <Hero item={MainContentZone[0]} />}
      <p>hola mundo</p>
    </div>
  )
}
export default createPage
