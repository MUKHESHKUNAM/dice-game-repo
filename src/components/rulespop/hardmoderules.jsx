export const Hardmoderules = (props) => {
  return (
    <>
      <div className="overlay">
        <div className="rulespopup">
          <div>
            <h1> HARDMODE RULES</h1>
          </div>
          <div>
            <h4>1.INCLUDING THE RULES BEFORE HERE ARE SOME NEW RULES</h4>
            <h4>
              2. PLAYER LOOSES 20 POINTS HIS ENTIRE SCORE WHEN THE ROLLS TOW SIX
              IN A ROW. AFTER THAT, IT'S THE NEXT PLAYERS TURN.
            </h4>
            <h4>
              3. THE GLOBAL SCORE IS INCREASED TO 100 POINTS .SO FIRST PLAYER
              REACHING GLOBAL SCORE WINS THE GAME.
            </h4>
            <h4>
              4. ANOTHER DICE IS ADDED TO MAKE THE GAME FASTER TO REACH GLOBAL
              SCORE AND INTRESTING.
            </h4>
            <h4>5. FIFTH</h4>
          </div>
          <div>
            <h1>GOOD LUCK</h1>
          </div>
          <div>
            <button onClick={props.close}>close</button>
          </div>
        </div>
      </div>
    </>
  );
};
