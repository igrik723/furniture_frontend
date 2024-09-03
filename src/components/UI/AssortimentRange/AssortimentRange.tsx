import React from "react";
import styles from './AssortimentRange.module.css'
import table from '../../../assets/стол.png'
import cabinet from '../../../assets/тумбы.png'
import cupboard from '../../../assets/шкафы.png'
import { useNavigate } from "react-router-dom";

const AssortimentRange: React.FC = () => {
    const navigate = useNavigate()

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
                    onClick={() => navigate('/table') }
                    className={styles.imageWrapper}
                >
                    <img className={styles.table} src={table} alt="table"/>
                    <h4 className={styles.subTitle}>Столы</h4>
                </div>
                <div
                    onClick={() => navigate('/cabinet')}
                    className={styles.imageWrapper}
                >
                    <img className={styles.cabinet} src={cabinet} alt="cabinet"/>
                    <h4 className={styles.subTitle}>Тумбы</h4>
                </div>
                <div
                    onClick={() => navigate('/cupboard')}
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
