import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import User from '../Dropdown/UserDropDown'
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter'
const Header = () => {
  const [isDropDown, setisDropDown] = useState(false)
  const { user } = useSelector(state => state.auth)

  return (
    <HeaderContainer>
      <NavLeft>
        <ul>
          <li><i className="fab fa-facebook"></i></li>
          <li className="search"><i className="fas fa-search"></i> <input placeholder="Search Facebook" /></li>
        </ul>
      </NavLeft>
      <NavCenter>
        <ul>
          <li><i className="fas fa-home active"></i></li>
          <li className="inactive"><i className="fab fa-youtube"></i><span>9 +</span></li>
          <li className="inactive"><i className="fas fa-bookmark"></i><span>9</span></li>
          <li className="inactive"><i className="fas fa-users"></i><span>9</span></li>
          <li className="inactive"><i className="fas fa-box"></i><span>9 +</span></li>
        </ul>
      </NavCenter>
      <NavRight>
        <ul>
          <li><img src={user.profileImage} alt="" width={30} height={30} /> <strong>{capitalizeFirstLetter(user.firstname)}</strong> </li>
          <li><i className="fas fa-th"></i></li>
          <li><i className="fab fa-facebook-messenger"></i></li>
          <li><i className="fas fa-bell"></i></li>
          <li className="userInfo" ><i className="fas fa-caret-down" onClick={() => setisDropDown(!isDropDown)}></i>{isDropDown && <User setisDropDown={setisDropDown} />} </li>
        </ul>
      </NavRight>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  background-color: #ffff;
  padding: 10px 20px;
`

const NavLeft = styled.div`
  display: flex;
  flex:20%;
  ul {
    display: flex;
    list-style: none;
    align-items: center;
  }
  
  ul li {
    display: flex;
    align-items: center;
  }

  ul .search {
    margin-left: 10px;
    background:#F0F2F5 ;
    border: none;
    border-radius: 50px;
    padding: 0px 10px;
  }

  ul li .fa-search {
    background: none;
    margin-right: 8px;
  }

  ul li .fa-facebook{
    font-size: 40px;
    color: #1B74E4;
  }

  ul input {
    background:#F0F2F5 ;
    border: none;
    border-radius: 50px;
    font-size: 15px;
    padding: 10px 0px;
  }

  @media(max-width: 800px) {
    justify-content: center;
  }
`

const NavCenter = styled.div`
  display: flex;
  flex:60%;
  justify-content: center;
  
  ul {
    display: flex;
    list-style: none;
    align-items: center;
  }

  ul li {
    display: flex;
    margin-right: 50px;
  }

  ul li i {
    padding: 10px 30px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
  }

  ul li i:hover {
    background: rgb(211, 211, 211);
  }

  ul li .active:hover {
    background: none;
  }

  ul li .active {
    color: #1B74E4;
    border-radius: 0px;
    border-bottom: 3px solid #1B74E4;
  }

  ul .inactive {
    position: relative;
  }

  ul li span {
    position: absolute;
    top: -5%;
    right: 10%;
    background-color: #E41E3F;
    color: #ffff;
    border-radius: 50px;
    padding: 2px 6px;
    font-size: 12px;
  }

  @media(max-width: 800px) {
    display: none;
  }
`

const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  flex:20%;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
  }

  ul li {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  ul li img {
    border-radius: 50px;
  }

  ul li strong{
    margin-left: 10px;
  }

  ul li i{
    cursor: pointer;
    padding: 10px;
    background: #F0F2F5;
    border-radius: 50px;
    font-size: 20px;
  }

  ul li i:hover {
    background: rgb(211, 211, 211);
  }

  ul li .fa-caret-down {
    padding: 10px 13px;
  }

  ul .userInfo {
    position: relative;
  }

  @media(max-width: 800px) {
    justify-content: center;
    margin-top: 15px;
  }
`