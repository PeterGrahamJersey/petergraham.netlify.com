/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const styles = `
  grid-area:content;
`

const Content = ({children}) => {
  return (
    <div css={css(styles)}>
      {children}
    </div>
  )
}

export default Content;
