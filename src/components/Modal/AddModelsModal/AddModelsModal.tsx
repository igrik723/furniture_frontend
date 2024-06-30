import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation, useRegisterMutation } from '../../../app/services/userApi';
import { setUser } from '../../../features/user/userSlice';
import { useCreateModelMutation } from '../../../app/services/furnitureModelApi';

interface AuthModalProps {
    open: boolean;
    onClose: () => void;
}

const AddModelsModal: React.FC<AuthModalProps> = ({ open, onClose }) => {
    const [nameModel, setNameModel] = useState('')
    const [typeModel, setTypeModel] = useState('')
    const [propery, setProperty] = useState('')
    const [price, setPrice] = useState('')
    const [createModel] = useCreateModelMutation()
    const dispatch = useDispatch();

    const addModel = async () => {
        const response = await createModel({ furnitureName: nameModel, furnitureType: typeModel, Property: propery, Price: Number(price) }).unwrap()
        setNameModel('');
        setTypeModel('')
        setProperty('')
        setPrice('')
        onClose()
    }
    

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ ...modalStyle }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant='h4'>Добавить модель</Typography>
                </Box>
                <Box>
                    <TextField label="Название" fullWidth margin="normal" value={nameModel} onChange={(e) => setNameModel(e.target.value)} />
                    <TextField label="Тип" fullWidth margin="normal" value={typeModel} onChange={(e) => setTypeModel(e.target.value)} />
                    <TextField label="Свойства"  fullWidth margin="normal" value={propery} onChange={(e) => setProperty(e.target.value)} />
                    <TextField
                        label="Цена"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
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
                    <Button onClick={addModel} variant="contained" color="primary" sx={{ mt: 2 }}>
                        Добавить
                    </Button>
                </Box>
                        
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

export default AddModelsModal;
