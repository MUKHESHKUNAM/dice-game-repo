import "../primarybutton/primarybutton.css";
export const PrimaryButton = (props) => {
  return (
    <>
      <div className={"primarybutton"}>
        <button onClick={props.click}>
          {props.icon}
          {props.myButton}
        </button>
      </div>
    </>
  );
};
