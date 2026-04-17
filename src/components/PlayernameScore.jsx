import "../styles.css/PlayerNameScore.css";
export const PlayerNameScore = (props) => {
  return (
    <>
      <div className="headingbox">
        <h1>{props.name}</h1>
        <h2>{props.Score}</h2>
        <h2>{props.win}</h2>
      </div>
    </>
  );
};
