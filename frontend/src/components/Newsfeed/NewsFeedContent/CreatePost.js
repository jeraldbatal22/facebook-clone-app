import React, { useState } from 'react'
import styled from 'styled-components'
import CreatePostModal from '../../Modal/CreatePostModal'
import { useSelector } from 'react-redux'
import { capitalizeFirstLetter } from '../../../helpers/capitalizeFirstLetter'

const CreatePost = () => {
  const [isShowModal, setisShowModal] = useState(false)
  const { user } = useSelector(state => state.auth)
  return (
    <CreatePostContainer>
      <FormContainer >
        <img src={user.profileImage} alt="" width={40} height={40} className="userImage" />
        <input type="button" value={`What's on your mind, ${capitalizeFirstLetter(user.firstname)}?`} onClick={() => setisShowModal(true)} />
        {
          isShowModal && <CreatePostModal setisShowModal={setisShowModal} />
        }
      </FormContainer>
      <br></br>
      <hr></hr>
      <br></br>
      <OptionContainer>
        <div><i className="fas fa-video"></i><strong>Live Video</strong></div>
        <div><i className="far fa-images"></i><strong>Live Video</strong></div>
        <div><i className="far fa-laugh"></i><strong>Live Video</strong></div>
      </OptionContainer>
    </CreatePostContainer>
  )
}

export default CreatePost

const FormContainer = styled.div`
  display: flex;

  .userImage {
    border-radius: 50px;
  }

  input {
    font-size: 17px;
    margin: auto;
    width: 90%;
    border: none;
    padding: 10px 10px;
    background: #F0F2F5;
    border-radius: 50px;
    text-align:start;
    color: gray;
    cursor: pointer;
  }

  input:hover {
    background:#e0e1e4;
  }
`

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  i {
    margin-right: 10px;
    font-size: 25px;
  }

  .fa-video {
    color: #F3425F;
  }

  .fa-images {
    color: #45BD62;
    
  }

  .fa-laugh {
    color: #F7B928;
  }
`

const CreatePostContainer = styled.div`
  background: #ffff;
  padding: 20px;
  border-radius: 5px;
`