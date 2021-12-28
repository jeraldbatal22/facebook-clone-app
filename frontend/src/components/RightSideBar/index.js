import React from 'react'
import styled from 'styled-components'
import RightSideBarOption from './RightSideBarOption'
import jbImage from '../../images/jb.jpg'
import { useSelector } from 'react-redux'
import { fullName } from '../../helpers/fullName'

const RightSIdeBar = () => {
  const { users } = useSelector(state => state.user)
  return (
    <RightSIdeBarContainer>
      <div className="header">
        <h3>Your Pages</h3>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <br></br>
      <RightSideBarOption image={jbImage} user="Jerald Batal" />
      <RightSideBarOption icon="fas fa-bell" title="Notification" />
      <RightSideBarOption icon="fas fa-bullhorn" title="Create Promotion" />
      <hr></hr>
      <br></br>
      <div className="headerSecond">
        <h3>Contacts</h3>
        <div className="groupIcon">
          <i className="fas fa-video"></i>
          <i className="fas fa-search"></i>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <br></br>
      {users.map(user => (
        <RightSideBarOption image={user.profileImage} user={user} fullname={fullName(user)} key={user._id} addChat />
      ))}
    </RightSIdeBarContainer>
  )
}

export default RightSIdeBar

const RightSIdeBarContainer = styled.div`
  flex: 20%;
  overflow: scroll;
  height: 90vh;
  /* position: sticky;
  top: 0;
  bottom: 0; */

  h3 {
    color:gray;
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

  .header {
    display: flex;
    justify-content: space-between;
  }
  
  i {
    margin-right: 10px;
    background: none;
  }
  
  .headerSecond {
    display: flex;
    justify-content: space-between;
  }

  @media(max-width: 800px) {
    display: none;
  }

`