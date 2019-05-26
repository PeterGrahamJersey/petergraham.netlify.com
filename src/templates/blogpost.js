import React from 'react'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Layout from '../components/layout.js'
import Main from '../components/main.js'
import HelmetFunc from '../components/helmet.js'
//import { css } from "@emotion/core"
// gatsby-mdx passes frontmatter to layout as props by default
// https://noahgilmore.com/blog/gatsby-mdx-frontmatter/
const BlogPost = (props) => {
  return (
    <div>
      <HelmetFunc
        title={" | " + props.pageContext.frontmatter.title}
        description={props.pageContext.excerpt}
      />
      <Layout>
        <Header/>
        <Main>
          <h2 css={{'marginBottom':'0'}}>{props.pageContext.frontmatter.title}</h2>
          <small css={{'color':'grey', 'display':'block', 'marginBottom':'1.5rem'}}>{props.pageContext.frontmatter.date}</small>
          <div>{props.children}</div>
        </Main>
        <Footer/>
      </Layout>
    </div>
  )
}

export default BlogPost;
