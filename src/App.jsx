import "./App.css";
import {
  FaDice,
  FaEdit,
  FaHandPaper,
  FaListUl,
  FaPlay,
  FaRedo,
  FaSkull,
  FaSmile,
} from "react-icons/fa";
import { TransprentButtons } from "./components/TransprentButton";
import { PlayerNameScore } from "./components/PlayernameScore";
import { CurrentScore } from "./components/CurrentScore";
import { PrimaryButton } from "./components/primarybutton";
import { Secondrybutton } from "./components/secondrybutton";
import { Inputfeild } from "./components/inputfield";
import { Images } from "./components/images";
import { useState } from "react";
export const App = () => {
  let [curscore, setcurscore] = useState(0);
  let [seccurscore, setseccurscore] = useState(0);
  let [player1Score, setPlayer1Score] = useState(0);
  let [player2Score, setPlayer2Score] = useState(0);
  let [activeplayer, setactiveplayer] = useState(1);
  let [inputval, setinputvalfun] = useState(0);
  let [winner, setwinner] = useState("");
  let [number, setnumber] = useState(1);

  const RollDice = () => {
    const randnum = Math.ceil(Math.random() * 6);
    setnumber(randnum);
    if (activeplayer === 1) {
      setcurscore(curscore + randnum);
    } else {
      setseccurscore(seccurscore + randnum);
    }
  };

  const Hold = () => {
    if (activeplayer === 1) {
      setactiveplayer(2);
      setPlayer1Score(player1Score + curscore);
      setcurscore(0);
      
    } else {
      setactiveplayer(1);
      setPlayer2Score(player2Score + seccurscore);
      setseccurscore(0);
    }
  };
  // const won = () => {
  //   if (player1Score >= inputval) {
  //     setwinner("YOU WON");
  //   }
  // };
  console.log(inputval);
  // const doublfun = () => {
  //   Hold();
  //   won();
  // };
  const newgame = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setcurscore(0);
    setseccurscore(0);
    setactiveplayer(1);
    setnumber(0);
  };
  const input = (e) => {
    setinputvalfun(e.target.value);
  };

  return (
    <>
      <div className="mainbox">
        <div className="FirstBOx">
          <TransprentButtons
            myButton="startGame"
            icon={<FaPlay className="icon" />}
          />
          <TransprentButtons
            RollDicefun={newgame}
            myButton="newgame"
            icon={<FaRedo className="icon" />}
          />
        </div>
        <div className="SecondBox">
          <PlayerNameScore name="PlayerOne" Score={player1Score} win={winner} />
          <Images randomnum={number} />
          <PlayerNameScore name="PlayerTwo" Score={player2Score} />
        </div>
        <div className="ThirdBox">
          <CurrentScore text="currentScore" curScore={curscore} />
          <div className="ThirdMiddleBox">
            <div>
              <TransprentButtons
                styleName="roll"
                RollDicefun={RollDice}
                myButton="RollDice"
                icon={<FaDice className="icon" />}
              />
            </div>
            <div>
              <TransprentButtons
                RollDicefun={Hold}
                myButton="HOLD"
                icon={<FaHandPaper className="icon" />}
              />
            </div>
          </div>
          <CurrentScore text="CurrentScore" curScore={seccurscore} />
        </div>
        <div className="FourthBox">
          <PrimaryButton
            myButton1="normalmode"
            icon={<FaSmile className="icon" />}
          />
          <Secondrybutton
            myButton2=" hardmode"
            icon={<FaSkull className="icon" />}
          />
          <Inputfeild
            myInput={
              <input
                onChange={input}
                type="number"
                placeholder="targetScore"
                className="inputbar"
              ></input>
            }
          />
          <PrimaryButton
            myButton1="rules"
            icon={<FaListUl className="icon" />}
          />
          <Secondrybutton
            myButton2="Edit player name"
            icon={<FaEdit className="icon" />}
          />
        </div>
      </div>
    </>
  );
};
