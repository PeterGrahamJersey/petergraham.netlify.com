/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from 'gatsby'

const styles = `
  margin-bottom:1rem;

  .card-box {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
    padding: 1rem 0.5rem 0.1rem 0.5rem;
  }

  a {
    color:black;
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
        <div className='card-box'>
          <h3>{post.frontmatter.title}</h3>
          <small className='light'>{post.frontmatter.date}</small>
          <p><i>{post.excerpt}</i></p>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard;
