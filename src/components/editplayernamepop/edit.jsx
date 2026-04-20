import { useState } from "react";
import "../../styles.css/Popup.css";
import { Secondrybutton } from "../secondrybutton/secondrybutton";
export const Edit = (props) => {
  let [playername1, setplayer1name] = useState("player1");
  let [playername2, setplayer2name] = useState("player2");
  

  return (
    <>
      <div className="overlay">
        <div className="editpopup">
          <h1>EDIT PLAYER NAME</h1>
          <p className="warning">{props.warning}</p>
          <div>
            <input
              type="text"
              placeholder={playername1}
              onChange={props.value1}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder={playername2}
              onChange={props.value2}
            />
          </div>
          <div className="popupbtn">
            {/* <button onClick={props.close}>close</button> */}

            <Secondrybutton myButton="CLOSE" click={props.close} />
            <Secondrybutton myButton="ENTER" click={props.enter} />
          </div>
        </div>
      </div>
    </>
  );
};
