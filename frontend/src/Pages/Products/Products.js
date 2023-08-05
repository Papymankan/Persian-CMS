import React, { useState , useEffect} from 'react'
import './Products.css'
import ProductsTable from './ProductsTable/ProductsTable';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ImageIcon from '@mui/icons-material/Image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { ToastContainer, toast } from 'react-toastify';


export default function Products() {
  const notify = () => toast.success('محصول با موفقیت اضافه شد', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [img, setImg] = useState('')
  const [count, setCount] = useState('')
  const [popularity, setPopularity] = useState('')
  const [sale, setSale] = useState('')
  const [colors, setColors] = useState('')

  const [products, setProducts] = React.useState([])

  const postHandler = () => {
    const newProduct = {
      title: title,
      price: price,
      img: img,
      count: count,
      popularity: popularity,
      sale: sale,
      colors: colors
    }

    fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        FetchProducts()
        setTitle('')
        setPrice('')
        setImg('')
        setCount('')
        setPopularity('')
        setSale('')
        setColors('')
        notify()
      })
  }

  useEffect(() => {
    FetchProducts()
  }, [])

  const FetchProducts = () => {
    fetch('http://localhost:3000/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
  }
  return (
    <div className='Products'>
      <div className="container">

        <h1>افزودن محصول جدید</h1>
        <div className="formBox">
          <div className="formInputs">
            <div className="formInput">
              <DriveFileRenameOutlineIcon />
              <input type="text" placeholder='اسم محصول' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="formInput">
              <AttachMoneyIcon />
              <input type="text" placeholder='قیمت محصول' value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="formInput">
              <ShoppingBagIcon />
              <input type="text" placeholder='موجودی محصول' value={count} onChange={(e) => setCount(e.target.value)} />
            </div>
            <div className="formInput">
              <ImageIcon />
              <input type="text" placeholder='آدرس عکس' value={img} onChange={(e) => setImg(e.target.value)} />
            </div>
            <div className="formInput">
              <FavoriteIcon />
              <input type="text" placeholder='میزان محبوبیت محصول' value={popularity} onChange={(e) => setPopularity(e.target.value)} />
            </div>
            <div className="formInput">
              <StorefrontIcon />
              <input type="text" placeholder='میزان فروش محصول' value={sale} onChange={(e) => setSale(e.target.value)} />
            </div>
            <div className="formInput">
              <ColorLensIcon />
              <input type="text" placeholder='تعداد رنگ بندی محصول' value={colors} onChange={(e) => setColors(e.target.value)} />
            </div>
          </div>
          <button onClick={postHandler}>ثبت محصول</button>
        </div>
        <ProductsTable products={products} FetchProducts={FetchProducts}/>
      </div>
    </div>
  )
}