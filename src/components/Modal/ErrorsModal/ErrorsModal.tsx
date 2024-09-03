import React from 'react'
import { Modal, Box, Typography } from '@mui/material';
import { Button } from 'react-bootstrap';

interface ErrorsModalProps {
    open: boolean,
    onClose: () => void,
    error: string,
}

const ErrorsModal: React.FC<ErrorsModalProps> = ({ open, onClose, error}) => {

    const handleExitBtn = () => {
        onClose()
    }

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ ...modalStyle }}>
                <Typography variant="h6">{error}</Typography>
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

export default ErrorsModal