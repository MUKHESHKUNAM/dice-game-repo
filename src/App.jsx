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
import { PrimaryButton } from "./components/primarybutton";
import { Secondrybutton } from "./components/secondrybutton";
import { Inputfeild } from "./components/inputfield";
import { Images } from "./components/images";
import { useState } from "react";
import { Players } from "./components/players";
import { Popup } from "./components/popup";
import { Edit } from "./components/edit";
import { PiPenLight } from "react-icons/pi";
import { Winner } from "./components/winnerpopup";
export const App = () => {
  let [winnername, setwinnername] = useState("");
  let [winner, setwinner] = useState(false);
  let [openrules, setopenrules] = useState(false);
  let [openedit, setopenedit] = useState(false);
  let [curscore, setcurscore] = useState(0);
  let [seccurscore, setseccurscore] = useState(0);
  let [player1Score, setPlayer1Score] = useState(0);
  let [player2Score, setPlayer2Score] = useState(0);
  let [activeplayer, setactiveplayer] = useState(1);
  let [inputval, setinputvalfun] = useState(0);
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
      const playerscore1 = player1Score + curscore;
      if (playerscore1 >= inputval) {
        setPlayer1Score(playerscore1);
        setcurscore(0);
        win();
      } else {
        setPlayer1Score(playerscore1);
        setcurscore(0);
      }
    } else {
      const playerscor2 = player2Score + seccurscore;
      if (playerscor2 >= inputval) {
        setactiveplayer(1);
        setPlayer2Score(playerscore2);
        win();
      } else {
        setPlayer2Score(playerscor2);
        setseccurscore(0);
        setactiveplayer(1);
      }
    }
  };

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
  const openpopup = () => {
    setopenrules(!openrules);
  };
  const openpopup1 = () => {
    setopenedit(!openedit);
  };
  const win = () => {
    setwinner(!winner);
  };

  return (
    <>
      <div className="mainbox">
        <div className="player1box">
          <Players
            name="player1"
            score={player1Score}
            player={activeplayer === 1}
            curr="current"
            currscore={curscore}
          />
        </div>

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
        {winner && <Winner name={win} />}

        <div className="player2box">
          <Players
            name="player2"
            score={player2Score}
            player={activeplayer === 2}
            curr="current"
            currscore={seccurscore}
          />
        </div>

        <Images randomnum={number} />
        <div className="secondboxcontainer">
          <div className="secondbox">
            <TransprentButtons
              // styleName="roll"
              RollDicefun={RollDice}
              myButton="RollDice"
              icon={<FaDice className="icon" />}
            />
          </div>
          <div className="secondbox">
            <TransprentButtons
              RollDicefun={Hold}
              myButton="HOLD"
              icon={<FaHandPaper className="icon" />}
            />
          </div>
        </div>
        <div className="thirdbox">
          <PrimaryButton
            myButton="NORMAL MODE"
            icon={<FaSmile className="icon" />}
          />
          <PrimaryButton
            myButton="HARD MODE"
            icon={<FaSkull className="icon" />}
          />
          <Inputfeild value={input} />
          <Secondrybutton
            click={openpopup}
            myButton="RULES"
            icon={<FaListUl className="icon" />}
          />
          {openrules && <Popup close={openpopup} />}
          <Secondrybutton
            click={openpopup1}
            myButton="EDIT PLAYER NAME"
            icon={<FaEdit className="icon" />}
          />
          {openedit && <Edit close={openpopup1} />}
        </div>
      </div>
    </>
  );
};
