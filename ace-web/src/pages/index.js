import * as React from "react"
import Layout from "../components/layout"

import "../styles/all.scss"
import * as styles from "../styles/index.module.scss"

import AceLogoText from "../svg/ace.svg"

const IndexPage = () => (
  <Layout>
    <main className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <AceLogoText className={styles.logo} />
      </div>
    </main>
  </Layout>
)

export default IndexPage
