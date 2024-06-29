import React from 'react'
import { UserState, clearUser } from '../../../features/user/userSlice';
import { Modal, Box, Typography } from '@mui/material';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

interface UserInfoModaProps{
    open: boolean,
    onClose: () => void,
    user: UserState,
}

const UserInfoModal: React.FC<UserInfoModaProps> = ({ open, onClose, user }) => {
    const dispatch = useDispatch()
    
    const handleExitBtn = () => {
        dispatch(clearUser())
        onClose()
    }
    
  return (
      <Modal open={open} onClose={onClose}>
          <Box sx={{ ...modalStyle }}>
              <Typography variant="h6">Информация о пользователе</Typography>
              <Typography variant="body1">Имя: {user.name}</Typography>
              <Typography variant="body1">Email: {user.email}</Typography>
              <Typography variant="body1">Адрес: {user.address}</Typography>
              <Typography variant="body1">Номер телефона: {user.phoneNumber}</Typography>

              <Button
                onClick={handleExitBtn}
              >
                  Выйти
              </Button>
          </Box>
    </Modal>
    )
}

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

export default UserInfoModal