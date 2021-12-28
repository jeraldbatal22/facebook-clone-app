import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './features/AuthSlice'
import ChatSlice from './features/ChatSlice'
import PostSlice from './features/PostSlice'
import UserSlice from './features/UserSlice'

const store = configureStore({
  reducer: {
    post: PostSlice,
    auth: AuthSlice,
    user: UserSlice,
    chat: ChatSlice
  }
})

export default store