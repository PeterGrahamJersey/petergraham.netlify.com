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
    color:black;
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
        <Link to='/'>
          <h2>Peter Graham</h2>
        </Link>
        <p>Data Analyst, Brighton (UK)</p>
      </div>
      <ul>
        <li><a href='https://github.com/PeterGrahamJersey'><FaGithubSquare size='1.5rem'/></a></li>
        <li><a href='https://www.linkedin.com/in/peter-graham/'><FaLinkedin size='1.5rem'/></a></li>
      </ul>
    </div>
  )
};

export default Header;
