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
            <h4>1. THE GAME HAS 2 PLAYERS,PLAYING IN ROUNDS</h4>
            <h4>2. IN EACH TURN, A PLAYER ROLLS DICE AS MANY TIMES  AS THE WHISHES.</h4>
            <h4>
              3. IF ANY PLAYER ROLLES 1 LOOSE THERE TURN. OPPONENT WILL GET
              CHANCE TO ROLL THE DICE.
            </h4>
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
