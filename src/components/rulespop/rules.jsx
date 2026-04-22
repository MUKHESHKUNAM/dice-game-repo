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
            <h4>1. THE GAME HAS 2 PLAYERS,PLAYING IN ROUNDS.</h4>
            <h4>
              2. IN EACH TURN, A PLAYER ROLLS DICE AS MANY TIMES AS THE
              WHISHES.EACH RSULT GET ADDED TO HIS ROUND SCORE.
            </h4>
            <h4>
              3. IF ANY PLAYER ROLLES 1 LOOSE THERE TURN. OPPONENT WILL GET
              CHANCE TO ROLL THE DICE.
            </h4>
            <h4>
              4. THE PLAYER CAN CHOOSE TI 'HOLD',WHICH MEANS THAT HIS ROUND
              SCORE GETS ADDED TO HIS GOBAL SCORE.AFTER THAT IT'S THE NEXT
              PLAYER'S TURN.
            </h4>
            <h4>
              5. THE FIRST PLAYER TO REACH 50 POINTS GLOBAL SCORE WINS THE GAME.
            </h4>
            <h4>
              6. YOU CAN CHANGE THE PREDEFINED SCORE OF 50 IN THE FINAL SCORE IN
              INPUT BOX.
            </h4>
          </div>
          <div>
            <h1>GOOD LUCK!</h1>
          </div>
          <div>
            <button onClick={props.close}>close</button>
          </div>
        </div>
      </div>
    </>
  );
};
