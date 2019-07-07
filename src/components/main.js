/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const styles = `
  grid-area:main;
  width:100%;

  pre {
    margin-bottom: 1.61rem;
  }
`

const Main = ({children}) => {
  return (
    <div css={css(styles)}>
      {children}
    </div>
  )
}

export default Main;
