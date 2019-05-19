import React from 'react'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Layout from '../components/layout.js'
import Main from '../components/main.js'
//import { css } from "@emotion/core"
// gatsby-mdx passes frontmatter to layout as props by default
// https://noahgilmore.com/blog/gatsby-mdx-frontmatter/
const BlogPost = (props) => {
  return (
    <Layout>
      <Header/>
      <Main>
        <h2 css={{'margin-bottom':'0'}}>{props.pageContext.frontmatter.title}</h2>
        <small css={{'color':'grey', 'display':'block', 'margin-bottom':'1.5rem'}}>{props.pageContext.frontmatter.date}</small>
        <div>{props.children}</div>
      </Main>
      <Footer/>
    </Layout>
  )
}

export default BlogPost;
