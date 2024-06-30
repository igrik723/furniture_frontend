import React, { useEffect, useState } from 'react';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';
import { createAgreement, useCreateAgreementMutation, useGetUserAgreementQuery } from '../../../app/services/agreementApi';
import { useSelector } from 'react-redux';
import { RootState } from "../../../app/store";
import styles from "./BasketModal.module.css"
import { useCreateSaleMutation } from '../../../app/services/saleApi';
import { furnitureModelApi } from '../../../app/services/furnitureModelApi';

interface Agreement {
  id: number;
  dateOfEnd: Date;
}

interface BasketModalProps {
  open: boolean;
  onClose: () => void;
}

const BasketModal: React.FC<BasketModalProps> = ({ open, onClose }) => {
  const [isMyAgreements, setIsMyAgreements] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const models = useSelector((state: RootState) => state.models.models)
  const [endDate, setEndDate] = useState('')
  const { data: userAgreements, error, isLoading, refetch } = useGetUserAgreementQuery(undefined, {
    skip: !user.token
  });
  const [createAgreement] = useCreateAgreementMutation()
  const [createSale] = useCreateSaleMutation()

  useEffect(() => {
    if (user.token && isMyAgreements) {
      refetch()
    }
  }, [userAgreements, user.token, refetch])
  const handleClose = () => {
    setIsMyAgreements(false);
    onClose();
  };

  const handleCreateAgreement = async () => {
    try {
      if (!endDate) {
        console.error('Дата окончания не указана')
        return
      }
      const agreementDate = { dateOfEnd: new Date(endDate) }
      const createdAgreement = await createAgreement(agreementDate).unwrap()
      for (const model of models) {
        const saleData = {
          agreementId: createdAgreement.id,
          furnitureId: model.id,
          count: 5
        };
        await createSale(saleData)
      }
      onClose()
    } catch (error) {
      console.error('Failed to create agreement and sales:', error);
    }
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...modalStyle }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Button onClick={() => setIsMyAgreements(false)} variant={!isMyAgreements ? 'contained' : 'outlined'}>
            Создать договор
          </Button>
          <Button onClick={() => setIsMyAgreements(true)} variant={isMyAgreements ? 'contained' : 'outlined'}>
            Мои договоры
          </Button>
        </Box>
        {isMyAgreements ? (
          <>
            <Typography variant="h6">Мои договоры</Typography>
            {isLoading ? (
              <div>Загрузка...</div>
            ) : error ? (
              <div>Ошибка при загрузке данных</div>
            ) : (
              userAgreements && userAgreements.map((agreement: Agreement) => (
                <div className={styles.agreementContainer} key={agreement.id}>
                  <Typography>Номер договора: {agreement.id}</Typography>
                  <Typography>Имя заказчика: {user.name}</Typography>
                  <Typography>Дата исполнения договора: {new Date(agreement.dateOfEnd).toLocaleDateString()}</Typography>
                </div>
              ))
            )}
            <Button onClick={handleClose} variant="contained" color="primary" sx={{ mt: 2 }}>
              Выход
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h6">Новый договор</Typography>
              {models ? 
                models.map((model) => (
                  <div>
                    <div>
                      Продажа:
                    </div>
                    <div
                      className={styles.modelsContainer}
                    >

                      <div className={styles.modelsWrapper} key={model.id}>
                        <Typography>Название: {model.furnitureName}</Typography>
                        <Typography>Тип: {model.furnitureType}</Typography>
                        <Typography>Свойства: {model.Property}</Typography>
                        <Typography>Цена: {model.Price}</Typography>
                      </div>
                      <TextField label="Кол-во" type='number' fullWidth margin="normal" style={{ marginLeft: '5px', width: '90%' }} />
                    </div>

                  </div>
                  
                ))
               : null}
              <TextField label="Дата исполнения" fullWidth margin="normal" value={endDate} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEndDate(e.target.value)} />
              <Button
                onClick={handleCreateAgreement}
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}>
              Создать договор
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

export default BasketModal;
