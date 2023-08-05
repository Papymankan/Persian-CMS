import React from 'react'
import './App.css'
import SideBar from './Components/SideBar/SideBar'
import Header from './Components/Header/Header'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


export default function App() {
  
  const router = useRoutes(routes)

  return (
    <>
    <div className="pageContainer">
      <SideBar/>
      <div className='mainPage'>
        <Header/>

        <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />

        {router}
      </div>
    </div>
    </>
  )
}