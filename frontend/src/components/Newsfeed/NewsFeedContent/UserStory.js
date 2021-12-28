import React from 'react'
import styled from 'styled-components'
import darksunflower from '../../../images/darksunflower.jpg'
import dark2 from '../../../images/dark2.jpg'
import sun from '../../../images/sun.jpg'
import tic from '../../../images/tic.jpg'

const UserStory = () => {
  return (
    <StoryContainer>
      <img src={darksunflower} alt="" height={230} />
      <img src={dark2} alt="" height={230} />
      <img src={sun} alt="" height={230} />
      <img src={tic} alt="" height={230} />
      {/* width={180} height={230} */}
      {/* <img src={jbImage} alt="" width={170} height={230} /> */}
    </StoryContainer>
  )
}

export default UserStory


const StoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;

  @media(max-width: 800px) {
    display: none;
  }

  img {
    border-radius: 10px;
    width: 24%;
  }
`
