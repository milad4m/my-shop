import { Link } from "react-router-dom";
import Button from "./Button";

const Product = ({ item, quantity }) => {
  const customItem = { title: item?.title, id: item?.id, image: item?.image };
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
              <Button
                eventName="increase"
                classList="font-bold text-lg text-blue-700 p-5"
                item={customItem}
              >
                +
              </Button>
              <span>{quantity}</span>
              <Button
                eventName={quantity == 1 ? "remove" : "decrease"}
                item={customItem}
                classList="font-bold text-lg text-red-700 p-5"
              >
                {quantity == 1 ? "remove" : "-"}
              </Button>
            </>
          ) : (
            <Button
              eventName="Add"
              classList="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              item={customItem}
            >
              Add To Cart
            </Button>
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
