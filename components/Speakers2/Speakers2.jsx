import styles from "../../styles/Speakers2.module.css";
import React from "react";
import Cards from "../Card/Card";

const Speakers2 = () =>{
    return(

                    <div className={styles.CardSection}>
            <div className={styles.CardCollection}>
            <Cards head="Chetan Dashmuke " subhead="Dance Competition Judge  

" body="
Founder and teacher at Genx academy(near coffee house square). Mostly teaches hip-hop    , Garbha and Bollywood.
He is also a dance teacher at Raisoni engineering college. 

"></Cards>
            <Cards head="Amrut Deshmukh" subhead=" Guest Speaker
" body="Amrut Deshmukh aka the Booklet Guy is the brain behind the initiative — Make India Read.Amrut Deshmukh’s presence will be a valuable addition to the stage of ABHIVYAKTI 2023 and will be a great learning experience for the students of IIIT Nagpur

"></Cards>
            <Cards head="Vicky Sidana" subhead=" Veteran in Film Industry" body="Vicky Sidana Casting Director Actor Casting Department IMDbPro Starmeter See rank Vicky Sidana is known for Baby (2015), Drishyam (2015) and Bodyguard (2011)
"></Cards>
            </div>

        </div>
        

    )
}
export default Speakers2;