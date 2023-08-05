import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DiscountIcon from '@mui/icons-material/Discount';
import './SideBar.css'

export default function SideBar() {

    const styleHandler = (e)=>{
        console.log();
        let Links = document.querySelectorAll('.SideBarLink')
        for(let i=0 ; i<Links.length ; i++){
            Links[i].className='SideBarLink'
        }
        e.target.parentElement.className='SideBarLink active'
    }

    return (
        <div className='SideBar'>
            <h1>به داشبورد خود خوش آمدید</h1>
            <ul className="SideBarLinks">
                <li className="SideBarLink active" onClick={(e)=>styleHandler(e)}>
                    <Link to='/'>
                        <HomeIcon />
                        صفحه اصلی
                    </Link>

                </li>
                <li className="SideBarLink" onClick={(e)=>styleHandler(e)}>
                    <Link to='/products'>
                        <ProductionQuantityLimitsIcon />
                        محصولات
                    </Link>

                </li>
                <li className="SideBarLink" onClick={(e)=>styleHandler(e)}>
                    <Link to='/comments'>
                        <ChatIcon />
                        کامنت ها
                    </Link>

                </li>
                <li className="SideBarLink" onClick={(e)=>styleHandler(e)}>
                    <Link to='/users'>
                        <GroupIcon />
                        کاربران
                    </Link>

                </li>
                <li className="SideBarLink" onClick={(e)=>styleHandler(e)}>
                    <Link to='/orders'>
                        <ShoppingBagIcon />
                        سفارشات
                    </Link>

                </li>
                <li className="SideBarLink" onClick={(e)=>styleHandler(e)}>
                    <Link to='/offs'>
                        <DiscountIcon />
                        تخفیف ها
                    </Link>

                </li>
            </ul>
        </div>
    )
}