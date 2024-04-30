import React from "react";
import styles from './Advantages.module.css'
import image1 from '../../../assets/image1.png'
import image2 from '../../../assets/image2.png'
import image3 from '../../../assets/image3.png'
import image4 from '../../../assets/image4.png'

const Advantages: React.FC = () => {
    return ( 
        <div
            className={styles.wrapper}
        >
            <h3 className={styles.mainTitle}>
                Почему все покупают у нас?
            </h3>
            <div
                className={styles.imagesWrapper}
            >
                <div
                    className={styles.imageWrapper}
                >
                    <img src={image1} />
                    <h4 className={styles.subTitle}>Качество</h4>
                </div>
                <div
                    className={styles.imageWrapper}
                >
                    <img  src={image2}/>
                    <h4 className={styles.subTitle}>Скорость</h4>
                </div>
                <div
                    className={styles.imageWrapper}
                >
                    <img  src={image3}/>
                    <h4 className={styles.subTitle}>Цены</h4>
                </div>
                <div
                    className={styles.imageWrapper}
                >
                    <img  src={image4}/>
                    <h4 className={styles.subTitle}>Удобство</h4>
                </div>
            </div>
        </div>
     );
}
 
export default Advantages
