import styles from "../../styles/header.module.css"

const Header = () =>{

    return(
        <div>
            <div className={styles.line}>
            <div className={styles.Abhivyakti}>Abhivyakti</div>
            </div>
            <div className={styles.logobg}><img src="images/abhivyakti.png" className={styles.logo}></img></div>

        </div>
    )
}
export default Header