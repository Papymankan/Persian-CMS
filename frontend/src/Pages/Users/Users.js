import React, { useEffect, useState } from 'react'
import ErrorBox from '../../Components/ErrorBox/ErrorBox'
import DeleteModal from '../../Components/DeleteModal/DeleteModal'
import UserDetailModal from '../../Components/UserDetailModal/UserDetailModal'
import EditModal from '../../Components/EditModal/EditModal'
import './Users.css'
import { ToastContainer, toast } from 'react-toastify';


export default function Users() {

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

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)


  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')
  const [Address, setaddress] = useState('')
  const [score, setScore] = useState('')
  const [buy, setBuy] = useState('')

  const ShowDeleteHandler = (user) => {
    setShowDeleteModal(true)
    setUser(user)
  }
  const HideDeleteHandler = (user) => {
    setShowDeleteModal(false)
  }

  const ShowDetailHandler = (user) => {
    setShowDetailModal(true)
    setUser(user)
  }
  const HideDetailHandler = (user) => {
    setShowDetailModal(false)
  }

  const ShowEditHandler = (user) => {
    setShowEditModal(true)
    setFirstname(user.firsname)
    setLastname(user.lastname)
    setUsername(user.username)
    setPassword(user.password)
    setPhone(user.phone)
    setCity(user.city)
    setEmail(user.email)
    setaddress(user.address)
    setScore(user.score)
    setBuy(user.buy)
    setUser(user)
  }
  const HideEditHandler = (user) => {
    setShowEditModal(false)
  }

  const UpdateHandler = () => {
    console.log(user.id);
    fetch(`http://localhost:3000/api/users/${user.id}`, {
      method: 'PUT',
      body: {
        firsname: firstname,
        lastname: lastname,
        username: username,
        password: password,
        phone: phone,
        city: city,
        email: email,
        address: Address,
        score: score,
        buy: buy,
      }
    })
      .then(res => res.json())
      .then(data => {
        HideEditHandler()
        FetchUsers()
      })
      .catch(res => {
        HideEditHandler()
        window.alert('ابن کاربر کامنت هایی را ثبت کرده به همین خاطر نمی توان کاربر را ویرایش کرد')
      })
  }

  const DeleteHandler = () => {
    console.log(user.id);
    fetch(`http://localhost:3000/api/users/${user.id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(data => {
        HideDeleteHandler()
        FetchUsers()
        notify()
      })
      .catch(res => {
        HideDeleteHandler()
        window.alert('ابن کاربر کامنت هایی را ثبت کرده به همین خاطر نمی توان کاربر را حذف کرد')
      })
  }
  
  const FetchUsers = () => {
    fetch('http://localhost:3000/api/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUsers(data)
      })
  }

  useEffect(() => {
    FetchUsers()
  }, [])

  return (
    <div className='Users'>
      <div className="container">
        {users.length ? (
          <>
            <div className="usersContainer">
              <div className="usersHeader">
                <span>آیدی</span>
                <span>نام کاربری</span>
                <span>شماره تلفن</span>
                <span>ایمیل</span>
              </div>
              {users.map(user => (
                <>
                  <hr />
                  <div className="userItem">
                    <span>{user.id}</span>
                    <span>{user.username}</span>
                    <span>{user.phone}</span>
                    <span>{user.email}</span>
                    <span>
                      <button onClick={() => ShowDeleteHandler(user)}>حذف</button>
                      <button onClick={() => ShowDetailHandler(user)}>جزئیات</button>
                      <button onClick={() => ShowEditHandler(user)}>ویرایش</button>
                    </span>
                  </div>
                </>
              ))}
            </div>
          </>
        )
          : (<ErrorBox message={'کاربری یافت نشد'} />)}

        <DeleteModal open={showDeleteModal} handleClose={HideDeleteHandler} DeleteHandler={DeleteHandler} />
        <UserDetailModal open={showDetailModal} handleClose={HideDetailHandler} user={user} />
        <EditModal open={showEditModal} handleClose={HideEditHandler} UpdateHandler={UpdateHandler}>
          <div className="EditModalInputs">
            <form action="#">
              <div className="EditModalformInputs">
                <div className="EditModalformInput">
                  <input type="text" placeholder='نام' value={firstname}
                    onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div className="EditModalformInput">
                  <input type="text" placeholder='نام خانوادگی' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div className="EditModalformInput">
                  <input type="text" placeholder='نام کاربری' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="EditModalformInput">
                  <input type="text" placeholder='رمز عبور' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="EditModalformInput">
                  <input type="text" placeholder='شماره تلفن' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="EditModalformInput">
                  <input type="text" placeholder='شهر' value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="EditModalformInput">
                  <input type="text" placeholder='ایمیل' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="EditModalformInput">
                  <input type="text" placeholder='آدرس' value={Address} onChange={(e) => setaddress(e.target.value)} />
                </div>
                <div className="EditModalformInput">
                  <input type="text" placeholder='امتیاز' value={score} onChange={(e) => setScore(e.target.value)} />
                </div>
                <div className="EditModalformInput">
                  <input type="text" placeholder='کل خرید' value={buy} onChange={(e) => setBuy(e.target.value)} />
                </div>
              </div>
            </form>
          </div>
        </EditModal>
      </div>
    </div>
  )
}
