import styles from "../../styles/EventSection4.module.css";
import React from "react";
import Cards from "../Card/Card";

const EventSection4 = () =>{
    return(
        <div className={styles.CardSection}>
            <div className={styles.CardCollection}>
            <Cards head="MUN" subhead="Model United Nation" body="Get ready for an exciting and informative MUN experience at the fest! Here we will  simulate real-world political and diplomatic negotiations and discuss some of the most pressing issues facing our world today. This event allows participants to closely explore all kinds of committees, issues, and the structure of the Model United Nations. MUN will reflect the skills of participants like research, public speaking, debating, and writing.  It's a very novel and challenging task but of course an event with joy."></Cards>
            <Cards head="Pariprekshya" subhead="Short Film Competition" body="Are you a budding filmmaker with a passion for telling stories through the art of film? Then we've got the perfect opportunity for you!In this event of Abhivyakti, we are providing a chance for younger video directors to make their own short films. Pariprekshya gives a way to represent our society and culture in a natural sense with the help of some small acts. Originality and creativity will be the key factor in making your short film a success amongst the audience of abhivyakti.
"></Cards>
            <Cards head="I’d Double Tap That" subhead="Meme Competition" body="Do you have what it takes to make the internet laugh? The event name itself tells you what unique thing the creator has to do. Just Meme it out! And picture out what's going on in your mind with sarcasm. Its a celebration of humor and creativity in the world of memes. Here participants will be asked to design their very own personalised memes and post them on our social media platforms. The one with the most likes would be declared the winner.
"></Cards>
            </div>

        </div>
    )
}
export default EventSection4;