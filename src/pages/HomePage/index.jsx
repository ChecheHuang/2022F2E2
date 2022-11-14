import React from 'react'
import styles from './homde.module.scss'
function View() {
  return (
    <div className={styles.homePage}>
      <nav>
        <div className={styles.logo}></div>
        <div className="button"></div>
      </nav>
    </div>
  )
}

export default View
