import React, { useState } from 'react'
import { UserState, clearUser } from '../../../features/user/userSlice';
import { Modal, Box, Typography, TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useUpdateModelCountMutation } from '../../../app/services/furnitureModelApi';

interface UpdateModalProps {
    open: boolean,
    onClose: () => void,
    id: number,
}

const UpdateModal: React.FC<UpdateModalProps> = ({ open, onClose, id }) => {
    const dispatch = useDispatch()
    const [count, setCount] = useState('0')
    const [updateModelCount] = useUpdateModelCountMutation()

    const handleUpdateBtn = async () => {
        try {
            await updateModelCount({
                id: id,
                count: count
            })
            setCount('')
            onClose()
        } catch (error) {
            console.error('Error updating modelCount:', error);
        }
    }



    

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ ...modalStyle }}>
                <Typography variant="h6">Изменить количество на складе</Typography>
                <TextField label="Новое кол-во" type="number" fullWidth margin="normal" value={count} onChange={(e) => setCount(e.target.value)} />
                <Button
                    onClick={handleUpdateBtn}
                >
                    Применить
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

export default UpdateModal