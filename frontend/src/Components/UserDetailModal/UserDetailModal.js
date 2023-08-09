import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { SeperatePrice } from '../../dist';

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

export default function UserDetailModal(props) {


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
                        {props.user.username}
                    </Typography>
                    <div className="ProductDetailContainer">
                        <div className="HeadRow">
                            <span>نام</span>
                            <span>نام خانوادگی</span>
                            <span>شهر</span>
                            <span>امتیاز</span>
                            <span>کل خرید</span>
                        </div>
                        <div className="BodyRow">
                            <span>{props.user.firsname}</span>
                            <span>{props.user.lastname}</span>
                            <span>{props.user.city}</span>
                            <span>{props.user.score}</span>
                            <span>{SeperatePrice(props.user.buy)}</span>
                        </div>
                    </div>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ display: 'flex', justifyContent: 'flex-end' }} >
                        <button className='DetailsModalBtns' onClick={props.handleClose} >بستن</button>
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}