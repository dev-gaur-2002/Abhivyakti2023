import React from "react";
import styles from "../styles/Landing.module.css";
import img1 from "../public/images/Group 7.svg";
import img2 from "../public/images/Group 6.svg";
import img3 from "../public/images/Group 9.svg";
import Image from "next/image";

const Landing = () => {
  return (
    <div className={styles["Landing"]}>
      <div className={styles["Landing-flex"]}>
        <div className={styles["box1"]}>
          <div className={styles["feelthe"]}>
            <Image src={img1} alt="#" />
          </div>
          <span className={styles["follow"]}>
            <Image src={img2} alt="#" />
          </span>
          <p>
            A stage to showcase who you truly are. A savory episode of{" "}
            <span className={styles["Enter"]}>entertainment</span> and
            exhilaration.
          </p>
          <div className={styles["blue-cirle"]}>MOOD</div>
          <div className={styles["star"]}>
            {" "}
            <Image src={img3} alt="#" />{" "}
          </div>
        </div>

        <div className={styles["box2"]}>
          <div className={styles["border-circle"]}>
            <svg viewBox="58 -42 500 600">
              <defs>
                <path id="curve" d="M110 180 A120 115 500 0 1 500 250" />
              </defs>
              <text className={styles["curved-text"]}>
                <textPath xlinkHref="#curve">
                  THE AUGHT-THE ERA OF 2000S
                </textPath>
              </text>
            </svg>
            {/* <div className={styles["curved-text"]}> THE AUGHT - THE ERA OF 2000S</div> */}
            <div className={styles["purple"]}></div>{" "}
          </div>
          <p>
            Its An opportunity to reminisce your{" "}
            <span className={styles["child"]}>childhood</span> nostalgia. The
            perfect spot to create{" "}
            <span className={styles["memo"]}>memories</span> and a fest worth
            joining.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
