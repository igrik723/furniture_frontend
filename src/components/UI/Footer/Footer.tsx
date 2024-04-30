import React from "react";
import styles from './Footer.module.css';
import TG from '../../../assets/TG.png';
import VK from '../../../assets/VK.png';

const Footer: React.FC = () => {
    return ( 
        <div
            className={styles.wrapper}
        >
            <div
                className={styles.infoWrapper}
            >
                <div>
                    <h3
                        className={styles.title}
                    >
                        ООО Y-Мебель
                    </h3>
                </div>
                <div
                    className={styles.contactsWrapper}
                >
                    <div>
                        <h3
                            className={styles.title}
                        >
                            8-800-555-35-35
                        </h3>
                        <h3
                            className={styles.title}
                        >
                            ежедневно
                        </h3>
                    </div>
                    <div
                        className={styles.logoWrapper}
                    >
                        <img className={styles.VK} src={VK} alt="VK"/>
                        <img src={TG} alt="TG"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;