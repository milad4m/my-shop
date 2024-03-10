import Button from "./Button";

const CartItem = ({ item }) => {
  return (
    <>
      <li className="text-center flex flex-col justify-around items-center">
        <img
          className="h-32 lg:h-48 mx-auto"
          src={item.image}
          alt={item.title}
        />
        <h3 className="font-bold m-3">{item.title}</h3>
        <div>
          <Button
            eventName="increase"
            classList="font-bold text-lg text-blue-700 p-5"
            item={item}
          >
            +
          </Button>
          <span>{item.itemQuantity}</span>
          <Button
            eventName={item.itemQuantity == 1 ? "remove" : "decrease"}
            item={item}
            classList="font-bold text-lg text-red-700 p-5"
          >
            {item.itemQuantity == 1 ? "remove" : "-"}
          </Button>
        </div>
      </li>
    </>
  );
};
export default CartItem;
