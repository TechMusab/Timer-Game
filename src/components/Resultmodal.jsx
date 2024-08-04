import React, { useImperativeHandle, useRef } from "react";
import { forwardRef } from "react";
const Resultmodal = forwardRef(function ({ targettime, timeremaining,handlereset }, ref) {
    const score=Math.floor(((1-(timeremaining/(targettime*1000)))*100))
   timeremaining = (timeremaining / 1000).toFixed(2);
  const isLost = timeremaining <= 0;
  
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} onClose={handlereset} className="result-modal">
      {isLost && <h2>You LOST</h2>}
      {!isLost && <h2>Score:{score}</h2>}
      <p>
        {" "}
        The target time was <strong>{targettime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>{timeremaining}</strong> seconds left
      </p>
      <form method="dialog" onSubmit={handlereset}>
        <button>close</button>
      </form>
    </dialog>
  );
});
export default Resultmodal;
