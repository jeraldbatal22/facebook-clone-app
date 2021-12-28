import React from 'react'
import styled from 'styled-components'
import PostList from './PostList'

import CreatePost from './CreatePost'
import UserStory from './UserStory'

const NewsFeedContent = () => {
  return (
    <NewsFeedContentContainer>
      {/* User Story */}
      <UserStory />
      {/* Create Post */}
      <CreatePost />
      <PostsContainer>
        <br></br>
        {/* Post List */}
        <PostList />
      </PostsContainer>
    </NewsFeedContentContainer>
  )
}

export default NewsFeedContent

const NewsFeedContentContainer = styled.div`
  /* width: 50%; */
  flex: 60%;
  padding: 0px 200px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  margin-right: 20px;
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

  /* justify-content: flex-start;
  align-items: center; */
  @media(max-width: 800px) {
    padding: 0px 0px;
  }
`


const PostsContainer = styled.div`

`