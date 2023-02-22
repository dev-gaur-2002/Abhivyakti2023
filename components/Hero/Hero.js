import { useEffect, useState } from "react";
import styles from "../../styles/Hero.module.css";
import trophyImg from "../../public/images/trophy.svg";
import cupImg from "../../public/images/cup.svg";
import mobileImg from "../../public/images/mobile.svg";
import speakerImg from "../../public/images/notice.svg";
import rainbowImg from "../../public/images/rainbow.svg";
import starImg from "../../public/images/star.svg";
import timeImg from "../../public/images/time.svg";
import Image from "next/image";

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
          A NEXUS{" "}
          <Image className={styles.trophy} src={trophyImg} alt="trophy" /> OF
          EUPHORIC <Image className={styles.cup} src={cupImg} alt="cup" />{" "}
          <Image className={styles.phone} src={mobileImg} alt="mobile" />{" "}
          <b>NOSTALGIA</b>{" "}
          <Image className={styles.speaker} src={speakerImg} alt="speaker" />A
          NEXUS <Image className={styles.trophy} src={trophyImg} alt="trophy" />{" "}
          OF EUPHORIC <Image className={styles.cup} src={cupImg} alt="cup" />{" "}
          <Image className={styles.phone} src={mobileImg} alt="mobile" />{" "}
          <b>NOSTALGIA</b>{" "}
          <Image className={styles.speaker} src={speakerImg} alt="speaker" /> A
          NEXUS <Image className={styles.trophy} src={trophyImg} alt="trophy" />{" "}
          OF EUPHORIC <Image className={styles.cup} src={cupImg} alt="cup" />{" "}
          <Image className={styles.phone} src={mobileImg} alt="mobile" />{" "}
          <b>NOSTALGIA</b>{" "}
          <Image className={styles.speaker} src={speakerImg} alt="speaker" /> A
          NEXUS <Image className={styles.trophy} src={trophyImg} alt="trophy" />{" "}
          OF EUPHORIC <Image className={styles.cup} src={cupImg} alt="cup" />{" "}
          <Image className={styles.phone} src={mobileImg} alt="mobile" />{" "}
          <b>NOSTALGIA</b>{" "}
          <Image className={styles.speaker} src={speakerImg} alt="speaker" /> A
          NEXUS <Image className={styles.trophy} src={trophyImg} alt="trophy" />{" "}
          OF EUPHORIC <Image className={styles.cup} src={cupImg} alt="cup" />{" "}
          <Image className={styles.phone} src={mobileImg} alt="mobile" />{" "}
          <b>NOSTALGIA</b>{" "}
          <Image className={styles.speaker} src={speakerImg} alt="speaker" /> A
          NEXUS <Image className={styles.trophy} src={trophyImg} alt="trophy" />{" "}
          OF EUPHORIC <Image className={styles.cup} src={cupImg} alt="cup" />{" "}
          <Image className={styles.phone} src={mobileImg} alt="mobile" />{" "}
          <b>NOSTALGIA</b>{" "}
          <Image className={styles.speaker} src={speakerImg} alt="speaker" /> A
          NEXUS <Image className={styles.trophy} src={trophyImg} alt="trophy" />{" "}
          OF EUPHORIC <Image className={styles.cup} src={cupImg} alt="cup" />{" "}
          <Image className={styles.phone} src={mobileImg} alt="mobile" />{" "}
          <b>NOSTALGIA</b>{" "}
          <Image className={styles.speaker} src={speakerImg} alt="speaker" /> A
          NEXUS <Image className={styles.trophy} src={trophyImg} alt="trophy" />{" "}
          OF EUPHORIC <Image className={styles.cup} src={cupImg} alt="cup" />{" "}
          <Image className={styles.phone} src={mobileImg} alt="mobile" />{" "}
          <b>NOSTALGIA</b>{" "}
          <Image className={styles.speaker} src={speakerImg} alt="speaker" />A
          NEXUS <Image className={styles.trophy} src={trophyImg} alt="trophy" />{" "}
          OF EUPHORIC <Image className={styles.cup} src={cupImg} alt="cup" />{" "}
          <Image className={styles.phone} src={mobileImg} alt="mobile" />{" "}
          <b>NOSTALGIA</b>{" "}
          <Image className={styles.speaker} src={speakerImg} alt="speaker" /> A
          NEXUS <Image className={styles.trophy} src={trophyImg} alt="trophy" />{" "}
          OF EUPHORIC <Image className={styles.cup} src={cupImg} alt="cup" />{" "}
          <Image className={styles.phone} src={mobileImg} alt="mobile" />{" "}
          <b>NOSTALGIA</b>{" "}
          <Image className={styles.speaker} src={speakerImg} alt="speaker" /> A
          NEXUS <Image className={styles.trophy} src={trophyImg} alt="trophy" />{" "}
          OF EUPHORIC <Image className={styles.cup} src={cupImg} alt="cup" />{" "}
          <Image className={styles.phone} src={mobileImg} alt="mobile" />{" "}
          <b>NOSTALGIA</b>{" "}
          <Image className={styles.speaker} src={speakerImg} alt="speaker" /> A
          NEXUS <Image className={styles.trophy} src={trophyImg} alt="trophy" />{" "}
          OF EUPHORIC <Image className={styles.cup} src={cupImg} alt="cup" />{" "}
          <Image className={styles.phone} src={mobileImg} alt="mobile" />{" "}
          <b>NOSTALGIA</b>{" "}
          <Image className={styles.speaker} src={speakerImg} alt="speaker" />
        </h2>
      </div>
      <div className={styles.herohead}>
        <h1 className={styles.mainhead}>
          {" "}
          <Image
            className={styles.rainbow2}
            src={rainbowImg}
            alt="rainbow"
          />{" "}
          ABHIVYAKTI <Image className={styles.star} src={starImg} alt="star" />{" "}
          2023 <hr className={styles.circle}></hr>{" "}
          <Image className={styles.rainbow} src={rainbowImg} alt="rainbow" />{" "}
          ABHIVYAKTI 2023{" "}
          <Image className={styles.rainbow2} src={rainbowImg} alt="rainbow" />{" "}
          ABHIVYAKTI <Image className={styles.star} src={starImg} alt="star" />{" "}
          2023 <hr className={styles.circle}></hr>{" "}
          <Image className={styles.rainbow} src={rainbowImg} alt="rainbow" />{" "}
          ABHIVYAKTI 2023{" "}
          <Image className={styles.rainbow2} src={rainbowImg} alt="rainbow" />{" "}
          ABHIVYAKTI <Image className={styles.star} src={starImg} alt="star" />{" "}
          2023 <hr className={styles.circle}></hr>{" "}
          <Image className={styles.rainbow} src={rainbowImg} alt="rainbow" />{" "}
          ABHIVYAKTI 2023{" "}
          <Image className={styles.rainbow2} src={rainbowImg} alt="rainbow" />{" "}
          ABHIVYAKTI <Image className={styles.star} src={starImg} alt="star" />{" "}
          2023 <hr className={styles.circle}></hr>{" "}
          <Image className={styles.rainbow} src={rainbowImg} alt="rainbow" />{" "}
          ABHIVYAKTI 2023{" "}
          <Image className={styles.rainbow2} src={rainbowImg} alt="rainbow" />{" "}
          ABHIVYAKTI <Image className={styles.star} src={starImg} alt="star" />{" "}
          2023 <hr className={styles.circle}></hr>{" "}
          <Image className={styles.rainbow} src={rainbowImg} alt="rainbow" />{" "}
          ABHIVYAKTI 2023{" "}
          <Image className={styles.rainbow2} src={rainbowImg} alt="rainbow" />{" "}
          ABHIVYAKTI <Image className={styles.star} src={starImg} alt="star" />{" "}
          2023 <hr className={styles.circle}></hr>{" "}
          <Image className={styles.rainbow} src={rainbowImg} alt="rainbow" />{" "}
          ABHIVYAKTI 2023{" "}
          <Image className={styles.rainbow2} src={rainbowImg} alt="rainbow" />{" "}
          ABHIVYAKTI <Image className={styles.star} src={starImg} alt="star" />{" "}
          2023 <hr className={styles.circle}></hr>{" "}
          <Image className={styles.rainbow} src={rainbowImg} alt="rainbow" />{" "}
          ABHIVYAKTI 2023{" "}
          <Image className={styles.rainbow2} src={rainbowImg} alt="rainbow" />{" "}
          ABHIVYAKTI <Image className={styles.star} src={starImg} alt="star" />{" "}
          2023 <hr className={styles.circle}></hr>{" "}
          <Image className={styles.rainbow} src={rainbowImg} alt="rainbow" />{" "}
          ABHIVYAKTI 2023{" "}
        </h1>
      </div>
      <div className={styles.herohead}>
        <h2 className={styles.basichead2}>
          IT&apos;s REWIND{" "}
          <Image className={styles.time} src={timeImg} alt="time" /> TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND{" "}
          <Image className={styles.time} src={timeImg} alt="time" /> TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND{" "}
          <Image className={styles.time} src={timeImg} alt="time" /> TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND{" "}
          <Image className={styles.time} src={timeImg} alt="time" /> TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND{" "}
          <Image className={styles.time} src={timeImg} alt="time" /> TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND{" "}
          <Image className={styles.time} src={timeImg} alt="time" /> TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND{" "}
          <Image className={styles.time} src={timeImg} alt="time" /> TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND{" "}
          <Image className={styles.time} src={timeImg} alt="time" /> TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND{" "}
          <Image className={styles.time} src={timeImg} alt="time" /> TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND{" "}
          <Image className={styles.time} src={timeImg} alt="time" /> TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND{" "}
          <Image className={styles.time} src={timeImg} alt="time" /> TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND{" "}
          <Image className={styles.time} src={timeImg} alt="time" /> TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND{" "}
          <Image className={styles.time} src={timeImg} alt="time" /> TIME{" "}
          <hr className={styles.circle2}></hr> IT&apos;s REWIND TIME{" "}
          <hr className={styles.circle2}></hr>{" "}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
