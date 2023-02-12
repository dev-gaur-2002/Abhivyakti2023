import styles from "../../styles/MusicEvents.module.css"
import Header from "../header/header";
import React,{ useState,useEffect,useRef } from "react";
import Events from "../EventInfo/Events";
const Music = () =>{

  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 

    
    

    const zoomRef = useRef(null);
    const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const zoom = zoomRef.current;
      if (zoom) {
        const scroll = window.scrollY;
        zoom.style.transform = `translateX(${-scroll/1.5}px) scale(${1 - scroll / 950})`;
        if (scroll > 1000) {
            setAnimated(true);
          }
    }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
   
    return(
        <div className={styles.musicBackground} >
            <div>
            <Header/>
                <div className={styles.rightside} id={ animated ? 'animated' : 'notanimated'} ref={zoomRef} style={{ position: 'fixed'}}>

                     Brilliant Aural Experience Is What Attracts Crowds To These Competitions.

                </div>
                
            </div>    
            <div className={styles.leftside}  >
                    <Events/>
                </div>
        </div>
    )
    }

export default Music
