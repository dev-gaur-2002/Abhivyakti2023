import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.sbi}>
        <h3>Event Sponsored By:</h3>
        <img src="\images\sbi.svg" alt="#" />
      </div>
      <div className={styles.footerfle}>
        <div className={styles.box}>
          <div className={styles.abhi}>
            <img src="\images\logoFinal 1.svg" alt="#" className={styles.oo} />
            <img
              src="\images\ABHIVYAKTI 23.svg"
              alt="#"
              className={styles.ah}
            />
          </div>
        </div>

        <div className={styles.box1}>
          <div className={styles.cospon}>
            <h3>Co-Sponsored by:</h3>
            <img src="\images\svg2.svg" alt="#" />
          </div>
          <div className={styles.box2}>
            <h3>Official audio partner:</h3>
            <img src="\images\zebronics.svg" alt="#" />
          </div>
        </div>
      </div>
      <div className={styles.linkss}>
        <div className={styles.formm}>
            <a href="http://">Buy our merch</a>
        </div>
        <div className={styles.cerdits}>
            <a href="http://">Credits</a>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
