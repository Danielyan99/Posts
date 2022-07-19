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

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']