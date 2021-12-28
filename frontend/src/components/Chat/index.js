import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fullName } from '../../helpers/fullName'
import { getAllChatsBySpecificUser, removeToChatBox, saveToChatBox } from '../../redux/features/ChatSlice'

const Chat = () => {
  const dispatch = useDispatch()
  const { chatBox, chats, userChat } = useSelector(state => state.chat)
  const { user } = useSelector(state => state.auth)

  const [isMinimize, setisMinimize] = useState(false)
  const hideChatBoxHandler = (chat) => {
    console.log('asdsad')
    dispatch(removeToChatBox(chat))
  }

  const minimizeChatBoxHandler = (index) => {
    setisMinimize({ ...isMinimize, [index]: !isMinimize[index] });
  }

  // const changeUserChatHandler = (item) => {
  //   dispatch(saveToChatBox(item))
  // }
  // onClick={() => changeUserChatHandler(chat)}

  useEffect(() => {
    dispatch(getAllChatsBySpecificUser(user._id))
  }, [dispatch, user])

  return (
    <>
      <ChatContainer>
        {
          chatBox.map((chat, index) => (
            !isMinimize[index] ?
              <div key={index} className="chatBox" >
                <div className="header">
                  <img src={chat.profileImage} alt="" width={40} height={40} />
                  <strong>{fullName(chat)}</strong>
                  <i className="fas fa-video"></i>
                  <i className="fas fa-phone-alt"></i>
                  <i className="fas fa-minus" onClick={() => minimizeChatBoxHandler(index)}></i>
                  <i className="fas fa-times" onClick={() => hideChatBoxHandler(chat)}></i>
                  {/* <p>{chat._id}</p> */}
                </div>
                <hr></hr>
                <ChatContent>
                  {
                    chats.map((item, index) => (
                      item.userReceiver._id === chat._id ?
                        <div className="chatConversation" key={index}>
                          {/* <div className="leftChat">
                              <p >Hello, I'm {fullName(item.userReceiver)} </p>
                            </div> */}
                          <div className="rightChat">
                            <p >{item.message} </p>
                          </div>
                        </div>
                        :
                        <div className="emptyConversation" key={index}>
                          <img src={chat.profileImage} alt="" width={40} height={40} />
                          <strong>{fullName(chat)}</strong>
                          <span>Facebook</span>
                          <span>You're friends on Facebook</span>
                        </div>

                    ))
                    // arr.length > 0 ?

                  }
                </ChatContent>
                <ChatForm>
                  <i className="fas fa-plus-circle"></i>
                  <div>
                    <i className="far fa-images"></i>
                    <i className="fas fa-sticky-note"></i>
                    <i className="fas fa-gift"></i>
                    <input placeholder="Send a message..." />
                    <i className="far fa-laugh"></i>
                  </div>
                  <i className="fas fa-thumbs-up"></i>
                </ChatForm>
              </div>
              :

              <img src={chat.profileImage} className="minimizeImage" alt="" width={50} height={50} onClick={() => minimizeChatBoxHandler(index)} style={{ cursor: 'pointer', boxShadow: '2px 2px 50px 0px #000' }} />

          ))
        }
        {/* HELLO JERALD */}
      </ChatContainer>
    </>
  )
}

export default Chat

const ChatContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  background: yellow;
  left: 95%;
  margin-right: 100px;
  height: 48vh; 
  display: flex;
  justify-content: flex-end;

  .chatBox {
    /* width: 17%; */
    /* width: 100%; */
    border-radius: 7px;
    margin-right: 20px;
    background: #ffff;
    box-shadow: 2px 2px 5px 0px gray;
  }

  i {
      color: gray;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px 10px 10px;
  }

  .minimizeImage {
    /* display: flex;
    flex-direction: column; */
    margin-top: 300px;
    margin-right: 15px;
  }

  .header * {
    /* margin-right: 25px; */
  }

  .header .fa-times {
    margin-right: 0px;
  }

  img {
    border-radius: 50px;
  }
`

const ChatContent = styled.div`
  padding: 10px 20px 10px 10px;
  height: 36vh;
  overflow-y: scroll;

  .emptyConversation {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .emptyConversation strong {
    font-size: 18px;
  }

  .emptyConversation span {
    font-size: 13px;
  }

  .emptyConversation * {
    margin-bottom: 7px;
  }

  ::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    width: 6px;
  } 

  .leftChat, 
  .rightChat {
    display: flex;
    
  }

  .leftChat {
    justify-content: flex-start;
  }

  .leftChat p, .rightChat p {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.05ch;
  }

  .leftChat p {
    background: #E4E6EB;
  }

  .rightChat p {
    background: #0084FF;
    color: #ffff;
  }

  .rightChat {
    justify-content: flex-end;
  }
`

const ChatForm = styled.form`
  padding: 10px 5px;
  display: flex;
  align-items: center;
  color: gray;

  div {
    flex: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    margin-right: 5px;
    background: none;
    border: none;
    background: #F0F2F5;
    border-radius: 50px;
    padding: 10px;
  }

  i {
    flex: 10%;
    font-size: 18px;
    margin-right: 5px;
  }
`