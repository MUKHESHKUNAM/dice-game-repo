import "../../styles.css/Popup.css";
export const Popup = (props) => {
  return (
    <>
      <div className="overlay">
        <div className="rulespopup">
          <div>
            <h1>RULES</h1>
          </div>
          <div>
            <h4>
              1. IF ANY PLAYER ROLLES 1 LOOSE THERE TURN. OPPONENT WILL GET
              CHANCE TO ROLL THE DICE.
            </h4>
            <h4>2. SECOND</h4>
            <h4>3. THIRD</h4>
            <h4>4. FOURTH</h4>
            <h4>5. FIFTH</h4>
          </div>
          <div>
            <button onClick={props.close}>close</button>
          </div>
        </div>
      </div>
    </>
  );
};
