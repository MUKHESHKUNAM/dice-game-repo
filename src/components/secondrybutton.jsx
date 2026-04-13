import "../styles.css/Secondrybutton.css";
export const Secondrybutton = (props) => {
  return (
    <>
      <div className="secondrybutton">
        <button>
          {" "}
          {props.icon}
          {props.myButton2}
        </button>
      </div>
    </>
  );
};
