import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { fullName } from '../../helpers/fullName'
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter'
import { createPostAsync } from '../../redux/features/PostSlice'

const CreatePostModal = ({ setisShowModal }) => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const [postInput, setpostInput] = useState("")
  const [image, setimage] = useState(null)
  const [file, setFile] = useState(null)
  const handleFileUpload = (e) => {
    const imageFile = e.target.files
    setimage(imageFile)
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('image', image ? image[0] : '');
    formData.append('description', postInput);
    formData.append('user', user._id);

    if (postInput === "") {
      return false
    } else {
      dispatch(createPostAsync(formData))
      setisShowModal(false)
      setpostInput("")
    }
  }
  return (
    <>
      <BackDrop onClick={() => setisShowModal(false)}></BackDrop>
      <Modal>
        <ModalHeader>
          <p></p>
          <h3>Create Post</h3>
          <i className="fas fa-times" onClick={() => setisShowModal(false)}></i>
        </ModalHeader>
        <hr></hr>
        <ModalInfo>
          <img src={user.profileImage} alt="" width={40} height={40} className="userImage" />
          <div className="user">
            <strong>{fullName(user)}</strong>
            <div className="miniDropdown">
              <i className="fas fa-globe-asia"></i>
              <strong>Public</strong>
              <i className="fas fa-caret-down"></i>
            </div>
          </div>
        </ModalInfo>
        <ModalForm enctype="multipart/form-data">
          <textarea type="text" placeholder={`What's on your mind, ${capitalizeFirstLetter(user.firstname)}?`} onChange={(e) => setpostInput(e.target.value)} />
          {/* <input type="text" id="image-url" placeholder="Enter Image Url" name="image" className="createPostInput" onChange={(e) => setimage(e.target.value)} /> */}
          <input type="file" id="file-upload" hidden onChange={handleFileUpload} accept="image/*" />
          {
            file &&
            <>
              <i className="fas fa-times" onClick={() => setFile(null)} style={{ textAlign: 'end', cursor: 'pointer', marginBottom: '5px' }}></i>
              <img src={file} alt="" height={200} style={{ marginBottom: '10px', borderRadius: '5px' }} />
            </>
          }
          <div className="footer">
            <i className="fas fa-audio-description"></i>
            <i className="far fa-smile-beam"></i>
          </div>
        </ModalForm>
        <br></br>
        <ModalFooter>
          <div className="options">
            <strong>Add to post</strong>
            <div className="groupIcon">
              <label htmlFor="file-upload"><i className="fas fa-images"></i></label>
              <i className="fas fa-user-tag"></i>
              <i className="far fa-laugh"></i>
              <i className="fas fa-map-marker-alt"></i>
              <i className="fas fa-microphone"></i>
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <div className="button">
            <button type="button" style={{
              cursor: `${postInput !== "" ? 'pointer' : 'not-allowed'}`,
              background: `${postInput !== "" ? '#1B74E4' : '#E4E6EB'}`,
              color: `${postInput !== "" ? '#ffff' : 'gray'}`
            }} onClick={handleSubmit}>Post</button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default CreatePostModal

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

const Modal = styled.div`
  position: absolute;
  left: 0;
  /* top: 0;
  bottom: 0; */
  top: 25%;
  right: 0;
  width: 30%;
  margin: auto;
  background: #ffff;
  border-radius: 5px;

  @media(max-width: 800px) {
  width: 80%;
  }
`

const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  h1 {
  }
`

const ModalInfo = styled.div`
  display: flex;
  padding: 20px;

  .userImage img {
    margin-right: 10px;
  }

  .miniDropdown {
    padding: 5px;
    background: #F0F2F5;
    display: flex;
    margin-top: 10px;
    align-items: center;
    border-radius: 5px;
    font-size: 13px;
    cursor: pointer;
  }

  .miniDropdown strong {
    margin: 0px 10px;
  }

`

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;

  textarea {
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    border-style: none; 
    /* padding: 10px; */
    display: flex;
    font-size: 20px;
    resize: none;
    letter-spacing: 0.1ch;
  }

  .createPostInput {
    background: none;
    width: 100%;
    margin-bottom: 10px;
  }

  .createPostInput:hover {
    background: #ffff;
  }

  .footer {
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
  }

  .footer i {
    font-size: 23px;
  }

  .footer i:nth-child(1) {
    color: #749FF8;
  }

  .footer i:nth-child(2) {
    color: #E4E6EB;
  }
`

const ModalFooter = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .button button {
    width: 100%;
    padding: 8px ;
    font-weight: 800;
    border: none;
    border-radius: 5px;
    background: #E4E6EB;
    color: gray;
  }

  .options {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e0e4e9;
    margin-bottom: 20px;
  }

  .options i {
    margin-right: 15px;
    font-size: 23px;
  }

  .options i:nth-child(1){
    color: #45BD62;
  }

  .options i:nth-child(2){
    color: #1877F2;
  }

  .options i:nth-child(3){
    color: #F7B928;
  }

  .options i:nth-child(4){
    color: #F5533D;
  }

  .options i:nth-child(5){
    color: #F02849;
  }

  .options i:nth-child(6){
    color: gray;
  }

`