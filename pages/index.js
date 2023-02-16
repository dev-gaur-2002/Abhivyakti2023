import Head from "next/head";
import styles from "../styles/Home.module.css";
import Music from "../components/Musicevents/MusicEvents";
import DiskBanner from "../components/DiskBanner/DiskBanner";

import Hero from "../components/Hero/Hero";
import Landing from "./Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhivyakti 2023</title>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.1.min.js"
        ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.js"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css"
        />
      </Head>

      <Hero />
      <Landing />
      <DiskBanner />
      <Music />
    </>
  );
}
