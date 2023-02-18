import React from "react";
import styles from "../../styles/DiskBanner.module.css";
import Image from "next/image";

import { useEffect,useState } from "react";


const Landing = () => {


  const [headerFixed, setHeaderFixed] = useState(false);

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



    useEffect(() => {
      const script = document.createElement("script");

      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js";
      script.async = true;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }, []);

    useEffect(() => {
      if (typeof window !== "undefined") {
        window.$(".popup-youtube").magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
        });
      }
    });

  return (
    <div className={styles["page"]}>
      <div className={styles["section-wrapper"]}>
        <div className={`${styles["section-header"]} ${
          headerFixed ? styles["fixed-header"] : ""
        }`}>
          <div className={styles["header--line"]} />
          <div className={styles["header--pill"]}>Abhivyakti</div>
        </div>

        <div className={styles["text-container"]}>
          <div className={styles["border-circle"]}>
            <svg viewBox="58 -42 500 600">
              <defs>
                <path id="curve" d="M110 180 A120 115 500 0 1 500 250" />
              </defs>
              <text className={styles["section-content"]}>
                <textPath xlinkHref="#curve">
                  THE AUGHT-THE ERA OF 2000S
                </textPath>
              </text>
            </svg>
            <div className={styles["inner-circle"]}></div>
            {/* <img src="images/play-button.png" className={styles["play-buttom"]}/> */}
            <div className={styles["play-button"]}>
              <a
                class="popup-youtube"
                href="https://www.youtube.com/watch?v=KMh-sfwSQdE"
              >
                <img src="images/play-button.png" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles["section-footer"]}>
          <div className={styles["footer--line"]} />
          <div className={styles["footer--text"]}>Abhivyakti 2023</div>
        </div>
      </div>
    </div>

    //   <iframe width="1366" height="485" src="https://www.youtube.com/embed/KMh-sfwSQdE" title="Abhivyakti&#39;23 Theme Reveal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  );
};

export default Landing;
