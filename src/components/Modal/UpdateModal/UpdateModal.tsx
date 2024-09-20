import React, { useState } from 'react'
import { UserState, clearUser } from '../../../features/user/userSlice';
import { Modal, Box, Typography, TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useUpdateModelCountMutation } from '../../../app/services/furnitureModelApi';
import { editTableCount } from '../../../features/furniture/tableSlice';
import { editCabinetCount } from '../../../features/furniture/cabinetSlice';
import { editCupboardCount } from '../../../features/furniture/cupboardSlice';

interface UpdateModalProps {
    open: boolean,
    onClose: () => void,
    id: number,
    typeOfModel: string
        
}

const UpdateModal: React.FC<UpdateModalProps> = ({ open, onClose, id, typeOfModel}) => {
    const [count, setCount] = useState('0')
    const [updateModelCount] = useUpdateModelCountMutation()
    const dispatch = useDispatch()

    const handleUpdateBtn = async () => {
        try {
            await updateModelCount({
                id: id,
                count: count
            })
            if (typeOfModel === 'table') {
                dispatch(editTableCount({ id: id, count: Number(count) }))
            } else if (typeOfModel === 'cabinet') {
                dispatch(editCabinetCount({ id: id, count: Number(count) }))
            } else if (typeOfModel === 'cupboard') {
                dispatch(editCupboardCount({ id: id, count: Number(count) }))
            } 
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
                <TextField
                    label="Новое кол-во"
                    type="number"
                    fullWidth margin="normal"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    inputProps={{ min: 0 }}
                    onKeyDown={(e) => {
                        // Разрешаем только цифры, Backspace, Delete, ArrowLeft, ArrowRight и Tab
                        if (
                            !/[0-9]/.test(e.key) &&
                            e.key !== "Backspace" &&
                            e.key !== "Delete" &&
                            e.key !== "ArrowLeft" &&
                            e.key !== "ArrowRight" &&
                            e.key !== "Tab"
                        ) {
                            e.preventDefault(); // Блокируем остальные символы
                        }
                    }}
                />
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

