import React from "react";
import styles from './Advantages.module.css'

const Advantages: React.FC = () => {
    return ( 
        <div
            className={styles.wrapper}
        >
            <h3>Почему все покупают у нас?</h3>
            <div
                className={styles.imagesWrapper}
            >
                <div
                    className={styles.imageWrapper}
                >
                    <img />
                    <h4>Качестов</h4>
                </div>
                <div
                    className={styles.imageWrapper}
                >
                    <img />
                    <h4>Скорость</h4>
                </div>
                <div
                    className={styles.imageWrapper}
                >
                    <img />
                    <h4>Цены</h4>
                </div>
                <div
                    className={styles.imageWrapper}
                >
                    <img />
                    <h4>Удобство</h4>
                </div>
            </div>
        </div>
     );
}
 
export default Advantages
