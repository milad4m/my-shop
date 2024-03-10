import { useSelector } from "react-redux";
const TotalQuantity = () => {
  const totalQuantity = useSelector((state) => state.counter.totalQuantity);

  return <p>total Quantity : {totalQuantity}</p>;
};

export default TotalQuantity;
