/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const styles = `
    display: grid;
    grid-template-columns: 1fr 600px 1fr;
    grid-template-areas:
      ". header ."
      ". main ."
      ". footer .";
    justify-items: left;

    margin-top: 3rem;
    margin-bottom: 3rem;
`;

const Layout = ({children}) => {
  return (
    <div css={css(styles)}>
      {children}
    </div>
  )
};

export default Layout;
