import React, { useEffect, useState } from 'react'
import './ProductsTable.css'
import ErrorBox from '../../../Components/ErrorBox/ErrorBox';
import DeleteModal from '../../../Components/DeleteModal/DeleteModal'
import DetailsModal from '../../../Components/DetailsModal/DetailsModal';
import EditModal from '../../../Components/EditModal/EditModal';
import { SeperatePrice } from '../../../dist';



import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ImageIcon from '@mui/icons-material/Image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { ToastContainer, toast } from 'react-toastify';



export default function ProductsTable({ products, FetchProducts }) {


    const notify = () => toast.error(' با موفقیت حذف شد', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
    const handleOpenDeleteModal = (id) => {
        setOpenDeleteModal(true);
        setProductID(id)
    }
    const handleCloseDeleteModal = () => setOpenDeleteModal(false);



    const [openDetailsModal, setOpenDetailsModal] = React.useState(false);
    const handleOpenDetailsModal = (product) => {
        setOpenDetailsModal(true);
        setProductDetail(product)
    }
    const handleCloseDetailsModal = () => setOpenDetailsModal(false);




    const [openEditModal, setOpenEditModal] = React.useState(false);
    const handleOpenEditModal = (product) => {
        setOpenEditModal(true);
        setTitle(product.title)
        setPrice(product.price)
        setCount(product.count)
        setImg(product.img)
        setPopularity(product.popularity)
        setSale(product.sale)
        setcolors(product.colors)
        setProductID(product.id)
    }
    const handleCloseEditModal = () => setOpenEditModal(false);

    const [productID, setProductID] = React.useState(null)

    const [productDetail, setProductDetail] = React.useState({})


    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [count, setCount] = useState('')
    const [img, setImg] = useState('')
    const [popularity, setPopularity] = useState('')
    const [sale, setSale] = useState('')
    const [colors, setcolors] = useState('')




    const DeleteHandler = () => {
        console.log(productID);
        fetch(`http://localhost:3000/api/products/${productID}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                handleCloseDeleteModal()
                FetchProducts()
                notify()
            })
    }


    const UpdateHandler = () => {
        const productsnewInfo = {
            title: title,
            price: price,
            count: count,
            img: img,
            popularity: popularity,
            sale: sale,
            colors: colors,
        }
        fetch(`http://localhost:3000/api/products/${productID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productsnewInfo)
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                FetchProducts()
                handleCloseEditModal()
                // notify()
            })
    }








    return (
        <>
            {products.length ? (
                <>
                    <div className='ProductsTable' >
                        <div className='ProductsTableHead'>
                            <span>عکس</span>
                            <span>نام</span>
                            <span>قیمت</span>
                            <span>موجودی</span>
                        </div>
                        {products.map(product => (
                            <>
                                <hr />
                                <div className='ProductsTableItem'>
                                    <div className="ProductsTableItemImg">
                                        <img src={product.img} />
                                    </div>

                                    <div className="ProductsTableItemTitle">
                                        {product.title}
                                    </div>

                                    <div className="ProductsTableItemPrice">
                                        {SeperatePrice(product.price) + 'تومان'}
                                    </div>

                                    <div className="ProductsTableItemCount">
                                        {product.count}
                                    </div>

                                    <div className="ProductsTableItemAction">
                                        <button onClick={() => handleOpenDetailsModal(product)} >جزئیات</button>
                                        <button onClick={() => handleOpenDeleteModal(product.id)}>حذف</button>
                                        <button onClick={() => handleOpenEditModal(product)}>ویرایش</button>
                                    </div>
                                </div>
                            </>
                        ))
                        }

                        < DeleteModal open={openDeleteModal} handleClose={handleCloseDeleteModal} DeleteHandler={DeleteHandler} />

                        <DetailsModal open={openDetailsModal} handleClose={handleCloseDetailsModal} productDetail={productDetail} />

                        <EditModal open={openEditModal} handleClose={handleCloseEditModal} UpdateHandler={UpdateHandler} >
                            <div className="EditModalInputs">
                                <form action="#">
                                    <div className="EditModalformInputs">
                                        <div className="EditModalformInput">
                                            <DriveFileRenameOutlineIcon />
                                            <input type="text" placeholder='اسم محصول' value={title}
                                                onChange={(e) => setTitle(e.target.value)} />
                                        </div>
                                        <div className="EditModalformInput">
                                            <AttachMoneyIcon />
                                            <input type="text" placeholder='قیمت محصول' value={price} onChange={(e) => setPrice(e.target.value)} />
                                        </div>
                                        <div className="EditModalformInput">
                                            <ShoppingBagIcon />
                                            <input type="text" placeholder='موجودی محصول' value={count} onChange={(e) => setCount(e.target.value)} />
                                        </div>
                                        <div className="EditModalformInput">
                                            <ImageIcon />
                                            <input type="text" placeholder='آدرس عکس' value={img} onChange={(e) => setImg(e.target.value)} />
                                        </div>
                                        <div className="EditModalformInput">
                                            <FavoriteIcon />
                                            <input type="text" placeholder='میزان محبوبیت محصول' value={popularity} onChange={(e) => setPopularity(e.target.value)} />
                                        </div>
                                        <div className="EditModalformInput">
                                            <StorefrontIcon />
                                            <input type="text" placeholder='میزان فروش محصول' value={sale} onChange={(e) => setSale(e.target.value)} />
                                        </div>
                                        <div className="EditModalformInput">
                                            <ColorLensIcon />
                                            <input type="text" placeholder='تعداد رنگ بندی محصول' value={colors} onChange={(e) => setcolors(e.target.value)} />
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </EditModal>

                    </div >
                </>) : <ErrorBox message={'محصولی یافت نشد'} />}

        </>
    )
}


