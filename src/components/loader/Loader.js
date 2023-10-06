import React from 'react'
import styles from './Loader.module.scss'
import ReactDOM from 'react-dom'
const Loader = () => {
  return ReactDOM.createPortal (
    <div className={styles.wrapper}>
        <div class={styles.loader}>
        </div>
    </div>,
    document.getElementById("loader")
    
  )
}

export default Loader
