import "../styles.css/Button.css";
export const TransprentButtons = ({ icon, myButton, RollDicefun,styleName, }) => {
  return (
    <>
      <div className={styleName?styleName:"topbutton"}>
        <button onClick={RollDicefun}>
          {icon}
          {myButton}
        </button>
      </div>
    </>
  );
};
