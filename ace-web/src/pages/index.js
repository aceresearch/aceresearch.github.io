import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../styles/index.module.scss"

const IndexPage = () => (
  <>
    <StaticImage
      src="../images/ace.png"
      alt="ace logo"
      width={150}
      height={150}
    />
  </>
)

export default IndexPage
