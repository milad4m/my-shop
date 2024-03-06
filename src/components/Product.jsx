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
      <li className="border-2 border-sky-500 text-center flex flex-col justify-around items-center">
        <img
          className="h-32 lg:h-48 mx-auto"
          src={item.image}
          alt={item.category}
        />
        <h2 className="font-bold	m-3">{item.title}</h2>
        <div>
          {quantity ? (
            <>
              <button
                className="font-bold text-lg text-blue-700 p-5"
                onClick={increaseItemEvent}
              >
                +
              </button>
              <span>{quantity}</span>
              <button
                className="font-bold text-lg text-red-700 p-5"
                onClick={quantity == 1 ? removeItemEvent : decreaseItemEvent}
              >
                {quantity == 1 ? "remove" : "-"}
              </button>
            </>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={addItemEvent}
            >
              add to cart
            </button>
          )}
          {/* <span>This item value is {quantity || 0}</span> */}
        </div>
        <Link
          className="text-blue-600 visited:text-purple-600 my-4"
          to={`/details/${item.id}`}
        >
          Details
        </Link>
      </li>
    </>
  );
};

export default Product;
