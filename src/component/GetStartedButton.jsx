import React from 'react'
import { arrow_45} from "../utils/constant"
import styles from "./GetStarted.module.css"
const GetStartedButton = ({title}) => {
  return (
    <div className={styles.getStarted} >
            <div className = {styles.arrowIconDiv} >
                {arrow_45}
            </div>
            <p>{title}</p>
        </div>
  )
}

export default GetStartedButton