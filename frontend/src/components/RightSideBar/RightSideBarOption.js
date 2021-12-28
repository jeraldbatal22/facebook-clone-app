import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getAllChatsBySpecificUser, saveToChatBox } from '../../redux/features/ChatSlice'
// import Chat from '../Chat'
// import jbImage from '../../../images/jb.jpg'

const RightSideBarOption = (props) => {
  const dispatch = useDispatch()
  const { image, fullname, user, icon, title, addChat } = props
  // const { userChat } = useSelector(state => state.chat)

  const [isShow, setisShow] = useState(false)
  const addChatUser = () => {
    dispatch(saveToChatBox(user))
    // console.log(user._id)
    setisShow(!isShow)
  }

  // useEffect(() => {
  //   if (userChat) {
  //   }
  // }, [dispatch, userChat])
  return (
    <>
      <RightSideBarOptionContainer onClick={addChat && addChatUser}>
        <div className="headerUser">
          {icon ? <i className={icon} style={{ color: 'gray' }}></i> : <img src={image} alt="" width={40} height={40} />}
          {title ? <strong style={{ color: 'gray' }}>{title}</strong> : <strong>{fullname}</strong>}
        </div>
      </RightSideBarOptionContainer>
      {/* 
      {
        isShow && <Chat user={user} />
      } */}
    </>
  )
}

export default RightSideBarOption

const RightSideBarOptionContainer = styled.div`
  margin-bottom: 10px;
  cursor: pointer;

  :hover {
    background: rgb(243, 239, 239);
  }
  
  img {
    border-radius: 50px;
    margin-right: 10px;
    margin-top: 10px;
  }

  i {
    margin-right: 10px;
    margin-top: 10px;
  }

  .headerUser {
    display: flex;
    align-items: center;
  }

  .headerUser i {
    background: none;
  }
`