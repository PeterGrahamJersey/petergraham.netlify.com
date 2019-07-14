/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from 'gatsby'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"

const styles = `
  grid-area:header;
  width:100%;
  display:flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration:none;
    color:inherit;
  }

  h2 {
    margin-bottom:0rem
  }

  ul li{
    display:inline-block;
  }
`;

const Header = () => {
  return (
    <div css={css(styles)}>
      <div>
        <Link to={`/`}>
          <h2>Peter Graham</h2>
        </Link>
        <p>Data Analyst, Brighton (UK)</p>
      </div>
      <ul>
        <li><a href='https://github.com/PeterGrahamJersey' target='_blank' rel="noopener noreferrer"><FaGithubSquare size='1.5em' color='#76BA8F'/></a></li>
        <li><a href='https://www.linkedin.com/in/peter-graham/' target='_blank' rel="noopener noreferrer"><FaLinkedin size='1.5em' color='#76BA8F'/></a></li>
      </ul>
    </div>
  )
};

export default Header;
