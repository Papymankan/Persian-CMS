import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './EditModal.css'
import { ToastContainer, toast } from 'react-toastify';





const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '0',
    boxShadow: 24,
    p: 4,
};

export default function EditModal({ children, open, handleClose , UpdateHandler}) {
    const notify = () => toast.success('با موفقیت ویرایش شد', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: '32px' }}>
                        اطلاعات جدید را وارد کنید
                    </Typography>
                    {children}
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ display: 'flex', justifyContent: 'flex-end' }} >
                        <button className='EditModalBtns' onClick={()=>{
                            UpdateHandler()
                            notify()
                        }}>ثبت</button>
                        <button className='EditModalBtns' onClick={handleClose} >انصراف</button>
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}