import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {toast } from 'react-toastify';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0',
    boxShadow: 24,
    p: 4,
};



export default function RejectModal(props) {
    const notify = () => toast.warning('با موفقیت لغو شد', {
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
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: '32px' }}>
                آیا از لغو تایید مطمئن هستید؟
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ display: 'flex', justifyContent: 'flex-end' }} >
                <button className='DeleteModalBtns' onClick={() => {
                    props.RejectHandler()
                    notify()
                }}>بله</button>
                <button className='DeleteModalBtns' onClick={props.handleClose} >خیر</button>
            </Typography>
        </Box>

    </Modal>
</>
  )
}
