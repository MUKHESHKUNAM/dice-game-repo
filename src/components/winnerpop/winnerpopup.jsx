import "../../styles.css/Popup.css";
export const Winner = (props) => {
  return (
    <>
      <div className="overlay">
        <div className="winnrepopup">
          <h1>
            {props.icon}
            {props.icon} congratulations {props.icon}
            {props.icon}
          </h1>
          <h1> {props.name} WON THE GAME</h1>
          <img src={"src/assets/dfcca3ed09280445dc9db9b4b55eac52.jpg    "} />
          <button onClick={props.close}>close</button>
        </div>
      </div>
    </>
  );
};
