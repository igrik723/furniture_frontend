import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useLoginMutation, useRegisterMutation } from '../../../app/services/userApi';
import { setUser } from '../../../features/user/userSlice';

interface AuthModalProps {
    open: boolean;
    onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [register] = useRegisterMutation();
    const [login] = useLoginMutation();
    const dispatch = useDispatch();

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = async () => {
        try {
            if (isLogin) {
                const response = await login({ email, password }).unwrap();
                dispatch(setUser({ token: response.token, email: response.email, name: response.name, address: response.address, phoneNumber: response.phoneNumber }));
            } else {
                const response = await register({ email, password, name, address, phoneNumber }).unwrap();
                dispatch(setUser({ token: response.token, email: response.email, name: response.name, address: response.address, phoneNumber: response.phoneNumber }));
            }
            onClose(); 
        } catch (error) {
            console.error('Ошибка при аутентификации:', error);
        }
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ ...modalStyle }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Button onClick={() => setIsLogin(true)} variant={isLogin ? 'contained' : 'outlined'}>Вход</Button>
                    <Button onClick={() => setIsLogin(false)} variant={!isLogin ? 'contained' : 'outlined'}>Регистрация</Button>
                </Box>
                {isLogin ? (
                    <>
                        <Typography variant="h6">Вход</Typography>
                        <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField label="Пароль" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ mt: 2 }}>
                            Вход
                        </Button>
                    </>
                ) : (
                    <>
                        <Typography variant="h6">Регистрация</Typography>
                        <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField label="Имя" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField label="Пароль" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <TextField label="Адрес" fullWidth margin="normal" value={address} onChange={(e) => setAddress(e.target.value)} />
                            <TextField
                                label="Номер телефона"
                                type="number"
                                fullWidth margin="normal"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                sx={{
                                    '& input[type=number]': {
                                        '-moz-appearance': 'textfield',
                                    },
                                    '& input[type=number]::-webkit-outer-spin-button': {
                                        '-webkit-appearance': 'none',
                                        margin: 0,
                                    },
                                    '& input[type=number]::-webkit-inner-spin-button': {
                                        '-webkit-appearance': 'none',
                                        margin: 0,
                                    },
                                }}
                            />
                        <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ mt: 2 }}>
                            Регистрация
                        </Button>
                    </>
                )}
            </Box>
        </Modal>
    );
};

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default AuthModal;
