import React from "react";
import styles from './Advantages.module.css'
import image1 from '../../../assets/image1.png'
import image2 from '../../../assets/image2.png'
import image3 from '../../../assets/image3.png'
import image4 from '../../../assets/image4.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Advantages: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.6,
    });

    const cardVariants = {
        hidden: (direction: number) => ({
            opacity: 0,
            x: direction > 0 ? 200 : -200, // Слева или справа в зависимости от карточки
        }),
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeInOut",
            },
        },
    };

    const textVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.8,
            },
        },
    };

    return (
        <div className={styles.wrapper} ref={ref}>
            <h3 className={styles.mainTitle}>Почему все покупают у нас?</h3>
            <div className={styles.imagesWrapper}>
                <motion.div
                    className={styles.imageWrapper}
                    custom={-1}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"} 
                    variants={cardVariants}
                >
                    <img src={image1} alt="Качество" />
                    <motion.h4 className={styles.subTitle} variants={textVariants}>
                        Качество
                    </motion.h4>
                </motion.div>
                <motion.div
                    className={styles.imageWrapper}
                    custom={-1}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={cardVariants}
                >
                    <img src={image2} alt="Скорость" />
                    <motion.h4 className={styles.subTitle} variants={textVariants}>
                        Скорость
                    </motion.h4>
                </motion.div>
                <motion.div
                    className={styles.imageWrapper}
                    custom={1}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={cardVariants}
                >
                    <img src={image3} alt="Цены" />
                    <motion.h4 className={styles.subTitle} variants={textVariants}>
                        Цены
                    </motion.h4>
                </motion.div>
                <motion.div
                    className={styles.imageWrapper}
                    custom={1}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={cardVariants}
                >
                    <img src={image4} alt="Удобство" />
                    <motion.h4 className={styles.subTitle} variants={textVariants}>
                        Удобство
                    </motion.h4>
                </motion.div>
            </div>
        </div>
    );
}

export default Advantages;
