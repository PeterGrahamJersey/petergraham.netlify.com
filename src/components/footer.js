/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const styles = `
  grid-area:footer;
  width:100%;
`;

const Footer = () => {
  return (
    <div css={css(styles)}>
      <hr/>
    </div>
  )
};

export default Footer;
