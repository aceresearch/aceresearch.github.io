import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../styles/index.module.scss"

const IndexPage = () => (
  <>
    <StaticImage src="../images/ace.png" alt="ace logo" width={150} height={150} />
    <h1>ACE Research Group</h1>

    <div className={styles.description}>
      <p>The Advanced Capability Engineering (ACE) research group brings together a diverse group of undergraduate and graduate students to pursue <em>Convergence Research</em>: integrated research joining math, computation, engineering with the physical and life sciences.</p>
    </div>

    <div className={styles.events}>
      <h2>Projects</h2>

      <h3>Public reading groups</h3>
      <p>ACE has three reading group meetings weekly, one for each of the following topics:</p>

      <h3>Annotated paper forum</h3>

      <h3>Accelerated computing</h3>
      <p>ACE offers timed access to GPUs for student research.</p>
    </div>
  </>
)

export default IndexPage
