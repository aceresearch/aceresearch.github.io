import React, { useState } from "react"
import Layout from "../components/layout"

import * as styles from "../styles/join.module.scss"

const SubmitEmail = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const addEmail = async () => {
    const URL = "https://mailinglist.mattfeng.tech/add"
    // const URL = "http://localhost:8080/add"
    console.log(email)

    try {
      const response = await fetch(URL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${encodeURIComponent(email)}`,
      })
      console.log(response)
      setMessage("email successfully added!")
    } catch (e) {
      setMessage("couldn't subscribe at this time.")
    }
    setEmail("")
  }

  return (
    <div>
      <div className={styles.emailContainer}>
        <input
          onChange={e => setEmail(e.target.value)}
          name="email"
          className={styles.emailInput}
          type="email"
          value={email}
        />
        <input
          onClick={addEmail}
          type="submit"
          value="join"
          className={styles.submitButton}
        />
      </div>
      {message && <p>{message}</p>}
    </div>
  )
}
const JoinPage = () => (
  <Layout>
    <main className={styles.mainContainer}>
      <div className={styles.submitContainer}>
        <p>
          ACE is not currently recruiting. However, for updates and news, join
          our mailing list:
        </p>
        <SubmitEmail />
      </div>
    </main>
  </Layout>
)

export default JoinPage
