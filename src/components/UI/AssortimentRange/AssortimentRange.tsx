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
                    <img className={styles.table} src={table} alt="table"/>
                    <h4 className={styles.subTitle}>Столы</h4>
                </div>
                <div
                    className={styles.imageWrapper}
                >
                    <img className={styles.cabinet} src={cabinet} alt="cabinet"/>
                    <h4 className={styles.subTitle}>Тумбы</h4>
                </div>
                <div
                    className={styles.imageWrapper}
                >
                    <img className={styles.cupboard} src={cupboard} alt="cupboard"/>
                    <h4 className={styles.subTitle}>Шкафы</h4>
                </div>
                
            </div>
        </div>
     );
}
 
export default AssortimentRange
