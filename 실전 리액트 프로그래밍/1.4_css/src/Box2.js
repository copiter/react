import React from "react";
import style from "./Box2.module.css";

export default function Box({ size }) {
  if (size === "big") {
    return <button className={`${style.box} ${style.big}`}>큰 버튼</button>;
  } else {
    return <button className={`${style.box} ${style.small}`}>작은 버튼</button>;
  }
}
console.log(style);
