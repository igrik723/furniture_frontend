import React from "react";
import styles from './AssortimentRange.module.css'
import table from '../../../assets/стол.png'
import cabinet from '../../../assets/тумбы.png'
import cupboard from '../../../assets/шкафы.png'

const AssortimentRange: React.FC = () => {
    return ( 
        <div
            className={styles.wrapper}
        >
            <h3
                className={styles.mainTitle}
            >
                Ассортимент
            </h3>
            <div
                className={styles.imagesWrapper}
            >   
                <div
                    className={styles.imageWrapper}
                >
                    <img src={table} alt="table"/>
                    <h4>Столы</h4>
                </div>
                <div
                    className={styles.imageWrapper}
                >
                    <img src={cabinet} alt="cabinet"/>
                    <h4>Тумбы</h4>
                </div>
                <div
                    className={styles.imageWrapper}
                >
                    <img src={cupboard} alt="cupboard"/>
                    <h4>Шкафы</h4>
                </div>
                
            </div>
        </div>
     );
}
 
export default AssortimentRange
