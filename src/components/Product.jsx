import { Link } from "react-router-dom";

const Product = ({
  item,
  addItemEvent,
  removeItemEvent,
  increaseItemEvent,
  decreaseItemEvent,
  quantity,
}) => {
  return (
    <>
      <li>{item.title}</li>
      {quantity ? (
        <>
          <button onClick={increaseItemEvent}>+</button>
          <button onClick={quantity == 1 ? removeItemEvent : decreaseItemEvent}>
            {quantity == 1 ? "remove" : "-"}
          </button>
        </>
      ) : (
        <button onClick={addItemEvent}>add to cart</button>
      )}
      <span>This item value is {quantity || 0}</span>
      <Link to={`/details/${item.id}`}>Details</Link>
    </>
  );
};

export default Product;
