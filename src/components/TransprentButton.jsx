import { FaSmile } from "react-icons/fa";
import "../styles.css/Button.css";
export const TransprentButtons = (props) => {
  return (
    <>
      <div className="topbutton">
        <button>
          {props.icon}
          {props.myButton}
        </button>
      </div>
    </>
  );
};
