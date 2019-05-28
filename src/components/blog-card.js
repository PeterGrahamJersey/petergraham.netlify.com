/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const styles = `
  margin-bottom:1rem;

  .card-wrapper {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
  }

  .card-content {
    border-left: 5px solid #76BA8F;
    padding: 1rem 0.5rem 0.1rem 0.5rem;
  }

  a {
    color:inherit;
    text-decoration:none;
  }

  h3 {
    margin-bottom:0;
  }

  .light {
    color:grey;
  }
`

const BlogCard = ({post}) => {
  return (
    <div key={post.id} css={css(styles)}>
      <Link to={post.fields.slug}>
        <div className='card-wrapper'>
          <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
          <div className='card-content'>
            <h3>{post.frontmatter.title}</h3>
            <small className='light'>{post.frontmatter.date}</small>
            <p><i>{post.excerpt}</i></p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard;
