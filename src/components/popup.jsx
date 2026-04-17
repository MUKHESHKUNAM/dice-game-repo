import "../styles.css/Popup.css";
export const Popup = (props) => {
  return (
    <>
      <div className="overlay">
        <div className="rulespopup">
          <div>
            <h1>RULES</h1>
          </div>
          <div>
            <h4>FIRST</h4>
            <h4> SECOND</h4>
            <h4>THIRD</h4>
            <h4>FOURTH</h4>
            <h4> FIFTH</h4>
          </div>
          <div>
            <button onClick={props.close}>close</button>
          </div>
        </div>
      </div>
    </>
  );
};
