import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fullName } from '../../helpers/fullName'
import { getAllCommentsAsync } from '../../redux/features/PostSlice'

const CommentList = (props) => {
  const dispatch = useDispatch()

  const { comments } = useSelector(state => state.post)

  useEffect(() => {
    dispatch(getAllCommentsAsync())
  }, [dispatch])

  return (
    <CommentListContainer>
      {
        props.post.comments.length > 0 ?
          comments.map((comment, index) => (
            props.post._id === comment.post &&
            <div key={index} className="commentBody">
              <img src={comment.user.profileImage} alt="" width={40} height={40} />
              <div className="user">
                <div className="userInfo">
                  <strong>{fullName(comment.user)}</strong>
                  <p>{comment.message}</p>
                </div>
                <div className="likeButton">
                  <button type="button">Like</button>
                  <p>{moment(comment.createdAt).fromNow()}</p>
                </div>
              </div>
              <i className="fas fa-ellipsis-h"></i>
            </div>
          ))
          :
          <p className="emprtCommet">No one commentend in this post...</p>
      }
    </CommentListContainer>
  )
}

export default CommentList

const CommentListContainer = styled.div`
  .commentBody {
    display: flex;
    margin: 10px 0px ;
  }

  .user {
    margin: 0px 10px;
    width: 50%;
    font-size: 14px;
    letter-spacing: 0.05ch;
  }

  .userInfo {
    border-radius: 10px;
    padding: 10px;
    background: #F0F2F5;
  }

  .user strong {
    cursor: pointer;
  }

  .likeButton {
    margin: 0px 10px;
    display: flex;
    align-items: center;
  }

  .likeButton button {
    color: #65676B;
    margin-right: 10px;
    font-size: 12px;
  }

  .likeButton button:hover {
    text-decoration: underline;
  }

  .likeButton p {
    font-size: 12px;
  }

  img {
    border-radius: 50px;
  }

  p {
    margin: 3px 0px ;
  }

  .emprtCommet {
    margin: 10px 0px ;
  }

`
