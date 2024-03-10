import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const Cart = () => {
  const items = useSelector((state) => state.counter.items);
  return (
    <div className="overflow-y-auto h-screen">
      <h2>Cart:</h2>
      <ul className="container grid gap-2 grid-cols-1">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
