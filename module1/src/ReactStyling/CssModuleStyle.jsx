import React from 'react'
import styles from './CssModuleStyle.module.css'
function CssModuleStyle() {
  return (
    <div>
        <h2 className={styles.moduleStyle}> Css Module Styling</h2>
        <h3 className={styles.dataStyle}>Hello Madhu! Let's Do Styling</h3>
    </div>
  )
}

export default CssModuleStyle