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

export const deletePost = (id: Number) => {
  return async(dispatch: Dispatch) => {
    try {
      await axios.delete(`posts/${id}`)
      dispatch(postSlice.actions.deletePost(id))
    } catch (e) {
      dispatch(postSlice.actions.fetchError(e as Error))
    }
  }
}

export const fetchPost = (id: Number) => {
  return async(dispatch: Dispatch) => {
    try {
      const response = await axios.get(`posts/${id}`)
      console.log(response)
    } catch (e) {
    }
  }
}