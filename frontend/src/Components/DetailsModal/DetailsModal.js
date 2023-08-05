import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './DetailsModal.css'
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

export default function DetailsModal(props) {


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
                        {props.productDetail.title}
                    </Typography>
                    <div className="ProductDetailContainer">
                        <div className="HeadRow">
                            <span>میزان محبوبیت</span>
                            <span>میزان فروش</span>
                            <span>رنگ بندی</span>
                        </div>
                        <div className="BodyRow">
                            <span>{props.productDetail.popularity}%</span>
                            <span>{SeperatePrice(props.productDetail.sale)}</span>
                            <span>{props.productDetail.colors}</span>
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