import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../helpers/axiosApi";

export const getAllChatsBySpecificUser = createAsyncThunk(
  'chat/getAllChatsBySpecificUser',
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getRequest(`chats/${payload}`, true)
      console.log(data)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

const ChatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatBox: [],
    chats: [],
    userChat: null
  },
  reducers: {
    saveToChatBox(state, { payload }) {
      // state.userChat = payload
      const isExist = state.chatBox.find(chat => (payload._id === chat._id))
      if (!isExist) {
        state.chatBox.push(payload)
      }
    },
    removeToChatBox(state, { payload }) {
      const result = state.chatBox.filter(chat => (payload._id !== chat._id))
      state.chatBox = result
    }
  },
  extraReducers: {
    [getAllChatsBySpecificUser.fulfilled]: (state, { payload }) => {
      if (payload.status === "success") {
        state.chats = payload.data
      }
    },
    [getAllChatsBySpecificUser.rejected]: (state, { payload }) => {
      console.log(payload, 'payload rejected')
    },
  }
})

export const { saveToChatBox, removeToChatBox } = ChatSlice.actions

export default ChatSlice.reducer