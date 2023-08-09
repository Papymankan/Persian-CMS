import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import './EditModal.css'





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

export default function CommentModal({comment , HideModalHandler , ShowModalHandler}) {


    return (
        <>
            <Modal
                open={ShowModalHandler}
                onClose={HideModalHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        {comment}
                    </div>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ display: 'flex', justifyContent: 'flex-end' }} >
                        <button className='EditModalBtns' onClick={HideModalHandler} >بستن</button>
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}