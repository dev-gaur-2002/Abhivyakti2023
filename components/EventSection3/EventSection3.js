import styles from "../../styles/EventSection3.module.css";
import React from "react";
import Cards from "../Card/Card";

const EventSection3 = () =>{
    return(
        <div className={styles.CardSection}>
            <div className={styles.CardCollection}>
            <Cards head="Vyaktitva" subhead="Personality Contest" body="‘Beauty captures the eye , Personality captures the heart’
Showcase your personal characteristics, traits, charisma, sense of humour and ensure your overall likability! Present your raging and dashing self on the stage of Abhivyakti and bless the occasion with your charming personality. Believe you deserve the crown of Mr/Miss Abhivyakti? Pitch yourself to the jury to claim the title for yourself."></Cards>
            <Cards head="CLUEMINATI" subhead="Treasure Hunt" body="The most stupefying and challenging events of Abhivyakti, Clueminati takes you on a ride through the campus of IIITN. Travel through the treasure hunting journey using cheeky hints provided to you in each round and make your own clandestine map to hunt. Fire up those neurons and instigate the Sherlock Homes in you. As is the case with every game, Collaboration will be the key to success!
"></Cards>
            <Cards head="Kalakriti" subhead="Art Exhibition" body="Calling all artists! Join us for an exhilarating art exhibition, where talented artists showcase their art and compete for top prizes! Experience the beauty of creativity and mind boggling skills in the form of aesthetic and inventive art. Follow your own mind and portray a unique idea.The creation will be showcased to everyone and the winner will be determined by the judges based on originality and creativity.
"></Cards>
            </div>

        </div>
    )
}
export default EventSection3;