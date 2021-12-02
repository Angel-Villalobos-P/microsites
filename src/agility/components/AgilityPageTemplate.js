import React, { useEffect } from 'react'

const svgSuccess = e => {
    const oThis = e.target || e.currentTarget

    if (oThis.status.toString() !== '404') {
        const div = document.createElement('div');
        div.className = 'svg-loader-placeholder';
        div.innerHTML = oThis.responseText;
        div.style.display = 'none';
        document.body.appendChild(div);
    }
}

const svgError = e => {
    console.error('SVG Load Error:' + e.message);
}

const svgLoader = svgUrl => {
    const xhr = new XMLHttpRequest()
    xhr.onload = svgSuccess
    xhr.onerror = svgError
    xhr.open('get', svgUrl, true)
    xhr.send()
}

const AgilityPageTemplate = (props) => {
    const pageTemplateName = props.page.templateName.replace(/[^0-9a-zA-Z]/g, '');
    const PageTemplateComponentToRender = require(`../../pageTemplates/${pageTemplateName}.js`).default;

    useEffect(() => {
        svgLoader('/SVGs.svg')
    }, [])

    //get the page template name that we need to render
    
    //const PageTemplateComponentToRender = props.pageTemplates[pageTemplateName];
    delete props.pageTemplates;
    return (
        <PageTemplateComponentToRender {...props} />
    );
}

export default AgilityPageTemplate;
