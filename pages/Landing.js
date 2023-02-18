import React from "react";
import styles from "../styles/Landing.module.css";
import Image from "next/image";

const Landing = () => {
  return (
    <div className={styles["Landing"]}>
      <div className={styles["Landing-flex"]}>
        <div className={styles["box1"]}>
          <div className={styles["feelthe"]}>
            <svg
              width="170"
              height="134"
              viewBox="0 0 170 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M132.388 54.6596L140.444 57.0224L138.491 60.7596L137.981 61.7348L139 62.1492L146.612 65.2434L143.622 68.2118L142.657 69.1695L143.859 69.8053L150.761 73.4584L146.863 75.6796L145.462 76.4784L146.801 77.3783L152.81 81.418L148.077 82.9046L146.353 83.446L147.727 84.6192L152.732 88.8919L147.215 89.6258L145.333 89.8761L146.604 91.2864L150.551 95.6681L144.313 95.6066L142.446 95.5882L143.465 97.1525L146.332 101.552L139.475 100.643L137.769 100.417L138.417 102.011L140.188 106.368L132.865 104.568L131.418 104.213L131.637 105.687L132.273 109.959L124.705 107.254L123.549 106.841L123.378 108.056L122.795 112.192L115.264 108.615L114.374 108.193L113.938 109.076L112.018 112.965L104.851 108.61L104.168 108.195L103.613 108.77L100.277 112.222L93.8078 107.243L93.2707 106.83L92.6878 107.175L87.9692 109.974L82.4924 104.566L82.0575 104.137L81.477 104.328L75.5207 106.29L71.2721 100.677L70.9159 100.206L70.3317 100.291L63.3643 101.297L60.5063 95.7151L60.2277 95.1711L59.6166 95.1709L51.9203 95.1677L50.5306 89.8607L50.3589 89.2051L49.6864 89.1216L41.5846 88.1161L41.6389 83.3156L41.6479 82.5163L40.8702 82.3315L32.7116 80.392L34.0792 76.2761L34.3897 75.3414L33.4599 75.0167L25.5886 72.2677L28.0808 68.916L28.813 67.9313L27.7008 67.4129L20.416 64.0172L23.8715 61.4255L25.0637 60.5313L23.7843 59.767L17.3107 55.8999L21.6325 54.0458L23.2138 53.3674L21.8416 52.3293L16.3248 48.1556L21.4564 47.0412L23.281 46.645L21.94 45.3458L17.4598 41.0051L23.3471 40.6626L25.242 40.5523L24.0795 39.0519L20.6708 34.6519L27.2343 35.1306L29.0364 35.262L28.1907 33.6652L25.869 29.2812L32.9826 30.6312L34.5674 30.9319L34.1319 29.3787L32.9209 25.0595L40.3982 27.3123L41.6996 27.7044L41.6867 26.3452L41.6464 22.1322L49.2351 25.281L50.2515 25.7027L50.5743 24.6507L51.8115 20.6192L59.2027 24.601L59.9809 25.0202L60.4925 24.2992L63.1165 20.6011L69.9747 25.2904L70.5781 25.703L71.1543 25.2533L75.1932 22.1017L81.2 27.3214L81.6817 27.74L82.2643 27.4794L87.6258 25.0804L92.5136 30.6195L92.9075 31.066L93.4877 30.9324L99.9819 29.4375L103.551 35.0654L103.869 35.5682L104.463 35.5275L111.833 35.0229L113.961 40.4978L114.192 41.0927L114.829 41.1335L122.771 41.6427L123.428 46.7232L123.522 47.4481L124.241 47.5787L132.416 49.0636L131.683 53.5384L131.54 54.4108L132.388 54.6596Z"
                stroke="#380E7C"
                stroke-width="2"
              />
              <path
                d="M49.8208 48.1675L45.7359 46.4898L44.5019 49.4942L48.3204 51.0626L47.8341 52.2466L44.0156 50.6783L42.1677 55.1776L40.7468 54.594L44.8074 44.7074L50.3132 46.9687L49.8208 48.1675ZM49.9301 56.9647L54.1334 58.691L53.641 59.8899L48.0169 57.5799L52.0775 47.6933L57.5684 49.9486L57.076 51.1474L53.006 49.4757L51.7781 52.4654L55.6113 54.0398L55.1311 55.209L51.2978 53.6346L49.9301 56.9647ZM57.4893 60.0694L61.6925 61.7957L61.2002 62.9945L55.576 60.6846L59.6367 50.798L65.1276 53.0532L64.6352 54.2521L60.5651 52.5804L59.3372 55.5701L63.1705 57.1445L62.6902 58.3137L58.857 56.7393L57.4893 60.0694ZM65.0484 63.174L68.7485 64.6937L68.2561 65.8925L63.1352 63.7893L67.1958 53.9027L68.6166 54.4863L65.0484 63.174ZM77.3994 59.5637L74.8241 58.506L75.3408 57.248L81.8973 59.9409L81.3806 61.1989L78.8054 60.1412L75.2615 68.7698L73.8555 68.1923L77.3994 59.5637ZM86.9571 66.9314L88.6835 62.7281L90.1043 63.3117L86.0437 73.1983L84.6229 72.6147L86.4708 68.1154L82.534 66.4985L80.686 70.9977L79.2652 70.4142L83.3258 60.5276L84.7466 61.1111L83.0203 65.3144L86.9571 66.9314ZM90.2985 73.5447L94.5018 75.2711L94.0094 76.4699L88.3853 74.16L92.4459 64.2734L97.9368 66.5286L97.4444 67.7274L93.3744 66.0558L92.1464 69.0454L95.9797 70.6198L95.4995 71.789L91.6662 70.2146L90.2985 73.5447ZM103.239 68.7064L102.245 77.9497L108.035 70.6759L109.574 71.3081L102.331 79.8878L100.821 79.2677L101.7 68.0742L103.239 68.7064ZM112.266 72.4138L108.205 82.3004L106.784 81.7169L110.845 71.8303L112.266 72.4138ZM119.244 78.2031C118.867 79.1207 118.216 79.6258 117.29 79.7183C117.824 80.2145 118.137 80.7175 118.227 81.2274C118.331 81.7315 118.252 82.3042 117.988 82.9456C117.619 83.8434 117.058 84.4375 116.305 84.7277C115.552 85.0179 114.632 84.9401 113.547 84.4943L110.542 83.2603L114.603 73.3737L116.423 74.1214C117.006 74.3605 117.428 74.5397 117.69 74.659C119.383 75.4233 119.901 76.6047 119.244 78.2031ZM115.586 75.0229L114.37 77.9829L115.821 78.5787C116.267 78.7274 116.663 78.7172 117.01 78.548C117.36 78.369 117.61 78.097 117.76 77.7319C117.914 77.3569 117.988 77.0645 117.982 76.8544C117.986 76.6485 117.954 76.4739 117.886 76.3306C117.828 76.1914 117.705 76.0546 117.518 75.9202C117.227 75.7313 116.815 75.5274 116.282 75.3086L115.586 75.0229ZM113.758 83.18C115.159 83.7554 116.099 83.461 116.577 82.2967C116.82 81.7047 116.807 81.1747 116.538 80.7067C116.352 80.2613 115.854 79.8725 115.045 79.5401L113.921 79.0782L112.456 82.645L113.758 83.18ZM120.549 85.9694L124.753 87.6957L124.26 88.8945L118.636 86.5846L122.697 76.698L128.188 78.9532L127.695 80.1521L123.625 78.4804L122.397 81.4701L126.231 83.0445L125.75 84.2137L121.917 82.6393L120.549 85.9694Z"
                fill="#380E7C"
              />
            </svg>
          </div>
          <span className={styles["follow"]}>
            <svg
              width="128"
              height="134"
              viewBox="0 0 128 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M65.5379 5.72141L64 3.87155L62.4621 5.72141L49.2521 21.6107L29.2256 16.5206L26.894 15.928L26.7371 18.3286L25.3896 38.9479L6.19584 46.6012L3.96127 47.4922L5.24535 49.5265L16.2749 67L5.24535 84.4735L3.96127 86.5078L6.19584 87.3988L25.3896 95.0521L26.7371 115.671L26.894 118.072L29.2256 117.479L49.2521 112.389L62.4621 128.279L64 130.128L65.5379 128.279L78.7479 112.389L98.7745 117.479L101.106 118.072L101.263 115.671L102.61 95.0521L121.804 87.3988L124.039 86.5078L122.755 84.4735L111.725 67L122.755 49.5265L124.039 47.4922L121.804 46.6012L102.61 38.9479L101.263 18.3286L101.106 15.928L98.7745 16.5206L78.7479 21.6107L65.5379 5.72141Z"
                fill="#F8A41E"
                stroke="#FBA421"
                stroke-width="4"
              />
              <path
                d="M64 18.5642L74.9119 31.6894L75.3154 32.1747L75.9272 32.0192L92.4698 27.8146L93.583 44.8469L93.6241 45.4768L94.2105 45.7106L110.065 52.0325L100.954 66.4662L100.617 67L100.954 67.5338L110.065 81.9675L94.2105 88.2894L93.6241 88.5232L93.583 89.1531L92.4698 106.185L75.9272 101.981L75.3154 101.825L74.9119 102.311L64 115.436L53.0881 102.311L52.6846 101.825L52.0728 101.981L35.5302 106.185L34.417 89.1531L34.3759 88.5232L33.7895 88.2894L17.9348 81.9675L27.0456 67.5338L27.3826 67L27.0456 66.4662L17.9348 52.0325L33.7895 45.7106L34.3759 45.4768L34.417 44.8469L35.5302 27.8146L52.0728 32.0192L52.6846 32.1747L53.0881 31.6894L64 18.5642Z"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </span>
          <p>
            A stage to showcase who you truly are. A savory episode of{" "}
            <span className={styles["Enter"]}>entertainment</span> and
            exhilaration.
          </p>
          <div className={styles["blue-cirle"]}>
            <svg
              width="83"
              height="83"
              viewBox="0 0 83 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="41.5" cy="41.5" r="41.5" fill="#3E28C9" />
              <path
                d="M26.7093 53.274L23.7768 43.4837L21.9551 52.1091L20.7673 52.4649L14.4847 46.2669L17.4172 56.0572L15.2713 56.6999L11.1969 43.097L13.496 42.4084L20.4889 49.3748L22.5007 39.7112L24.7998 39.0226L28.8742 52.6255L26.7093 53.274ZM37.5651 50.1268C36.6071 50.4137 35.6748 50.4842 34.7681 50.3382C33.8704 50.1756 33.0385 49.8611 32.2724 49.3946C31.5153 48.9115 30.8592 48.3008 30.3039 47.5624C29.7487 46.824 29.341 46.0205 29.0809 45.152C28.8093 44.2451 28.7088 43.3287 28.7794 42.4029C28.8628 41.4732 29.0963 40.6029 29.4798 39.7921C29.8632 38.9814 30.3955 38.2722 31.0764 37.6646C31.7536 37.0442 32.5583 36.5943 33.4907 36.3151C34.4487 36.0281 35.3784 35.9723 36.28 36.1477C37.1905 36.3065 38.0243 36.6274 38.7814 37.1105C39.5385 37.5935 40.1947 38.2043 40.7499 38.9427C41.3013 39.6683 41.7052 40.459 41.9615 41.3148C42.2331 42.2216 42.3272 43.1399 42.2438 44.0696C42.1732 44.9955 41.9461 45.8638 41.5626 46.6746C41.1753 47.4726 40.6431 48.1818 39.966 48.8022C39.2978 49.406 38.4975 49.8475 37.5651 50.1268ZM31.265 44.4978C31.4563 45.1364 31.7377 45.7272 32.1091 46.2701C32.4932 46.8092 32.9394 47.2532 33.4475 47.6021C33.9556 47.9509 34.5136 48.1875 35.1215 48.3116C35.7255 48.423 36.3532 48.3811 37.0046 48.186C37.6688 47.987 38.2207 47.6686 38.6602 47.2308C39.1086 46.7763 39.4409 46.2593 39.657 45.6795C39.8858 45.096 40.0081 44.4818 40.0237 43.8368C40.0393 43.1919 39.9553 42.5629 39.7716 41.9498C39.5765 41.2984 39.2888 40.7095 38.9084 40.1832C38.5243 39.6441 38.08 39.2065 37.5757 38.8704C37.0676 38.5215 36.5115 38.2914 35.9075 38.18C35.2996 38.0559 34.6764 38.0895 34.0378 38.2808C33.3736 38.4797 32.8173 38.8064 32.3688 39.2609C31.9293 39.6987 31.5932 40.203 31.3605 40.7738C31.1406 41.3407 31.0248 41.953 31.013 42.6107C30.9974 43.2557 31.0814 43.8847 31.265 44.4978ZM51.8595 45.8452C50.9015 46.1322 49.9692 46.2026 49.0626 46.0567C48.1648 45.8941 47.3329 45.5795 46.5669 45.1131C45.8098 44.63 45.1536 44.0193 44.5984 43.2808C44.0432 42.5424 43.6355 41.739 43.3753 40.8704C43.1037 39.9636 43.0032 39.0472 43.0738 38.1213C43.1573 37.1916 43.3907 36.3214 43.7742 35.5106C44.1577 34.6998 44.6899 33.9906 45.3709 33.383C46.048 32.7626 46.8528 32.3128 47.7852 32.0335C48.7431 31.7466 49.6729 31.6908 50.5744 31.8662C51.4849 32.0249 52.3187 32.3458 53.0759 32.8289C53.833 33.312 54.4891 33.9227 55.0443 34.6611C55.5957 35.3868 55.9996 36.1775 56.2559 37.0332C56.5276 37.9401 56.6217 38.8584 56.5382 39.7881C56.4676 40.7139 56.2405 41.5823 55.8571 42.3931C55.4697 43.1911 54.9375 43.9003 54.2604 44.5206C53.5922 45.1244 52.7919 45.566 51.8595 45.8452ZM45.5594 40.2162C45.7507 40.8549 46.0321 41.4456 46.4035 41.9886C46.7877 42.5277 47.2338 42.9717 47.7419 43.3205C48.2501 43.6694 48.8081 43.9059 49.4159 44.03C50.0199 44.1414 50.6476 44.0995 51.2991 43.9044C51.9632 43.7055 52.5151 43.3871 52.9546 42.9492C53.4031 42.4948 53.7353 41.9777 53.9514 41.398C54.1803 40.8145 54.3025 40.2002 54.3181 39.5553C54.3337 38.9104 54.2497 38.2814 54.0661 37.6683C53.8709 37.0169 53.5832 36.428 53.2029 35.9017C52.8187 35.3626 52.3745 34.925 51.8701 34.5889C51.362 34.24 50.8059 34.0099 50.2019 33.8985C49.5941 33.7744 48.9708 33.8079 48.3322 33.9992C47.668 34.1982 47.1117 34.5249 46.6632 34.9793C46.2237 35.4172 45.8876 35.9215 45.6549 36.4922C45.435 37.0592 45.3192 37.6715 45.3074 38.3292C45.2918 38.9741 45.3758 39.6031 45.5594 40.2162ZM60.5308 43.1436L56.4564 29.5407L61.2845 28.0945C62.3829 27.7655 63.3944 27.6574 64.319 27.7702C65.2563 27.8791 66.0914 28.1579 66.8243 28.6065C67.5699 29.0513 68.2076 29.6467 68.7373 30.3927C69.2631 31.126 69.6657 31.9589 69.9449 32.8913C70.2548 33.9258 70.3764 34.9125 70.3095 35.8511C70.2517 36.7731 70.0253 37.6204 69.6303 38.3929C69.2315 39.1526 68.6731 39.8209 67.9551 40.3978C67.2333 40.962 66.3679 41.3952 65.3589 41.6974L60.5308 43.1436ZM67.7608 33.5455C67.5466 32.8302 67.2474 32.203 66.8632 31.6639C66.4918 31.121 66.0514 30.6961 65.5419 30.3894C65.0287 30.0699 64.4611 29.8711 63.8392 29.7929C63.2173 29.7147 62.5551 29.7809 61.8526 29.9913L59.1703 30.7947L62.1085 40.6041L64.7907 39.8007C65.506 39.5864 66.1019 39.2757 66.5785 38.8685C67.0639 38.4448 67.4268 37.9603 67.6672 37.415C67.9165 36.8532 68.047 36.2435 68.0588 35.5858C68.0705 34.9281 67.9712 34.248 67.7608 33.5455Z"
                fill="#ECC3FF"
              />
            </svg>
          </div>

          <div class="white-star">
            <svg width="98" height="97" viewBox="0 0 98 97" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49 4L59.6512 20.7361L78.5682 14.762L75.9698 34.429L94.3012 42.0122L79.6689 55.4078L88.8372 73L69.0177 73.8562L64.7329 93.2259L49 81.142L33.2671 93.2259L28.9823 73.8562L9.16283 73L18.3311 55.4078L3.69884 42.0122L22.0302 34.429L19.4318 14.762L38.3488 20.7361L49 4Z" stroke="white" stroke-width="4"/>
            <path d="M49 11.667L57.8759 25.6137L73.6401 20.6353L71.4748 37.0245L86.7509 43.3438L74.5574 54.5068L82.1976 69.167L65.6814 69.8805L62.1107 86.0219L49 75.952L35.8892 86.0219L32.3185 69.8805L15.8023 69.167L23.4426 54.5068L11.249 43.3438L26.5252 37.0245L24.3598 20.6353L40.124 25.6137L49 11.667Z" fill="white"/>
            </svg>
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
