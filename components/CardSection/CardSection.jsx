import styles from "../../styles/CardSection.module.css";
import React from "react";
import Cards from "../Card/Card";

const CardSection = () =>{
    return(
        <div className={styles.CardSection}>
            <div className={styles.CardCollection}>
            <Cards head="Antra" subhead="Solo Singing" body="Human Voice undoubtedly the most harmonious musical instrument. Saying that, how about an artistic blend of such voices? Ears are getting eager, right? Love to sing songs? Antara is just for you. Unleash the singer within you and elevate the musical vibe of the Fest. For all the nightingales out there, we present to you the perfect opportunity to bring your talent to light and compete with all the exceptional singers, allowing you to test your potential and perform at your best capacity."></Cards>
            <Cards head="Symphony" subhead="Group Band" body="Make Music, Not War. Unless it's the BATTLE OF BANDS!
Symphony is a nationwide Battle of the Bands event where best bands from all over India go head to head on stage to see who can make the crowd jump the highest, sing along the loudest and headbang the hardest. Come, feel the energy of earth-shaking riffs and face-melting symphony and find out for yourselves which band rocks the hardest.
"></Cards>
            <Cards head="Tarang" subhead="Instrumental" body="Lose yourself amidst the cacophony of a serene flute, a raging Guitar or the melody of Fur Elise. ‘TARANG’ is the place to showcase your instrumental prowess at IIITN with participants across the nation. This event brings together all the forms of instrumental music: melody and percussion, classical and light, Indian and Western and all the rest. Capture the audience’s attention with your exceptional and melodious instrumental skills.
"></Cards>
            </div>

        </div>
    )
}
export default CardSection