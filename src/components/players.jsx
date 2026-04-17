import "../styles.css/players.css";
export const Players = (props) => {
    // console.log(props.player)
  let activeindc = props.player ? "playerbox active" : "playerbox";

  return (
    <>
      <div className={activeindc}>
        <h1 className="player-name">{props.name}</h1>
        <h3>{props.score}</h3>
      </div>
      <div className="currentscorebox">
        <h3>{props.curr}</h3>
        <h4>{props.currscore}</h4>
      </div>
    </>
  );
};
