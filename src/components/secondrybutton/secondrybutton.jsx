import { useState } from "react";
import "../secondrybutton/Secondrybutton.css";
export const Secondrybutton = (props) => {
  return (
    <>
      <div className="secondrybutton">
        <button onClick={props.click}>
          {props.icon}
          {props.myButton}
        </button>
      </div>
    </>
  );
};
