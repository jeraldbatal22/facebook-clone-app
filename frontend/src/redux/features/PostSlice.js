import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../helpers/axiosApi";

export const getAllPostAsync = createAsyncThunk(
  'post/getAllPostAsync',
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getRequest('posts', true)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const createPostAsync = createAsyncThunk(
  'post/createPostAsync',
  async (payload, { rejectWithValue }) => {
    try {
      const data = await postRequest('posts/create', payload, true)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const getAllCommentsAsync = createAsyncThunk(
  'post/getAllCommentsAsync',
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getRequest('comments', true)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const createCommentToPostAsync = createAsyncThunk(
  'post/createCommentToPostAsync',
  async (payload, { rejectWithValue }) => {
    try {
      const data = await postRequest(`comments/create/${payload.id}`, payload, true)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

const PostSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    comments: [],
  },
  reducers: {

  },
  extraReducers: {
    [getAllPostAsync.fulfilled]: (state, { payload }) => {
      if (payload.status === "success") {
        state.posts = payload.data
      }
    },
    [getAllPostAsync.rejected]: (state, { payload }) => {
      console.log(payload, 'payload rejected')
    },
    [createPostAsync.fulfilled]: (state, { payload }) => {
      if (payload.status === "success") {
        console.log(payload)
        state.posts.unshift(payload.data)
      }
    },
    [createPostAsync.rejected]: (state, { payload }) => {
      console.log(payload, 'payload rejected')
    },
    [getAllCommentsAsync.fulfilled]: (state, { payload }) => {
      if (payload.status === "success") {
        state.comments = payload.data
      }
    },
    [getAllCommentsAsync.rejected]: (state, { payload }) => {
      console.log(payload, 'payload rejected')
    },
    [createCommentToPostAsync.fulfilled]: (state, action) => {
      if (action.payload.status === "success") {
        state.posts.map(post => {
          if (post._id === action.meta.arg.id) post.comments.unshift(action.payload.data)
          return post
        })
      }
    },
    [createCommentToPostAsync.rejected]: (state, { payload }) => {
      console.log(payload, 'payload rejected')
    },
  }
})

export default PostSlice.reducer