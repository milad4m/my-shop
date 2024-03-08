import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  increaseItem,
  decreaseItem,
} from "../store/slices/productSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.counter.items);
  return (
    <div className="overflow-y-auto h-screen">
      <h2>Cart:</h2>
      <ul className="container grid gap-2 grid-cols-1">
        {items.map((item) => (
          <li
            key={item.id}
            className="text-center flex flex-col justify-around items-center"
          >
            <img
              className="h-32 lg:h-48 mx-auto"
              src={item.image}
              alt={item.title}
            />
            <h3 className="font-bold	m-3">{item.title}</h3>
            <div>
              <>
                <button
                  className="font-bold text-lg text-blue-700 p-5"
                  onClick={() =>
                    dispatch(
                      increaseItem({
                        title: item.title,
                        id: item.id,
                        image: item.image,
                      }),
                    )
                  }
                >
                  +
                </button>
                <span>{item.itemQuantity}</span>
                <button
                  className="font-bold text-lg text-red-700 p-5"
                  onClick={() =>
                    item.itemQuantity == 1
                      ? dispatch(
                          removeItem({
                            title: item.title,
                            id: item.id,
                            image: item.image,
                          }),
                        )
                      : dispatch(
                          decreaseItem({
                            title: item.title,
                            id: item.id,
                            image: item.image,
                          }),
                        )
                  }
                >
                  {item.itemQuantity == 1 ? "remove" : "-"}
                </button>
              </>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
