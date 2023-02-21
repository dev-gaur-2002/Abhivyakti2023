import styles from "../../styles/Card.module.css";
import React, { useState, useEffect, useRef } from "react";

const Cards = (props) =>{
    return(
        <div className={styles.Cardspage}>
           <div className={styles.head}>
                {props.head}
                <br></br>
                <div className={styles.subhead}>
                {props.subhead}
                </div>
               
           </div>
           <div>
           <div className={styles.body}>
                {props.body}
           </div>
           </div>

        </div>
    )
}

export default Cards