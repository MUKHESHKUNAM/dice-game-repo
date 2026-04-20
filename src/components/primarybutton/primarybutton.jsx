import "../primarybutton/primarybutton.css";
export const PrimaryButton = (props) => {
  return (
    <>
      <div className="primarybutton">
        <button>
          {props.icon}
          {props.myButton}
        </button>
      </div>
    </>
  );
};
