import React from 'react'
import styled from 'styled-components'
import LefitSideBar from '../LeftSideBar'
import RightSIdeBar from '../RightSideBar'
import NewsFeedContent from './NewsFeedContent/NewsFeedContent'
import Chat from '../Chat'
import { useSelector } from 'react-redux'

const NewsFeed = () => {
  const { chatBox } = useSelector(state => state.chat)
  return (
    <NewsFeedContainer>
      <LefitSideBar />
      <NewsFeedContent />
      <RightSIdeBar />
      {chatBox.length > 0 && <Chat />}
    </NewsFeedContainer>
  )
}

export default NewsFeed

const NewsFeedContainer = styled.div`
  display: flex;
  padding: 20px 0px 20px 20px;
  height: 93vh;
`