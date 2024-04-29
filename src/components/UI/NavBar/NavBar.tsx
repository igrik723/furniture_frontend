import React from "react";
import styles from './NavBar.module.css'
import basket from '../../../assets/корзина.png'
import auth from '../../../assets/авторизация.png'
import search from '../../../assets/поиск.png'
import logo from '../../../assets/лого.jpg'


const NavBar = () => {
    return ( 
        <div
            className={styles.NavWrapper}
        >
            <img
                src={logo}
                className={styles.NavLogo}
            />
            <div
                className={styles.NavInputContainer}
            >
                <input
                    className={styles.NavInput}
                    placeholder="поиск"
                />
                <img
                    src={search}
                    className={styles.searchIcon}
                    alt="Search"
                />
            </div>
            
            <div
                className={styles.NavLogos}
            >
                <img
                    src={basket}
                    className={styles.basket}
                />
                <img
                    src={auth}
                    className={styles.auth}
                />
            </div>
        </div>
     );
}
 
export default NavBar;
