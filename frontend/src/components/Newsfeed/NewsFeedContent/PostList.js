import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import jbImage from '../../../images/jb.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCommentsAsync, getAllPostAsync } from '../../../redux/features/PostSlice'
import moment from 'moment';
import { fullName } from '../../../helpers/fullName'
import { getAllUserAsync } from '../../../redux/features/UserSlice';
import Comment from '../../Comment/Comment';

const PostList = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector(({ post }) => post)
  const { user } = useSelector(({ auth }) => auth)
  const [isShowComment, setisShowComment] = useState(false)

  const showAddCommentHandler = (id) => {
    setisShowComment({ ...isShowComment, [id]: !isShowComment[id] });
  }

  useEffect(() => {
    dispatch(getAllPostAsync())
    dispatch(getAllUserAsync())
    dispatch(getAllCommentsAsync())
  }, [dispatch, user])

  return (
    <>
      {
        posts.map((post, index) => {
          return <PostListContainer key={index}>
            <div className="userHeader">
              <div className="image"><img src={post.user.profileImage} alt="" width={40} height={40} /></div>
              <div className="username">
                <strong>{fullName(post.user)}</strong>
                <div className="userDate">
                  <span>{moment(post.createdAt).format('LL')} at {moment(post.createdAt).fromNow()}</span>

                  <i className="fas fa-globe-asia"></i>
                </div>
              </div>
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <br></br>
            <div className="postDetails">
              <p>{post.description}</p>
              {
                post.image &&
                <div className="image"><br></br><img src={`http://localhost:4001/api/posts/image?filename=${post.image && post.image}`} alt="" /></div>
              }
            </div>
            <div className="commentDetails">
              <div className="reactIcons">
                <i className="fas fa-thumbs-up" style={{ color: '#15A4FA' }}></i>
                <i className="fas fa-heart" style={{ color: '#FA5672' }}></i>
                <strong>140</strong>
              </div>
              <div className="commentCount">
                <span>{post.comments.length} comments</span>
                <span>{post.shares.length} shares</span>
              </div>
            </div>
            <hr></hr>
            <div className="commentIcons">
              <button><i className="far fa-thumbs-up"></i> Like</button>
              <button onClick={() => showAddCommentHandler(post._id)}><i className="fas fa-comment"></i> Comment</button>
              <button><i className="fas fa-share"></i> Share</button>
            </div>

            {/* {!!isShowComment[index] && <Comment post={post} />} */}
            {isShowComment[post._id] && <Comment post={post} />}
          </PostListContainer>
        })
      }

    </>
  )
}

export default PostList

const PostListContainer = styled.div`
  background: #ffff;
  padding: 15px 25px 5px 25px;
  border-radius: 5px;
  margin-bottom: 20px;
  .userHeader img {
    border-radius: 50px;
  }

  .userHeader {
    display: flex;
  }

  .username {
    margin-left: 15px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .userDate {
    font-size: 13px;
    margin-top: 5px;
    display: flex;
    align-items: center;
  }

  .userDate span {
    margin-right: 5px;
  }

  .postDetails img {
    cursor: pointer;
    width: 100%;
  }

  .postDetails p {

  }

  .commentDetails {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    margin: 5px 0px;
  }

  .commentDetails i {
    font-size: 19px;
    margin-right: 5px;
  }

  .commentIcons {
    margin-top: 5px;
    /* margin-top: 15px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .commentCount span {
    cursor: pointer;
    color: #65676B;
    margin-left: 10px;
    font-size: 15px;
  }

  .commentIcons i {
    font-size: 20px;
    background: none;
  }

  .commentIcons button {
    color: #65676B;
    flex: 1;
    background: none;
    border: none;
    font-size: 15px;
    cursor: pointer;
    border-radius: 5px;
    padding: 10px 0px;
  }

  .commentIcons button:hover {
    background:#EFEFEF ;
  }
`