import React from "react"
import { Helmet } from "react-helmet";

function HelmetFunc(props) {
  return (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{"Peter Graham" + props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <link rel="canonical" href= {"http://petergraham.netlify.com/" + props.slug} />
    </Helmet>
  )
  // ...render component
}

// Set default props
HelmetFunc.defaultProps = {
  title: "",
  description: "",
  keywords: [],
  slug: ""
};

export default HelmetFunc;
