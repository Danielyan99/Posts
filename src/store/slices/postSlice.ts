import {IPost} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PostState {
  loading: boolean
  error: string
  posts: IPost[]
}

const initialState: PostState = {
  loading: false,
  error: '',
  posts: [],
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true
    },
    fetchSuccess(state, action: PayloadAction<IPost[]>) {
      state.loading = false
      state.posts = action.payload
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    },
    deletePost(state, action: PayloadAction<Number>) {
      state.posts = state.posts.filter(post => post.id !== action.payload)
    }
  }
})

export default postSlice.reducer