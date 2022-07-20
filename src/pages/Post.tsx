import React from 'react'
import {IPost} from "../models/models";
import {useAppDispatch} from "../hook/redux";
import {deletePost} from "../store/actions/postsActions";

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {
  const dispatch = useAppDispatch()

  const deletePostHandler = (id: Number) => {
    dispatch(deletePost(id))
  }
  return (
    <div className="border-4 p-5 mb-4">
      <h2 className="text-xl h-14 font-medium leading-5">{post.title}</h2>
      <p className="text-sm">{post.body}</p>
      <div className="flex justify-end mt-8">
        <button className="mr-3">edit</button>
        <button onClick={() => deletePostHandler(post.id)}>delete</button>
      </div>
    </div>
  )
}