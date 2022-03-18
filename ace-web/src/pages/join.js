import React, { useState } from "react"
import Layout from "../components/layout"

import * as styles from "../styles/join.module.scss"

const SubmitEmail = () => {
  const [email, setEmail] = useState(null)
  return (
    <div className={styles.emailContainer}>
      <input className={styles.emailInput} type="email" />
      <div className={styles.submitButton}>join</div>
    </div>
  )
}
const JoinPage = () => (
  <Layout>
    <main className={styles.mainContainer}>
      <div className={styles.submitContainer}>
        <p>for updates and news, join our mailing list:</p>
        <SubmitEmail />
      </div>
    </main>
  </Layout>
)

export default JoinPage
