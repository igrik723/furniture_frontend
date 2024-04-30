import React from "react";
import NavBar from "../../components/UI/NavBar/NavBar";
import ImageSlider from "../../components/UI/ImageSlider/ImageSlider";
import styles from './MainPage.module.css'

const MainPage = () => {
    return ( 
        <div
            className={styles.wrapper}
        >
            <NavBar />
            <ImageSlider/>
        </div>
     );
}
 
export default MainPage
