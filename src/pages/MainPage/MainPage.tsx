import React from "react";
import NavBar from "../../components/UI/NavBar/NavBar";
import ImageSlider from "../../components/UI/ImageSlider/ImageSlider";
import styles from './MainPage.module.css'
import AssortimentRange from "../../components/UI/AssortimentRange/AssortimentRange";

const MainPage = () => {
    return ( 
        <div
            className={styles.wrapper}
        >
            <NavBar />
            <ImageSlider />
            <AssortimentRange/>
        </div>
     );
}
 
export default MainPage
