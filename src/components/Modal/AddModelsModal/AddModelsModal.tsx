import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography, Input } from '@mui/material';
import axios from 'axios';
import {useCreateModelMutation } from '../../../app/services/furnitureModelApi';
import { addTable } from '../../../features/furniture/tableSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addCabinet } from '../../../features/furniture/cabinetSlice';
import { addCupboard } from '../../../features/furniture/cupboardSlice';


interface AuthModalProps {
    open: boolean;
    onClose: () => void;
}

const AddModelsModal: React.FC<AuthModalProps> = ({ open, onClose }) => {
    let typeOfModel = ''
    const [nameModel, setNameModel] = useState('')
    const [typeModel, setTypeModel] = useState('')
    const [property, setProperty] = useState('')
    const [price, setPrice] = useState('')
    const [count, setCount] = useState('')
    const [image, setImage] = useState<File | null>(null);
    const [createModel] = useCreateModelMutation();
    const dispatch = useDispatch()

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const addModel = async () => {
        if (nameModel.toLowerCase().includes('стол') || typeModel.toLowerCase().includes('стол')) {
            typeOfModel = 'table'
        } else if (nameModel.toLowerCase().includes('тумба') || typeModel.toLowerCase().includes('тумба')) {
            typeOfModel = 'cabinet'
        } else if (nameModel.toLowerCase().includes('шкаф') || typeModel.toLowerCase().includes('шкаф')) {
            typeOfModel = 'cupboard'
        } else {
            typeOfModel = ''
        }
        
        try {
            const createdModel = await createModel({
                furnitureName: nameModel,
                furnitureType: typeModel,
                Property: property,
                Price: price,
                count: count,
                img: image
            }).unwrap()

            if (typeOfModel === 'table') {
                dispatch(addTable(createdModel))
            } else if (typeOfModel === 'cabinet') {
                dispatch(addCabinet(createdModel))
            } else if (typeOfModel === 'cupboard') {
                dispatch(addCupboard(createdModel))
            }
            

            // Сбросить поля формы
            setNameModel('');
            setTypeModel('');
            setProperty('');
            setPrice('');
            setCount('');
            setImage(null);
            onClose();
        } catch (error) {
            console.error('Error adding model:', error);
        }
    };
    

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ ...modalStyle }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant='h4'>Добавить модель</Typography>
                </Box>
                <Box>
                    <Input
                        type='file' 
                        id='fileInput'
                        onChange={handleImageChange}
                        sx={{mb: 2}}
                    />
                    <TextField label="Название" fullWidth margin="normal" value={nameModel} onChange={(e) => setNameModel(e.target.value)} />
                    <TextField label="Тип" fullWidth margin="normal" value={typeModel} onChange={(e) => setTypeModel(e.target.value)} />
                    <TextField label="Свойства"  fullWidth margin="normal" value={property} onChange={(e) => setProperty(e.target.value)} />
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
                    <TextField
                        label="Кол-во"
                        type="number"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                        sx={{
                            'marginTop':'10px',
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
