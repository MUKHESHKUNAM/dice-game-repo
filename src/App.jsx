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
export const App = () => {
  return (
    <>
      <div className="mainbox">
        <div className="FirstBOx">
          <TransprentButtons
            myButton="startGame"
            icon={<FaPlay className="icon" />}
          />
          <TransprentButtons
            myButton="newgame"
            icon={<FaRedo className="icon" />}
          />
        </div>
        <div className="SecondBox">
          <PlayerNameScore name="PlayerOne" Score="0" />
          <Images />
          <PlayerNameScore name="PlayerTwo" Score="0" />
        </div>
        <div className="ThirdBox">
          <CurrentScore text="currentScore" Score="0" />
          <div className="ThirdMiddleBox">
            <div>
              <TransprentButtons
                myButton="RollDice"
                icon={<FaDice className="icon" />}
              />
            </div>
            <div>
              <TransprentButtons
                myButton="HOLD"
                icon={<FaHandPaper className="icon" />}
              />
            </div>
          </div>
          <CurrentScore text="CurrentScore" Score="0" />
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
            icon={<FaEdit  className="icon" />}
          />
        </div>
      </div>
    </>
  );
};
