import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function Rooms() {
  return (
    <div>
      <h2>여기는 방을 소개하는 페이지 입니다</h2>
      <Link to={`blueRoom`}>파란방입니다</Link>
      <br />
      <Link to={`greenRoom`}>초록방입니다</Link>
      <br />
      <Routes>
        <Route path=':roomId' element={<Room />} />
        <Route exact path={"rooms"} render={() => <h3>방을 선택해주세요</h3>} />
      </Routes>
    </div>
  )
}

function Room() {
  return <h2>{`방을 선택하셨습니다. `}</h2>
}