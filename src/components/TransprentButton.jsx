import "../styles.css/Button.css";
export const TransprentButtons = ({
  icon,
  myButton,
  RollDicefun,
  styleName,
}) => {
  return (
    <>
      <div>{icon}</div>
      <div className={styleName ? styleName : "topbutton"}>
        <button onClick={RollDicefun}>{myButton}</button>
      </div>
    </>
  );
};
