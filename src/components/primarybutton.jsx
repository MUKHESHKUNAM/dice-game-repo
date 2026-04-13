import "../styles.css/primarybutton.css";
export const PrimaryButton = (props) => {
  return (
    <>
      <div className="primarybutton">
        <button>
           {props.icon}
          {props.myButton1}
         
        </button>
      </div>
    </>
  );
};
