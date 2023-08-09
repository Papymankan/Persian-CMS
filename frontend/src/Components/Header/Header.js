import React from 'react'
import { Avatar } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LightModeIcon from '@mui/icons-material/LightMode';
import './Header.css'
export default function Header() {
    return (
        <div className='Header'>
            <div className="adminProfile">
                <Avatar sx={{ bgcolor: 'orangered' }}>N</Avatar>
                <div className="adminInfo">
                    <h2>پارسا رستمی</h2>
                    <h4>فرانت اند دولوپر</h4>
                </div>
            </div>
            <div className="headerActions">
                <div className="searchBox">
                    <input type="text" placeholder='جست و جو کنید...' />
                    <button className='searchBtn'>جست و جو</button>
                </div>
                <button className='headerActionBtn'>
                    <NotificationsNoneIcon/>
                </button>
                <button className='headerActionBtn'>
                    <LightModeIcon/>
                </button>
            </div>
        </div>
    )
}