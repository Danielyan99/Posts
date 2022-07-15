import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Posts} from "./pages/Posts";
import {Auth} from "./pages/Auth";
import {Post} from "./pages/Post";
import {Navigation} from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/posts/:id" element={<Post/>}/>
      </Routes>

    </div>
  );
}

export default App;