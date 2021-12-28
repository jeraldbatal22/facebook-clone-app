import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { clearAuth } from '../../redux/features/AuthSlice'

const UserDropDownOption = ({ icon, title, onHandleLougout }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLougout = () => {
    dispatch(clearAuth())
    navigate('/')
  }

  return (
    <OptionContainer onClick={onHandleLougout && handleLougout}>
      <i className={icon}></i>
      <span>{title}</span>
    </OptionContainer>
  )
}

export default UserDropDownOption

const OptionContainer = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;

  > i {
    font-size: 14px !important;
    margin-right:15px ;
  }

  span {
    font-weight: 700;
  }

  :hover {
    background: rgb(211, 211, 211);
  }
`