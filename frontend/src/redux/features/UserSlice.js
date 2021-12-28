import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../helpers/axiosApi";

export const getAllUserAsync = createAsyncThunk(
  'user/getAllUserAsync',
  async (payload) => {
    const data = await getRequest('users/', payload)
    return data
  }
)

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    users: []
  },
  reducers: {
    clearUser(state) {
      state.users = []
    },
  },
  extraReducers: {
    [getAllUserAsync.fulfilled]: (state, { payload }) => {
      if (payload.status === "success") {
        state.users = payload.data
      } else {
        state.users = null
      }
    }
  }
})

export const { clearUser } = UserSlice.actions

export default UserSlice.reducer