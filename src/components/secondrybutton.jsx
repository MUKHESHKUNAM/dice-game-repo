import "../styles.css/Secondrybutton.css";
export const Secondrybutton = (props) => {
  return (
    <>
      <div className="secondrybutton">
        <button onClick={props.click}>
          
          {props.icon}
          {props.myButton}
        </button>
      </div>
    </>
  );
};
