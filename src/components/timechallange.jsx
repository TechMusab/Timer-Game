import React, { useRef, useState } from "react";
import Resultmodal from "./Resultmodal";
export default function Timechallange({ title, targettime }) {
  const dialog = useRef();
  let id = useRef();
  const [timeremaining, settimeremaining] = useState(targettime * 1000);
  const isActive = timeremaining > 0 && timeremaining < targettime * 1000;
  if (timeremaining <= 0) {
    clearInterval(id.current);
    dialog.current.open();
  }
  const handlestart = () => {
    id.current = setInterval(() => {
      settimeremaining((prev) => prev - 10);
    }, 10);
  };
  const handlereset=()=>{
    settimeremaining(targettime*1000);
  }
  const handlestop = () => {
    clearInterval(id.current);
    dialog.current.open();
  };
  return (
    <>
      <Resultmodal
        ref={dialog}
        targettime={targettime}
        timeremaining={timeremaining}
        handlereset={handlereset}
      ></Resultmodal>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targettime} second
          {targettime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isActive ? handlestop : handlestart}>
            {isActive ? "Stop" : "Start"} Challange
          </button>
        </p>
        <p className={isActive ? "active" : undefined}>
          {isActive ? "Timer  is running..." : "Timer InActve"}
        </p>
      </section>
    </>
  );
}
// You can use useref for also other purposes such as getting refernce to other html elements in another componenes.dialog provides the showmodal method to open when the dialog.
//UseimpeartiveHandle hook for passing refs to parent component.
