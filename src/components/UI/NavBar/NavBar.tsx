// NavBar.tsx
import React from "react";
import { useState } from "react";
import styles from './NavBar.module.css';
import basket from '../../../assets/корзина.png';
import auth from '../../../assets/авторизация.png';
import logo from '../../../assets/лого.jpg';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { openAuthModal, openBasketModal, openUserInfoModal, closeAuthModal, closeBasketModal, closeUserInfoModal, openAddModelsModal, closeAddModelsModal } from "../../../features/modal/modalSlice";
import BasketModal from "../../Modal/BasketModal/BasketModal";
import AuthModal from "../../Modal/AuthModal/AuthModal";
import UserInfoModal from "../../Modal/UserInfoModal/UserInfoModal";
import { Button } from "react-bootstrap";
import AddModelsModal from "../../Modal/AddModelsModal/AddModelsModal";
import { useSearchModelsQuery } from "../../../app/services/furnitureModelApi";
import SearchList from "../SearchList/SearchList";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
    const dispatch = useDispatch();
    const isAuthModalOpen = useSelector((state: RootState) => state.modal.isAuthModalOpen);
    const isBasketModalOpen = useSelector((state: RootState) => state.modal.isBasketModalOpen);
    const isUserInfoModalOpen = useSelector((state: RootState) => state.modal.isUserInfoModalOpen);
    const isAddModelsModalOpen = useSelector((state: RootState) => state.modal.isAddModelsModalOpen);
    const user = useSelector((state: RootState) => state.user);

    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

    const { data: searchResults, isLoading, isError } = useSearchModelsQuery(debouncedSearchTerm, {
        skip: !debouncedSearchTerm,
    });

    const navigate = useNavigate()

    const handleAuthButtonClick = () => {
        if (user.token) {
            dispatch(openUserInfoModal());
        } else {
            dispatch(openAuthModal());
        }
    };

    return (
        <div>
            <div className={styles.NavWrapper}>
                <button
                    className={styles.LogoBtn}
                    onClick={() => navigate('/')}
                >
                    <img src={logo} className={styles.NavLogo} alt="Логотип" />
                </button>
                
                <Input onSearchChange={setDebouncedSearchTerm} />

                <div className={styles.NavLogos}>
                    <button className={styles.basketBtn} onClick={() => dispatch(openBasketModal())}>
                        <img src={basket} className={styles.basket} alt="Корзина" />
                    </button>

                    <button className={styles.authBtn} onClick={handleAuthButtonClick}>
                        <img src={auth} className={styles.auth} alt="Авторизация" />
                    </button>           
                    {user.role === 'Admin' && (
                        <Button onClick={() => dispatch(openAddModelsModal())}>
                            Добавить мебель
                        </Button>
                    )}
                </div>

                <BasketModal open={isBasketModalOpen} onClose={() => dispatch(closeBasketModal())} />
                <AuthModal open={isAuthModalOpen} onClose={() => dispatch(closeAuthModal())} />
                <UserInfoModal open={isUserInfoModalOpen} onClose={() => dispatch(closeUserInfoModal())} user={user} />
                <AddModelsModal open={isAddModelsModalOpen} onClose={() => dispatch(closeAddModelsModal())} />
            </div>
            
            {debouncedSearchTerm && (
                <SearchList results={searchResults || []} isLoading={isLoading} isError={isError} />
            )}
        </div>
    );
}

export default NavBar;
