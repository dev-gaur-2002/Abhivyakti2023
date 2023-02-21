import styles from "../../styles/EventSection2.module.css";
import React from "react";
import Cards from "../Card/Card";

const EventSection2 = () =>{
    return(
        <div className={styles.CardSection}>
            <div className={styles.CardCollection}>
            <Cards head="RIWAYAT" subhead="Drama" body="Drama lies in the extreme embroidering of feelings and rests in the creative section of your mind. It's the heart of great storytelling. It poses an exciting competition for every participant, leading them to brainstorm new and creative ideas to portray their feelings and emotion. Bring out and reflect on your special inner character to excel the dramatical performance of others. Students would enact a drama aligned to the theme that will be disclosed before every round. Showcase your exceptional theatric skills."></Cards>
            <Cards head="LehraKay" subhead="Solo Dance" body="With dance styles ranging from Western Hip-Hop to typical freestyle Bollywood to Folk, Abhivykati provides you with a platform where individual excellence and spirit of dancing is on the showcase. Wether its `Tal Se Tal Mila` or dance ka `Muqabala` we appreciate and promote all forms of dance. Join us for this zestful event and witness the ultimate dance faceoff.
"></Cards>
            <Cards head="Nrityanjali" subhead="Group Dance" body="Synchronized movements, Beating hearts, Screaming Spectators!Feel the musical drive. Find yourself on your feet, rooting for your favourite team. Team Abhivyakti present to you the most awaited event of the year that would let your minds and heart go crazy and the stage on fire. Dancer or not, the vibes would take you to places and send chills down your spine as you sit and witness the best teams perform their hearts out.
"></Cards>
            </div>

        </div>
    )
}
export default EventSection2