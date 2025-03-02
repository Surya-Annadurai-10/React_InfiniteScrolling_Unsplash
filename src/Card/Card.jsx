import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
    // console.log(props);
    
  return (
    <div className={styles.img_con}>
         <div className={styles.img_box}>
            <img  src={props.urls.small || ""} alt="img" />
         </div>
         <div className={styles.hide}>
            <h4>{props.description || ""}</h4>
            <p>{props.updated_at ||""}</p>
         </div>
    </div>
  )
}

export default Card