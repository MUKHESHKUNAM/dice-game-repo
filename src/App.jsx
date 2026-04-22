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
import { Hardmoderules } from "./components/rulespop/hardmoderules";
export const App = () => {
  let [normalmodebtn, setnormalmodebtn] = useState(false);
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
  let [number1, setnumber1] = useState(1);
  let [hardmoderules, sethardmoderules] = useState(false);
  let [lastrollsix, setlastrollsix] = useState(false);

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

  const RollDicehard = () => {
    const randnum = Math.ceil(Math.random() * 6);
    const randnum1 = Math.ceil(Math.random() * 6);

    setnumber(randnum);
    setnumber1(randnum1);
    if (activeplayer === 1) {
      if (randnum === 6 || randnum1 === 6) {
        if (lastrollsix === true) {
          setcurscore((cur) => cur - 20);
          setlastrollsix(false);
        } else {
          if (randnum === 1 || randnum1 === 1) {
            setactiveplayer(2);
            setcurscore(0);
            setPlayer1Score((player1Score) => player1Score + curscore);
          } else {
            setcurscore(curscore + randnum + randnum1);
            setlastrollsix(true);
          }
        }
      } else {
        if (randnum === 1 || randnum1 === 1) {
          setactiveplayer(2);
          setcurscore(0);
          setPlayer1Score((player1Score) => player1Score + curscore);
          setlastrollsix(false);
        } else {
          setcurscore(curscore + randnum + randnum1);
          setlastrollsix(false);
        }
      }
    } else {
      if (randnum === 6 || randnum1 === 6) {
        if (lastrollsix === true) {
          setPlayer2Score((player2Score) => player2Score - 20);
          setlastrollsix(false);
        } else {
          if (randnum === 1 || randnum1 === 1) {
            setactiveplayer(1);
            setseccurscore(0);
            setPlayer2Score((player2Score) => player2Score + seccurscore);
          } else {
            setseccurscore(seccurscore + randnum + randnum1);
            setlastrollsix(true);
          }
        }
      } else {
        if (randnum === 1 || randnum1 === 1) {
          setactiveplayer(1);
          setseccurscore(0);
          setPlayer2Score((player2Score) => player2Score + seccurscore);
          setlastrollsix(false);
        } else {
          setseccurscore(seccurscore + randnum + randnum1);
          setlastrollsix(false);
        }
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
    setnormalmode(true);
    // setopenedit(!openedit);
  };

  const newgame = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setcurscore(0);
    setseccurscore(0);
    setactiveplayer(1);
    setnumber(1);
    setnumber1(1);
    setplayer1name("player1");
    setplayer2name("player2");
  };
  const input = (e) => {
    setinputvalfun(e.target.value);
  };
  const openpopup = () => {
    if (hardmode === true) {
      sethardmoderules(!hardmoderules);
    } else {
      setopenrules(!openrules);
    }
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
    setstartgame(false);
  };
  const normalmode = () => {
    setnormalmodebtn(true);
    sethardmode(false);
  };

  let uichangevar = hardmode ? "root hardmode" : "root";
  let playerbox1 = hardmode ? "player1box hardplayer1box" : "player1box";
  let playerbox2 = hardmode ? "player2box hardplayer2box" : "player2box";

  return (
    <div className={uichangevar}>
      <div className="mainbox">
        <div className={playerbox1}>
          <Players
            name={playername1}
            score={player1Score}
            player={activeplayer === 1}
            curr="current"
            currscore={curscore}
          />
        </div>

        <div className="FirstBOx">
          <TransprentButtons
            RollDicefun={newgame}
            myButton="newgame"
            icon={<FaRedo className="icon" />}
          />

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

        <div className={playerbox2}>
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
          {hardmode && <Images randomnum={number1} />}
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
            {hardmode && (
              <TransprentButtons
                // styleName="roll"
                RollDicefun={RollDicehard}
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
            {hardmode && (
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
          {hardmoderules && <Hardmoderules close={openpopup} />}
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
