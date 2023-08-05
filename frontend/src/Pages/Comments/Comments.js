import React, { useEffect, useState } from 'react'
import './Comments.css'
import ErrorBox from '../../Components/ErrorBox/ErrorBox'
import CommentModal from '../../Components/CommentModal/CommentModal'
import DeleteModal from '../../Components/DeleteModal/DeleteModal'
import EditModal from '../../Components/EditModal/EditModal'
import AcceptModal from '../../Components/AcceptModal/AcceptModal'
import RejectModal from '../../Components/RejectModal/RejectModal'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';


export default function Comments() {

  const [comments, setComments] = useState([])
  const [showCommentModal, setShowCommentModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showAcceptModal, setShowAcceptModal] = useState(false)
  const [showRejectModal, setShowRejectModal] = useState(false)
  const [comment, setComment] = useState({})
  const [editInput, setEditInput] = useState('')


  const ShowCommentHandler = (comment) => {
    setShowCommentModal(true)
    setComment(comment)
  }
  const HideCommentHandler = () => {
    setShowCommentModal(false)
  }

  const ShowDeleteHandler = (comment) => {
    setShowDeleteModal(true)
    setComment(comment)
  }
  const HideDeleteHandler = () => {
    setShowDeleteModal(false)
  }

  const ShowEditHandler = (comment) => {
    setShowEditModal(true)
    setEditInput(comment.body)
    setComment(comment)
  }
  const HideEditHandler = () => {
    setShowEditModal(false)
  }

  const ShowAcceptHandler = (comment) => {
    setShowAcceptModal(true)
    setComment(comment)
  }
  const HideAcceptHandler = () => {
    setShowAcceptModal(false)
  }

  const ShowRejectHandler = (comment) => {
    setShowRejectModal(true)
    setComment(comment)
  }
  const HideRejectHandler = () => {
    setShowRejectModal(false)
  }

  const EditCommentHandler = () => {
    fetch(`http://localhost:3000/api/comments/${comment.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        body : editInput
      }),
    })
      .then(res => res.json())
      .then(data => {
        HideEditHandler()
        FetchComments()
      })
  }

  const DeleteHandler = () => {
    fetch(`http://localhost:3000/api/comments/${comment.id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(data => {
        HideDeleteHandler()
        FetchComments()
      })
  }

  const AcceptHandler = () => {
    fetch(`http://localhost:3000/api/comments/accept/${comment.id}`, { method: 'POST' })
    .then(res => res.json())
    .then(data => {
      FetchComments()
      HideAcceptHandler()
    })
  }

  const RejectHandler = () => {
    fetch(`http://localhost:3000/api/comments/reject/${comment.id}`, { method: 'POST' })
    .then(res => res.json())
    .then(data => {
      FetchComments()
      HideRejectHandler()
    })
  }



  const FetchComments = () => {
    fetch('http://localhost:3000/api/comments')
      .then(res => res.json())
      .then(data => setComments(data))  
  }

  useEffect(() => {
    FetchComments()
  }, [])

  return (
    <div className='Comments'>
      <div className="container">
        {comments ? (
          <div className='commentsContainer'>
            <div className="commentsContainerHead">
              <span>کاربر</span>
              <span>کامنت</span>
              <span>محصول</span>
              <span>تاریخ</span>
              <span>ساعت</span>
              <span></span>
            </div>
            {comments.map(comment => (
              <>
              
                <hr />
                <div className="commentsContainerItem" key={comment.id}>
                  <span>{comment.userID}</span>
                  <span><button onClick={() => ShowCommentHandler(comment)}>دیدن کامنت</button></span>
                  <span>{comment.productID}</span>
                  <span>{comment.date}</span>
                  <span>{comment.hour}</span>
                  <span>
                    <button onClick={() => ShowDeleteHandler(comment)}>حذف</button>
                    <button onClick={() => ShowEditHandler(comment)}>ویرایش</button>
                    <button>پاسخ</button>
                    {comment.isAccept ? (<button onClick={() => ShowRejectHandler(comment)}>لغو تایید</button>) :
                    (<button onClick={() => ShowAcceptHandler(comment)}>تایید</button>) }
                    
                  </span>
                </div>
              </>
            ))}

          </div>
        )
          : (<ErrorBox message={'هیچ کامنتی یافت نشد'} />)}
        <CommentModal comment={comment.body} HideModalHandler={HideCommentHandler} ShowModalHandler={showCommentModal} />

        <DeleteModal open={showDeleteModal} handleClose={HideDeleteHandler} DeleteHandler={DeleteHandler} />

        <EditModal open={showEditModal} handleClose={HideEditHandler} UpdateHandler={EditCommentHandler}>
          <div className="EditModalInputs">
            <form action="#">
              <div className="EditModalformInputs">
                <div className="EditModalformInput">
                  <DriveFileRenameOutlineIcon />
                  <input type="text" placeholder='کامنت را وارد کنید' value={editInput}
                    onChange={(e) => setEditInput(e.target.value)} />
                </div>
              </div>
            </form>
          </div>
        </EditModal>
        <AcceptModal open={showAcceptModal} handleClose={HideAcceptHandler} AcceptHandler={AcceptHandler}/>

        <RejectModal open={showRejectModal} handleClose={HideRejectHandler} RejectHandler={RejectHandler}/>
      </div>
    </div>
  )
}
