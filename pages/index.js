import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Music from '../components/Musicevents/MusicEvents'


import Hero from '../components/Hero/Hero'
import Landing from './Landing'


export default function Home() {
  return (
    <>


      <Hero/>
      <Landing/>
      <Music/> 
    

    </>
  )
}
