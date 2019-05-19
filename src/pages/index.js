import React from "react"
import { css } from "@emotion/core"

import { graphql } from 'gatsby'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Layout from '../components/layout.js'
import Main from '../components/main.js'
import BlogCard from '../components/blog-card.js'

const styles = `
`;

const Index = ({ data }) => {
  return (
    <div css={css(styles)}>
      <Layout>
        <Header/>
        <Main>
            <p>I am a Data Analyst working for 15gifts in Brighton.</p>
            <div>
            {data.allMdx.edges.map(({ node }) => {
              return (
                <BlogCard post={node}/>
              )
            })}
            </div>
        </Main>
        <Footer/>
      </Layout>
    </div>
  )
};

export default Index;

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
