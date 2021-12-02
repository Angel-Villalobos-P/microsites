import React from "react"
import loadable from "@loadable/component"

const LoadableContentZone = ({ name, page, dynamicPageItem, ...props }) => {
  const LoadableModules = () => {
    let modules = []
    const modulesForThisContentZone = page.zones[name]

    if (modulesForThisContentZone === undefined) {
      console.error(
        `Cannot render modules for zone "${name}". This does not appear to be a valid content zone for this page template.`
      )
      return
    }

    modulesForThisContentZone.forEach((moduleItem, key) => {
      
      if (moduleItem.item) {
        const moduleDefName = moduleItem.item.properties.definitionName
        let ModuleComponentToRender

        ModuleComponentToRender = require(`../../modules/${moduleDefName}.js`)
          .default
        if (key > 2) {
          ModuleComponentToRender = loadable(() =>
            import(`../../modules/${moduleDefName}`)
          )
        }

        const moduleProps = {
          key: moduleItem.item.contentID,
          dynamicPageItem: dynamicPageItem,
          item: moduleItem.item,
          ...props,
        }

        if (ModuleComponentToRender) {
          modules.push(<ModuleComponentToRender {...moduleProps} />)
        } else {
          console.error(
            `No react component found for the module "${moduleDefName}". Cannot render module.`
          )
        }
      }
    })

    return modules
  }

  return <LoadableModules />
}
export default LoadableContentZone
