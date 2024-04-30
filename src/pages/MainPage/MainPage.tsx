import React from "react";
import NavBar from "../../components/UI/NavBar/NavBar";
import ImageSlider from "../../components/UI/ImageSlider/ImageSlider";
import styles from './MainPage.module.css'
import AssortimentRange from "../../components/UI/AssortimentRange/AssortimentRange";
import Advantages from "../../components/UI/Advantages/Advantages";
import Footer from "../../components/UI/Footer/Footer";

const MainPage = () => {
    return ( 
        <div
            className={styles.wrapper}
        >
            <NavBar />
            <ImageSlider />
            <AssortimentRange />
            <Advantages />
            <Footer/>
        </div>
     );
}
 
export default MainPage
