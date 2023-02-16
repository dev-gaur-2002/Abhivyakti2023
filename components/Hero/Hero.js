import { useEffect, useState } from "react";
import styles from "../../styles/Hero.module.css";
const Hero = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = 1 - scrollY / 360;
      setOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.herobackground} style={{ opacity }}>
      <div className={styles.herohead}>
        <h2 className={styles.basichead}>
          A NEXUS <img className={styles.trophy} src="images/trophy.png"></img>{" "}
          OF EUPHORIC <img className={styles.cup} src="images/cup.png"></img>{" "}
          <img className={styles.phone} src="images/phone.png"></img>{" "}
          <b>NOSTALGIA</b>{" "}
          <img className={styles.speaker} src="images/notice.png"></img> A NEXUS{" "}
          <img className={styles.trophy} src="images/trophy.png"></img> OF
          EUPHORIC <img className={styles.cup} src="images/cup.png"></img>{" "}
          <img className={styles.phone} src="images/phone.png"></img>{" "}
          <b>NOSTALGIA</b>{" "}
          <img className={styles.speaker} src="images/notice.png"></img> A NEXUS{" "}
          <img className={styles.trophy} src="images/trophy.png"></img> OF
          EUPHORIC <img className={styles.cup} src="images/cup.png"></img>{" "}
          <img className={styles.phone} src="images/phone.png"></img>{" "}
          <b>NOSTALGIA</b>{" "}
          <img className={styles.speaker} src="images/notice.png"></img> A NEXUS{" "}
          <img className={styles.trophy} src="images/trophy.png"></img> OF
          EUPHORIC <img className={styles.cup} src="images/cup.png"></img>{" "}
          <img className={styles.phone} src="images/phone.png"></img>{" "}
          <b>NOSTALGIA</b>{" "}
          <img className={styles.speaker} src="images/notice.png"></img> A NEXUS{" "}
          <img className={styles.trophy} src="images/trophy.png"></img> OF
          EUPHORIC <img className={styles.cup} src="images/cup.png"></img>{" "}
          <img className={styles.phone} src="images/phone.png"></img>{" "}
          <b>NOSTALGIA</b>{" "}
          <img className={styles.speaker} src="images/notice.png"></img> A NEXUS{" "}
          <img className={styles.trophy} src="images/trophy.png"></img> OF
          EUPHORIC <img className={styles.cup} src="images/cup.png"></img>{" "}
          <img className={styles.phone} src="images/phone.png"></img>{" "}
          <b>NOSTALGIA</b>{" "}
          <img className={styles.speaker} src="images/notice.png"></img> A NEXUS{" "}
          <img className={styles.trophy} src="images/trophy.png"></img> OF
          EUPHORIC <img className={styles.cup} src="images/cup.png"></img>{" "}
          <img className={styles.phone} src="images/phone.png"></img>{" "}
          <b>NOSTALGIA</b>{" "}
          <img className={styles.speaker} src="images/notice.png"></img> A NEXUS{" "}
          <img className={styles.trophy} src="images/trophy.png"></img> OF
          EUPHORIC <img className={styles.cup} src="images/cup.png"></img>{" "}
          <img className={styles.phone} src="images/phone.png"></img>{" "}
          <b>NOSTALGIA</b>{" "}
          <img className={styles.speaker} src="images/notice.png"></img> A NEXUS{" "}
          <img className={styles.trophy} src="images/trophy.png"></img> OF
          EUPHORIC <img className={styles.cup} src="images/cup.png"></img>{" "}
          <img className={styles.phone} src="images/phone.png"></img>{" "}
          <b>NOSTALGIA</b>{" "}
          <img className={styles.speaker} src="images/notice.png"></img> A NEXUS{" "}
          <img className={styles.trophy} src="images/trophy.png"></img> OF
          EUPHORIC <img className={styles.cup} src="images/cup.png"></img>{" "}
          <img className={styles.phone} src="images/phone.png"></img>{" "}
          <b>NOSTALGIA</b>{" "}
          <img className={styles.speaker} src="images/notice.png"></img> A NEXUS{" "}
          <img className={styles.trophy} src="images/trophy.png"></img> OF
          EUPHORIC <img className={styles.cup} src="images/cup.png"></img>{" "}
          <img className={styles.phone} src="images/phone.png"></img>{" "}
          <b>NOSTALGIA</b>{" "}
          <img className={styles.speaker} src="images/notice.png"></img> A NEXUS{" "}
          <img className={styles.trophy} src="images/trophy.png"></img> OF
          EUPHORIC <img className={styles.cup} src="images/cup.png"></img>{" "}
          <img className={styles.phone} src="images/phone.png"></img>{" "}
          <b>NOSTALGIA</b>{" "}
          <img className={styles.speaker} src="images/notice.png"></img>
        </h2>
      </div>
      <div className={styles.herohead}>
        <h1 className={styles.mainhead}>
          {" "}
          <img className={styles.rainbow2} src="images/rainbow.png"></img>{" "}
          ABHIVYAKTI <img className={styles.star} src="images/star.png"></img>{" "}
          2023 <hr className={styles.circle}></hr>{" "}
          <img className={styles.rainbow} src="images/rainbow.png"></img>{" "}
          ABHIVYAKTI 2023{" "}
          <img className={styles.rainbow2} src="images/rainbow.png"></img>{" "}
          ABHIVYAKTI <img className={styles.star} src="images/star.png"></img>{" "}
          2023 <hr className={styles.circle}></hr>{" "}
          <img className={styles.rainbow} src="images/rainbow.png"></img>{" "}
          <img className={styles.rainbow2} src="images/rainbow.png"></img>{" "}
          ABHIVYAKTI <img className={styles.star} src="images/star.png"></img>{" "}
          2023 <hr className={styles.circle}></hr>{" "}
          <img className={styles.rainbow} src="images/rainbow.png"></img>{" "}
          ABHIVYAKTI 2023{" "}
          <img className={styles.rainbow2} src="images/rainbow.png"></img>{" "}
          ABHIVYAKTI <img className={styles.star} src="images/star.png"></img>{" "}
          2023 <hr className={styles.circle}></hr>{" "}
          <img className={styles.rainbow} src="images/rainbow.png"></img>{" "}
          ABHIVYAKTI 2023{" "}
          <img className={styles.rainbow2} src="images/rainbow.png"></img>{" "}
          ABHIVYAKTI <img className={styles.star} src="images/star.png"></img>{" "}
          2023 <hr className={styles.circle}></hr>{" "}
          <img className={styles.rainbow} src="images/rainbow.png"></img>{" "}
          ABHIVYAKTI 2023{" "}
          <img className={styles.rainbow2} src="images/rainbow.png"></img>{" "}
          ABHIVYAKTI <img className={styles.star} src="images/star.png"></img>{" "}
          2023 <hr className={styles.circle}></hr>{" "}
          <img className={styles.rainbow} src="images/rainbow.png"></img>{" "}
          ABHIVYAKTI 2023{" "}
          <img className={styles.rainbow2} src="images/rainbow.png"></img>{" "}
          ABHIVYAKTI <img className={styles.star} src="images/star.png"></img>{" "}
          2023 <hr className={styles.circle}></hr>{" "}
          <img className={styles.rainbow} src="images/rainbow.png"></img>{" "}
          ABHIVYAKTI 2023{" "}
          <img className={styles.rainbow2} src="images/rainbow.png"></img>{" "}
          ABHIVYAKTI <img className={styles.star} src="images/star.png"></img>{" "}
          2023 <hr className={styles.circle}></hr>{" "}
          <img className={styles.rainbow} src="images/rainbow.png"></img>{" "}
          ABHIVYAKTI 2023
        </h1>
      </div>
      <div className={styles.herohead}>
        <h2 className={styles.basichead2}>
          IT's REWIND <img className={styles.time} src="images/time.png"></img>{" "}
          TIME <hr className={styles.circle2}></hr> IT's REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND{" "}
          <img className={styles.time} src="images/time.png"></img> TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND{" "}
          <img className={styles.time} src="images/time.png"></img> TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND{" "}
          <img className={styles.time} src="images/time.png"></img> TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND{" "}
          <img className={styles.time} src="images/time.png"></img> TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND{" "}
          <img className={styles.time} src="images/time.png"></img> TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND{" "}
          <img className={styles.time} src="images/time.png"></img> TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND{" "}
          <img className={styles.time} src="images/time.png"></img> TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND{" "}
          <img className={styles.time} src="images/time.png"></img> TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND{" "}
          <img className={styles.time} src="images/time.png"></img> TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND{" "}
          <img className={styles.time} src="images/time.png"></img> TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND{" "}
          <img className={styles.time} src="images/time.png"></img> TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND{" "}
          <img className={styles.time} src="images/time.png"></img> TIME{" "}
          <hr className={styles.circle2}></hr> IT's REWIND TIME{" "}
          <hr className={styles.circle2}></hr>{" "}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
