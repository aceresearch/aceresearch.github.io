import * as React from "react"
import Layout from "../components/layout"

import * as styles from "../styles/about.module.scss"

const AboutPage = () => (
  <Layout>
    <main className={styles.mainContainer}>
      <div className={styles.mainText}>
        <p>
          Today's unsolved problems are more complex than ever before: climate
          change, pollution, and cancer, to name a few. The most promising
          solutions will be found in{" "}
          <a href="https://www.convergencerevolution.net/">convergence</a>: the
          union of engineering, physical sciences, computation, and life
          sciences. Achieving convergence, however, will require training in
          both theory and practice from a range of diverse fields.
        </p>

        <p>
          ACE brings together a diverse group of undergraduate and graduate
          students to pursue convergence by learning the practical skills needed
          to solve the world's greatest challenges.
        </p>
      </div>
    </main>
  </Layout>
)

export default AboutPage
