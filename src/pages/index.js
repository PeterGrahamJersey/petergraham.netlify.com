import React from "react"
import { css } from "@emotion/core"

import { graphql, Link } from 'gatsby'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Layout from '../components/layout.js'
import Content from '../components/content.js'

const styles = `
  .blog-post-link a {
    color:black;
    text-decoration:none;
  }
`;

const Index = ({ data }) => {
  return (
    <div css={css(styles)}>
      <Layout>
        <Header/>
        <Content>
            <p>I am a Data Analyst working for 15gifts in Brighton.</p>
            <div>
            {data.allMdx.edges.map(({ node }) => {
              return (
                <div key={node.id} className='blog-post-link'>
                  <Link>
                    <div>
                      <h3 css={{display:'inline-block'}}>{node.frontmatter.title}</h3>
                      <p css={{display:'inline-block'}}>{node.frontmatter.date}</p>
                    </div>
                    <p>{node.excerpt}</p>
                  </Link>
                </div>
              )
            })}
            </div>
        </Content>
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
