import React from "react"
import { css } from "@emotion/core"
import { graphql } from 'gatsby'

// My Components
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Layout from '../components/layout.js'
import Main from '../components/main.js'
import BlogCard from '../components/blog-card.js'
import HelmetFunc from '../components/helmet.js'

// Page specific css
const styles = `
`;

// Page content
const Index = ({ data }) => {
  return (
    <div css={css(styles)}>
      <HelmetFunc/>
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

// Page Data
export const query = graphql`
  query {
    allMdx(sort:{fields: [frontmatter___date], order: ASC}){
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
            featuredImage {
                childImageSharp{
                    sizes(maxWidth: 600) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
          }
        }
      }
    }
  }
`
