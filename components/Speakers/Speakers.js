import styles from "../../styles/Speakers.module.css";
import React from "react";
import Cards from "../Card/Card";

const Speakers = () =>{
    return(

                    <div className={styles.CardSection}><div className={styles.Heading}>OUR SPEAKERS</div>
            <div className={styles.CardCollection}>
            <Cards head="Sameer Sood " subhead="Director of NIFT Gandhinagar
" body="
Sameer Sood is a distinguished academician. He has more than 19 years of experience in the field of fashion management and technology. To his credit he has published and also presented research papers in international conferences. 
"></Cards>
            <Cards head="Vanshika Parmar" subhead=" Personality Contest Judge
" body="Vanshika Parmar of Nadaun, Hamirpur, is the first-ever girl from the state to become Miss Earth India 2022 at the tender age of 19.
Miss Earth is one of the top three alpha and mega beauty pageants of the world
"></Cards>
            <Cards head="Nishikant Deshmukh" subhead=" Music Competitions Judge" body="Nishikant deshmukh appeared as a judge at vnit’s cultural fest Arohi. He is a violinist and a guitarist.

"></Cards>
            </div>

        </div>
        

    )
}
export default Speakers;