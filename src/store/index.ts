import {combineReducers, configureStore} from "@reduxjs/toolkit";
import postsReducer from './slices/postSlice'

const rootReducer = combineReducers({
  posts: postsReducer
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}