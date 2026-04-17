import "../styles.css/CurrentScoreBox.css";
export const CurrentScore = (props) => {
  return (
    <>
      <div className="currentScoreBox">
        <h2>{props.text}</h2>
        <h3>{props.curScore}</h3>
      </div>
    </>
  );
};
