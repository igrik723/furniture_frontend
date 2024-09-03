import * as React from 'react';
import deleteIcon from "../../../assets/delete.png"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addModel } from '../../../features/furniture/furnitureSlice';
import { BASE_URL } from '../../../constants';
import { RootState } from '../../../app/store';
import styles from './ModelCard.module.css'
import { useDeleteModelMutation } from '../../../app/services/furnitureModelApi';
import { useEffect, useState } from 'react';
import UpdateModal from '../../Modal/UpdateModal/UpdateModal';
import { closeUpdateModal, openUpdateModal } from '../../../features/modal/modalSlice';

export interface furnitureData {
    id: number;
    furnitureName: string;
    furnitureType: string;
    Property: string;
    Price: number;
    count: number;
    imageUrl: string
}

interface ModelCardProps {
    furnitureData: furnitureData;
    onRemove: (id: number) => void
}

const ModelCard: React.FC<ModelCardProps> = ({ furnitureData, onRemove }) => {
    const user = useSelector((state: RootState) => state.user)
    const isUpdateModalOpen = useSelector((state: RootState) => state.modal.isUpdateModalOpen)
    const dispatch = useDispatch()

    const [deleteModel] = useDeleteModelMutation()

    const handleDelete =async (id: number) => {
        try {
            await deleteModel(id).unwrap();
            onRemove(id)
        } catch (error) {
            console.error("Не удалось удалить модель", error)
        }
        deleteModel(id)
    }

    const handleClick = (model: furnitureData) => {
        dispatch(addModel(model))
    }


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={BASE_URL + '/' + furnitureData.imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {furnitureData.furnitureName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Тип: {furnitureData.furnitureType}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Свойства: {furnitureData.Property}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        В наличии: {furnitureData.count}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Цена: {furnitureData.Price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {user.role === 'Admin' ?
                    <div
                        className={styles.btnContainer}
                    >  
                        <Button size="small" color="primary"
                            onClick={() => dispatch(openUpdateModal())}
                        >
                            Изменить количество
                        </Button>
                        <button
                            onClick={() => handleDelete(furnitureData.id)}
                            className={styles.deleteBtn}
                        >
                            <img
                                className={styles.deleteIcon}
                                alt='delete'
                                src={deleteIcon} />
                        </button>
                        
                    </div>
                    

                    : <Button size="small" color="primary"
                        onClick={() => handleClick(furnitureData)}
                    >
                        Добавить в корзину
                    </Button>
                }
                <UpdateModal open={isUpdateModalOpen} onClose={() => dispatch(closeUpdateModal())} id={furnitureData.id} />
            </CardActions>
        </Card>
    );
}

export default ModelCard