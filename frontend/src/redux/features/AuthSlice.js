import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postRequest } from "../../helpers/axiosApi";
import { get, remove, save, USER } from '../../helpers/storage'

export const authAsync = createAsyncThunk(
  'auth/authAsync',
  async (payload) => {
    const data = await postRequest('users/signin', payload)
    return data
  }
)

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: get(USER) ? true : false,
    user: get(USER) ? get(USER) : null,
    message: null,
    users: []
  },
  reducers: {
    clearAuthValidation(state) {
      state.message = null
    },
    clearAuth(state) {
      state.message = null
      state.user = null
      state.isAuth = false
      remove(USER)
    }
  },
  extraReducers: {
    [authAsync.fulfilled]: (state, { payload }) => {
      if (payload.status === "success") {
        state.isAuth = true
        state.message = null
        state.user = payload.data
        save(USER, payload.data)
      } else {
        state.user = null
        state.message = payload.message
        state.isAuth = false
      }
    },
  }
})

export const { clearAuthValidation, clearAuth } = AuthSlice.actions

export default AuthSlice.reducer