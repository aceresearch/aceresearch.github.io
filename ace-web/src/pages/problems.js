import * as React from "react"
import Layout from "../components/layout"

import * as styles from "../styles/problems.module.scss"

const ProblemsPage = () => (
  <Layout>
    <div className={styles.problemsContainer}>
      <ul className={styles.problemsList}>
        <li>bioremediation</li>
        <li>cancer</li>
        <li>carbon capture</li>
        <li>clean energy</li>
        <li>clean manufacturing</li>
        <li>education</li>
        <li>microbiome</li>
        <li>neurodegenerative diseases</li>
      </ul>
    </div>
  </Layout>
)

export default ProblemsPage
