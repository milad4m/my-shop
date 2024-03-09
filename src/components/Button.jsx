import { useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  increaseItem,
  decreaseItem,
} from "../store/slices/productSlice";
const Button = (props) => {
  const dispatch = useDispatch();
  const handleClickEvent = () => {
    switch (props.eventName.toUpperCase()) {
      case "ADD":
        dispatch(addItem(props.item));
        break;
      case "REMOVE":
        dispatch(removeItem(props.item));
        break;
      case "INCREASE":
        dispatch(increaseItem(props.item));
        break;
      case "DECREASE":
        dispatch(decreaseItem(props.item));
        break;

      default:
        throw new Error("Event name not exist!");
    }
  };
  return (
    <button
      className={props.classList ? props.classList : "noClass"}
      onClick={handleClickEvent}
    >
      {props.children}
    </button>
  );
};

export default Button;
