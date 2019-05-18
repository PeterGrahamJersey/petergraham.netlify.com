import React from 'react'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Layout from '../components/layout.js'
import Content from '../components/content.js'

// gatsby-mdx passes frontmatter to layout as props by default
// https://noahgilmore.com/blog/gatsby-mdx-frontmatter/
const BlogPost = (props) => {
  return (
    <Layout>
      <Header/>
      <Content>
        <h1>{props.pageContext.frontmatter.title}</h1>
        <h2>{props.pageContext.frontmatter.date}</h2>
        <div>{props.children}</div>
      </Content>
      <Footer/>
    </Layout>
  )
}

export default BlogPost;
