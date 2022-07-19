import {Dispatch} from '@reduxjs/toolkit'
import axios from "../../axios";
import {postSlice} from "../slices/postSlice";

export const fetchPosts = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(postSlice.actions.fetching())
      const response = await axios.get('posts')
      console.log(response)
      dispatch(postSlice.actions.fetchSuccess(response.data))
    } catch (e) {
      dispatch(postSlice.actions.fetchError(e as Error))
    }
  }
}