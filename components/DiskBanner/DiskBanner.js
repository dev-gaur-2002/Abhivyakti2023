import React from "react";
import styles from "../../styles/DiskBanner.module.css";
import Image from "next/image";
import abhiImg from "../../public/images/Abhivyakti.svg";
import playBtn from "../../public/images/play-button.png";

import { useEffect, useState } from "react";

const DiskBanner = () => {
  const [headerFixed, setHeaderFixed] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setHeaderFixed(true);
    });

    window.addEventListener("scroll", () => {
      const distanceFromTop = window.scrollY;

      if (distanceFromTop >= 770) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    });
  }, []);

  return (
    <>
      <div className={styles["buffer"]} />
      <div className={styles["wrapper"]}>
        <div
          className={`${styles["section-header"]} ${
            headerFixed ? styles["fixed-header"] : ""
          }`}
        >
          <div className={styles["header--line"]} />
          <div className={styles["header--pill"]}>
            <Image src={abhiImg} alt="xyz" className={styles.logo} />
          </div>
        </div>

        {videoPlaying ? (
          <iframe
            width="80%"
            height="66%"
            src="https://www.youtube.com/embed/KMh-sfwSQdE"
            title="Abhivyakti&#39;23 Theme Reveal"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        ) : (
          <div className={styles["half-donout"]}>
            <div className={styles["big-circle"]} />
            <div className={styles["small-circle"]} />
            <Image
              className={styles["play-button"]}
              src={playBtn}
              alt="xyz"
              onClick={() => setVideoPlaying(true)}
            />
          </div>
        )}

        <div className={styles["section-footer"]}>
          <div className={styles["footer--line"]} />
          <div className={styles["footer--text"]}>Abhivyakti 2023</div>
        </div>
      </div>
    </>
    //   <iframe width="1366" height="485" src="https://www.youtube.com/embed/KMh-sfwSQdE" title="Abhivyakti&#39;23 Theme Reveal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  );
};

export default DiskBanner;
