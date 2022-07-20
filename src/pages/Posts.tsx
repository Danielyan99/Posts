import React, {useEffect} from 'react'
import {useAppDispatch, useAppSelector} from "../hook/redux";
import {fetchPosts} from "../store/actions/postsActions";
import {Post} from "./Post";
import {Spinner} from "../components/spinner/Spinner";

export function Posts() {
  const dispatch = useAppDispatch()
  const {error, loading, posts} = useAppSelector(state => state.posts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div className="container mx-auto px-10 mt-5">
      {loading ?
        <Spinner /> :
        <div className="grid gap-4 grid-cols-2">
          {posts.map(post => <Post key={post.id.toString()} post={post} />)}
        </div>
      }
    </div>
  )
}