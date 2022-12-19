import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Rooms from "./Rooms";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">홈</Link>
        <br />
        <Link to="/photo">사진</Link>
        <br />
        <Link to="/rooms">방 소개</Link>
        <br />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/photo" element={<Photo />}></Route>
          <Route path="/rooms" element={<Rooms />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

function Home() {
  return <h2>여기는 home</h2>
}
function Photo() {
  return <h2>여기는 photo</h2>;
}