import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import jbImage from './../../images/jb.jpg'
import UserDropDownOption from './UserDropDownOption'
import { fullName } from '../../helpers/fullName'

const UserDropDown = () => {
  const { user } = useSelector(state => state.auth)

  return (
    <UserDropDownContainer>
      <HeaderDropDown>
        <div className="headerInfo">
          <img src={jbImage} alt="" width={60} height={60} />
          <div>
            <h3>{fullName(user)}</h3>
            <p>See Your Profile</p>
          </div>
        </div>
      </HeaderDropDown>
      <hr></hr>
      <TopDropDown>
        <div className="topInfo">
          <i className="fas fa-comment-slash"></i>
          <div>
            <span>Give Feedback</span>
            <p>Help us improve the new Facebook.</p>
          </div>
        </div>
      </TopDropDown>
      <hr></hr>
      <UserDropDownOption icon="fas fa-user" title="Switch Accounts" />
      <UserDropDownOption icon="fas fa-sign-out-alt" title="Settings & Privacy" />
      <UserDropDownOption icon="fas fa-question-circle" title="Help & Support" />
      <UserDropDownOption icon="fas fa-moon" title="Display & Accessibility" />
      <UserDropDownOption icon="fas fa-sign-out-alt" title="Logout" onHandleLougout />
    </UserDropDownContainer>
  )
}

export default UserDropDown

const UserDropDownContainer = styled.div`
  padding: 10px;
  position: absolute;
  background-color: #ffff;
  box-shadow: 2px 2px 10px 2px gray;
  border-radius: 5px;
  top: calc(100% + 10px);
  right: 0;
  width: 355px;
  height: 45vh;
`

const HeaderDropDown = styled.div`
  cursor: pointer;
  .headerInfo {
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  .headerInfo img {
    margin-right: 15px;
  }

  .headerInfo p {
    margin-top: 5px;
    color: gray;
    font-size: 15px;
  }

  .headerInfo:hover {
    background: rgb(211, 211, 211);

  }
`

const TopDropDown = styled.div`
  cursor: pointer;
  margin-top: 5px;

  .topInfo {
    display: flex;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  .topInfo i {
    margin-right: 15px;
    font-size: 14px;
  }

  .topInfo i:hover {
    background: #F0F2F5;
  }

  .topInfo strong {
    text-align: start;
  }

  .topInfo p {
    margin-top: 5px;
    color: gray;
    font-size: 15px;
  }

  .topInfo:hover {
    background: rgb(211, 211, 211);
  }
`