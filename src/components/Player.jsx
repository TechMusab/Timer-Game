import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const [enterplayername,setenterplayername] =useState("UNKNOWN PLAYER");
const playername=useRef();
const handleplayername=()=>{
setenterplayername(playername.current.value)
playername.current.value=" ";
}



  return (
    <section id="player">
      <h2>Welcome {enterplayername}</h2>
      <p>
        <input ref={playername} type="text" />
        <button onClick={handleplayername}>Set Name</button>
      </p>
    </section>
  );
}
