import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

interface BasketModalProps {
  open: boolean;
  onClose: () => void;
}

const BasketModal: React.FC<BasketModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...modalStyle }}>
        <Typography variant="h6">Basket</Typography>
        <Typography sx={{ mt: 2 }}>Your basket is empty.</Typography>
        <Button onClick={onClose} variant="contained" color="primary" sx={{ mt: 2 }}>
          Close
        </Button>
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
