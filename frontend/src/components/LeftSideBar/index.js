import React from 'react'
import styled from 'styled-components'
import SideBarOption from './SideBarOption'
import darksunflower from '../../images/darksunflower.jpg'
import dark2 from '../../images/dark2.jpg'
import sun from '../../images/sun.jpg'
import tic from '../../images/tic.jpg'
import { useSelector } from 'react-redux'
import { fullName } from '../../helpers/fullName'

const LefitSideBar = () => {
  const { user } = useSelector(state => state.auth)

  return (
    <LefitSideBarContainer>
      <SideBarOption title={fullName(user)} />
      <SideBarOption icon="fas fa-user-friends" title="Friends" />
      <SideBarOption icon="fab fa-youtube" title="Watch" />
      <SideBarOption icon="fas fa-bookmark" title="Saved" />
      <SideBarOption icon="fas fa-flag" title="Pages" />
      <SideBarOption icon="fas fa-users" title="Groups" />
      <SideBarOption icon="fas fa-chevron-down" title="Seemore" />
      <hr></hr>
      <h1>Your Shortcuts</h1>
      <SideBarOption image={darksunflower} title="SenpaiJerald" />
      <SideBarOption image={dark2} title="Sample Group 1" />
      <SideBarOption image={sun} title="Sample Group 2" />
      <SideBarOption image={tic} title="Sample Group 3" />
    </LefitSideBarContainer>
  )
}

export default LefitSideBar

const LefitSideBarContainer = styled.div`
  flex: 20%;

  @media(max-width: 800px) {
    display: none;
  }
  
  h1 {
    margin: 20px 10px 5px 0px;
  }
`