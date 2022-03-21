import React, { useState } from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../styles/problems.module.scss"

const ProblemsPage = () => {
  const [image, setImage] = useState(null)

  const backgroundImage = {
    backgroundImage: `url(/${image}.jpg)`,
    backgroundSize: `600px`,
    width: "100%",
    height: "100%",
    maskRepeat: "no-repeat",
    "-webkit-mask-repeat": "no-repeat",
  }

  return (
    <Layout>
      <div className={styles.problemsContainer}>
        <ul className={styles.problemsList}>
          <li onClick={() => setImage("coccus")}>antibiotic resistance</li>
          <li onClick={() => setImage("coral")}>bioremediation</li>
          <li onClick={() => setImage("cancer")}>cancer</li>
          <li onClick={() => setImage("trees")}>carbon capture</li>
          <li onClick={() => setImage("windmills")}>clean energy</li>
          <li onClick={() => setImage("factory")}>clean manufacturing</li>
          <li onClick={() => setImage("library")}>education</li>
          <li onClick={() => setImage("gut")}>microbiome</li>
          <li onClick={() => setImage("neurons")}>
            neurodegenerative diseases
          </li>
        </ul>

        <div className={styles.imageContainer}>
          <div className={styles.image} style={backgroundImage}></div>
        </div>
      </div>
    </Layout>
  )
}

export default ProblemsPage
