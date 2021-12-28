import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { createCommentToPostAsync } from '../../redux/features/PostSlice'
import CommentList from './CommentList'

const Comment = (props) => {
  const dispatch = useDispatch()
  const [isShowCommentList, setisShowCommentList] = useState(false)
  const [commentInput, setcommentInput] = useState("")
  const { post } = props
  const { user } = useSelector(state => state.auth)

  const handleSumbmit = (e) => {
    e.preventDefault()
    dispatch(createCommentToPostAsync({ id: props.post._id, message: commentInput, user: user._id }))
    setcommentInput("")
  }

  return (
    <CommentContainer onSubmit={handleSumbmit}>
      <div className="commentSection">
        <div className="image"><img src={user.profileImage} alt="" width={40} height={40} /></div>
        <div className="inputForm">
          <input type="text" value={commentInput} placeholder="Write a comment..." onChange={(e) => setcommentInput(e.target.value)} />
          <button type="submit" hidden></button>
        </div>
      </div>
      {
        <button type="button" onClick={() => setisShowCommentList(!isShowCommentList)}>View all comments</button>
      }
      {isShowCommentList && <CommentList post={post} />}
    </CommentContainer>
  )
}

export default Comment

const CommentContainer = styled.form`
  .commentSection {
    display: flex;
    align-items: center;
  }

  .image img {
    border-radius: 50px;
    margin-right: 10px;
  }
  .inputForm {
    width: 100%;
    /* border-radius: 50px; */
    /* background: #F0F2F5; */
    /* background: #F0F2F5;
    border-radius: 50px; */
  }

  input {
    font-family: 'Roboto', sans-serif;
    resize: none;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 15px;
    border: none;
    height: 40px;
    display: flex;
    /* background: none; */
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    font-size: 15px;
    font-weight: 700;
    color: gray;
    margin: 10px 0px;
  }
`