import * as React from "react"
import { Link } from "gatsby"
import AceLogo from "../svg/ace_triangle.svg"

import * as styles from "../styles/header.module.scss"

const Header = () => (
  <header className={styles.container}>
    <div className={styles.innerContainer}>
      <Link to="/" className={styles.logo}>
        <AceLogo className={styles.logo} />
      </Link>

      <div className={styles.links}>
        <Link to="/about">about</Link>
        <Link to="/problems">problems</Link>
        <Link to="/join">join</Link>
      </div>
    </div>
  </header>
)

export default Header
