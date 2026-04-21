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
  FaStar,
} from "react-icons/fa";
import { TransprentButtons } from "./components/transprentbutton/TransprentButton";
import { PrimaryButton } from "./components/primarybutton/primarybutton";
import { Secondrybutton } from "./components/secondrybutton/secondrybutton";
import { Inputfeild } from "./components/inputcomp/inputfield";
import { Images } from "./components/imagescomp/images";
import { useState } from "react";
import { Players } from "./components/playerbox/players";
import { Edit } from "./components/editplayernamepop/edit";
import { PiPenLight } from "react-icons/pi";
import { Winner } from "./components/winnerpop/winnerpopup";
import { Popup } from "./components/rulespop/rules";
export const App = () => {
  let [hardmode, sethardmode] = useState(false);
  let [warning, setwarning] = useState("");
  let [startgame, setstartgame] = useState(false);
  let [playername1, setplayer1name] = useState("player1");
  let [playername2, setplayer2name] = useState("player2");
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
      if (activeplayer === 1 && randnum === 1) {
        setactiveplayer(2);
        setcurscore(0);
      }
    } else {
      if (randnum === 1) {
        setactiveplayer(1);
        setseccurscore(0);
      } else {
        setseccurscore(seccurscore + randnum);
      }
    }
  };

  const Hold = () => {
    if (activeplayer === 1) {
      setactiveplayer(2);
      const playerscore1 = player1Score + curscore;
      if (playerscore1 >= inputval && inputval > 0) {
        setPlayer1Score(playerscore1);
        setcurscore(0);
        win("player1");
      } else {
        setPlayer1Score(playerscore1);
        setcurscore(0);
      }
    } else {
      const playerscor2 = player2Score + seccurscore;
      if (playerscor2 >= inputval && inputval > 0) {
        setactiveplayer(1);
        setPlayer2Score(playerscor2);
        setseccurscore(0);
        win("player2");
      } else {
        setPlayer2Score(playerscor2);
        setseccurscore(0);
        setactiveplayer(1);
      }
    }
  };
  const startfun = () => {
    setstartgame(true);
    setopenrules(!openrules);
    // setopenedit(!openedit);
  };

  // const newgame = () => {
  //   setPlayer1Score(0);
  //   setPlayer2Score(0);
  //   setcurscore(0);
  //   setseccurscore(0);
  //   setactiveplayer(1);
  //   setnumber(1);
  //   setplayer1name("player1");
  //   setplayer2name("player2");
  //   setopenedit(!openedit);
  // };
  const input = (e) => {
    setinputvalfun(e.target.value);
  };
  const openpopup = () => {
    setopenrules(!openrules);
  };
  const openpopup1 = () => {
    setopenedit(!openedit);
    setwarning("");
    setplayer1name("player1");
    setplayer2name("player2");
    setactiveplayer(1);
  };
  const enternames = () => {
    if (playername1 == "player1" || playername2 == "player2") {
      setwarning("PLAYER NAMES REQUIRED");
      return;
    } else {
      setwarning("");
      setopenedit(!openedit);
    }
  };
  const win = (name) => {
    setwinner(!winner);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setcurscore(0);
    setseccurscore(0);
    setactiveplayer(1);
    setnumber(1);
    setstartgame(false);
    setplayer1name("player1");
    setplayer2name("player2");

    setwinnername(name);
  };
  const name1input = (e) => {
    setplayer1name(e.target.value);
  };
  const name2input = (e) => {
    setplayer2name(e.target.value);
  };
  const uichange = () => {
    sethardmode(true);
  };
  const normalmode = () => {
    sethardmode(false);
  };

  let uichangevar = hardmode ? "root hardmode" : "root";

  return (
    <div className={uichangevar}>
      <div className="mainbox">
        <div className="player1box">
          <Players
            name={playername1}
            score={player1Score}
            player={activeplayer === 1}
            curr="current"
            currscore={curscore}
          />
        </div>

        <div className="FirstBOx">
          {/* <TransprentButtons
            RollDicefun={newgame}
            myButton="newgame"
            icon={<FaRedo className="icon" />}
          /> */}
          <TransprentButtons
            RollDicefun={startfun}
            myButton="startGame"
            icon={<FaPlay className="icon" />}
          />
        </div>
        {winner && (
          <Winner
            name={winnername}
            close={win}
            icon={<FaStar className="icon" />}
          />
        )}

        <div className="player2box">
          <Players
            name={playername2}
            score={player2Score}
            player={activeplayer === 2}
            curr="current"
            currscore={seccurscore}
          />
        </div>
        <div className="imagesbox">
          <Images randomnum={number} />
          {hardmode && <Images randomnum={number} />}
        </div>

        <div className="secondboxcontainer">
          <div className="secondbox">
            {startgame && (
              <TransprentButtons
                // styleName="roll"
                RollDicefun={RollDice}
                myButton="RollDice"
                icon={<FaDice className="icon" />}
              />
            )}
          </div>
          <div className="secondbox">
            {startgame && (
              <TransprentButtons
                RollDicefun={Hold}
                myButton="HOLD"
                icon={<FaHandPaper className="icon" />}
              />
            )}
          </div>
        </div>
        <div className="thirdbox">
          <PrimaryButton
            click={normalmode}
            myButton="NORMAL MODE"
            icon={<FaSmile className="icon" />}
          />
          <PrimaryButton
            click={uichange}
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
          {openedit && (
            <Edit
              close={openpopup1}
              value1={name1input}
              value2={name2input}
              enter={enternames}
              warning={warning}
            />
          )}
        </div>
      </div>
    </div>
  );
};
