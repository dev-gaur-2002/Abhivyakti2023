import styles from "../../styles/EventSection5.module.css";
import React from "react";
import Cards from "../Card/Card";

const EventSection5 = () =>{
    return(
        <div className={styles.CardSection}>
            <div className={styles.CardCollection}>
            <Cards head="Tasveer" subhead="Photography Competition" body="Are you a shutterbug with a passion for capturing the world around you? Photography is an austere and blazing poetry of the real. It's a skill with a creative angle. `TASVEER` gives you a pixel perfect opportunity to capture the moments and portray the theme through the lens of reality. An opportunity to  showcase talent and creativity in the world of photography."></Cards>
            <Cards head="Beyond Mayhem" subhead="Gaming Competiton" body="Come prove your gaming skills at the ultimate competition.Join us for a fun packed streak of gaming tournament and competition and rise to victory showcasing your skills. Teams and Individuals will compete against each other on the virtual ground wining them surprising rewards. Pull your socks and gear up because it will be an event with a high degree of zeal.
"></Cards>
            <Cards head="KBC" subhead="Anime Quiz" body="Think you've got what it takes to be the ultimate trivia master?Get ready to test your knowledge and have fun at our quizzes! Whether you're a trivia master or just looking for a fun challenge, there's something for everyone to enjoy. It will cover the era of 2000-2010 and enlighten the euphoric moments of that time. A showdown of wit and knowledge for the ages , KBC brings to you a sweet opportunity to win some rewards in exchange for your cultural wit.
"></Cards>
            </div>

        </div>
    )
}
export default EventSection5;