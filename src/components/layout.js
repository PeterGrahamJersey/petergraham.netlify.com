/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const styles = `
    display: grid;
    grid-template-columns: 1fr 700px 1fr;
    grid-template-areas:
      ". header ."
      ". content ."
      ". footer .";
    justify-items: left;
`;

const Layout = ({children}) => {
  return (
    <div css={css(styles)}>
      {children}
    </div>
  )
};

export default Layout;
