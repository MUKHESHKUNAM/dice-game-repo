import "../styles.css/Popup.css";
export const Edit = (props) => {
  return (
    <>
      <div className="overlay">
        <div className="editpopup">
          <h1>EDIT PLAYER NAME</h1>
          <div>
            <input type="text" placeholder="enterplayer1nam" />
          </div>
          <div>
            <input type="text" placeholder="enterplayer2nam" />
          </div>
          <button onClick={props.close}>close</button>
        </div>
      </div>
    </>
  );
};
