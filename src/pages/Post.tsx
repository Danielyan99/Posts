import React from 'react'
import {IPost} from "../models/models";

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {
  return (
    <div>{post.title}</div>
  )
}