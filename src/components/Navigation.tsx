import React from 'react'
import {Link} from "react-router-dom";

export function Navigation() {
  return (
    <nav className="flex justify-between p-5">
      <div className="flex">
        <Link to="/" className="mx-5">Home</Link>
        <Link to="/posts">Posts</Link>
      </div>

      <Link to="/auth">Auth</Link>
    </nav>
  )
}