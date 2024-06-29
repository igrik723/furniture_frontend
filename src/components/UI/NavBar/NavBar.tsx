import React from "react";
import styles from './NavBar.module.css'
import basket from '../../../assets/корзина.png'
import auth from '../../../assets/авторизация.png'
import search from '../../../assets/поиск.png'
import logo from '../../../assets/лого.jpg'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { closeAuthModal, closeBasketModal,  closeUserInfoModal, openAuthModal, openBasketModal, openUserInfoModal} from "../../../features/modal/modalSlice";
import BasketModal from "../../Modal/BasketModal/BasketModal";
import AuthModal from "../../Modal/AuthModal/AuthModal";
import UserInfoModal from "../../Modal/UserInfoModal/UserInfoModal";
import { Button } from "react-bootstrap";


const NavBar: React.FC = () => {
    const dispathch = useDispatch()
    const isAuthModalOpen = useSelector((state: RootState) => state.modal.isAuthModalOpen)
    const isBasketModalOpen = useSelector((state: RootState) => state.modal.isBasketModalOpen)
    const isUserInfoModalOpen = useSelector((state: RootState) => state.modal.isUserInfoModalOpen)
    const user = useSelector((state: RootState) => state.user)

    const handleAuthButtonClick = () => {
        if (user.token) {
            dispathch(openUserInfoModal())
        } else {
            dispathch(openAuthModal())
        }
    }

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
                <button
                    className={styles.basketBtn}
                    onClick={() => dispathch(openBasketModal())}
                >
                    <img
                        src={basket}
                        className={styles.basket}
                    />
                </button>
                
                <button
                    className={styles.authBtn}
                    onClick={handleAuthButtonClick}
                >
                    <img
                        src={auth}
                        className={styles.auth}
                    />
                </button>
            </div>
            <BasketModal open={isBasketModalOpen} onClose={() => dispathch(closeBasketModal())} />
            <AuthModal open={isAuthModalOpen} onClose={() => dispathch(closeAuthModal())} />
            <UserInfoModal open={isUserInfoModalOpen} onClose={() => dispathch(closeUserInfoModal())} user={user}/>
        </div>
     );
}
 
export default NavBar;
