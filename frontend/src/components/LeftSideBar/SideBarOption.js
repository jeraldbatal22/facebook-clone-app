import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const SideBarOption = (props) => {
  const { title, icon, image } = props
  const { user } = useSelector(state => state.auth)

  return (
    <SideBarOptionContainer>
      {icon ?
        <i className={icon}></i> : <img src={image ? image : user.profileImage} alt="" width={40} height={40} />
      }
      <strong>{title}</strong>
    </SideBarOptionContainer>
  )
}

export default SideBarOption

const SideBarOptionContainer = styled.div`
  display: flex;
  padding: 10px 10px 10px 0px;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 5px;

  :hover {
    background: rgb(243, 239, 239);
  }

  img {
    border-radius: 50px;
  }

  i {
    background: none;
    font-size: 23px;
  }
  
  strong {
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  .fa-user-friends {
    color: #55D5C4;
  }

  .fa-youtube {
    color: #2899DF;
  }

  .fa-bookmark {
    color: #B434BA;
  }

  .fa-flag {
    color: #ED5D2B;

  }

  .fa-users {
    color: #209EEF;
  }

  /* .fa-chevron-down {
    color: #40ADA7;
  } */
  /* ED5D2B
  FBFCFD
  40ADA7
  E8FCFF
  0E2075
  28A6FB
  494E94 */
`