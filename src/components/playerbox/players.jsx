import "../playerbox/players.css";
export const Players = (props) => {
  // console.log(props.player)
  let activeindc = props.player ? "playerbox active" : "playerbox";

  return (
    <>
      <div className={activeindc}>
        <div>
          <h1 className="player-name">{props.name}</h1>
        </div>
        <div>
          <h2>{props.score}</h2>
        </div>
      </div>
      <div className="currentscorebox">
        <h3>{props.curr}</h3>
        <h4>{props.currscore}</h4>
      </div>
    </>
  );
};
