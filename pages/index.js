import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import Music from "../components/Musicevents/MusicEvents";
import DiskBanner from "../components/DiskBanner/DiskBanner";
import Hero from "../components/Hero/Hero";
import Landing from "../components/Landing";
import CardSection from "../components/CardSection/CardSection";
import EventSection2 from "../components/EventSection2/EventSection2";
import EventSection3 from "../components/EventSection3/EventSection3";
import EventSection4 from "../components/EventSection4/EventSection4";
import EventSection5 from "../components/EventSection5/EventSection5";

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
      <Hero/>
      <DiskBanner />
      <Landing />
      <Music />
      <CardSection/>
      <EventSection2/>
      <EventSection3/>
      <EventSection4/>
      <EventSection5/>
    </>
  );
}
