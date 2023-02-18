import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import Music from "../components/Musicevents/MusicEvents";
import DiskBanner from "../components/DiskBanner/DiskBanner";
import Hero from "../components/Hero/Hero";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhivyakti 2023</title>
      </Head>
      <Hero/>
      <DiskBanner />
      <Landing />
      <Music />
    </>
  );
}
