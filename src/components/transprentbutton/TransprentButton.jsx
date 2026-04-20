import "../transprentbutton/Button.css";
export const TransprentButtons = ({
  icon,
  myButton,
  RollDicefun,
  styleName,
}) => {
  return (
    <>
      <div>{icon}</div>
      <div className="topbutton">
        <button onClick={RollDicefun}>{myButton}</button>
      </div>
    </>
  );
};
