import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../api/fakeStore";
import { useSelector } from "react-redux";
import Button from "../components/Button";
const ProductDetails = () => {
  const { productId } = useParams();
  const { data } = useQuery({
    queryKey: ["productDetail", productId],
    queryFn: getProductDetails,
  });
  const items = useSelector((state) => state.counter.items);
  const quantity = items.find((item) => item.id === data?.id)?.itemQuantity;
  const totalQuantity = useSelector((state) => state.counter.totalQuantity);
  const item = { title: data?.title, id: data?.id, image: data?.image };
  return (
    <div className="col-span-5 container">
      <p className="mb-4">total Quantity : {totalQuantity}</p>
      <div className="text-center flex flex-col justify-around items-center">
        <img
          className="h-32 lg:h-80 mx-auto"
          src={item.image}
          alt={item.title}
        />
        <h3 key={data?.id} className="font-bold	m-3">
          {item.title}
        </h3>
        <div>
          {quantity ? (
            <>
              <Button
                eventName="increase"
                classList="font-bold text-lg text-blue-700 p-5"
                item={item}
              >
                +
              </Button>
              <span>{quantity}</span>
              <Button
                eventName={quantity == 1 ? "remove" : "decrease"}
                item={item}
                classList="font-bold text-lg text-red-700 p-5"
              >
                {quantity == 1 ? "remove" : "-"}
              </Button>
            </>
          ) : (
            <Button
              eventName="Add"
              classList="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              item={item}
            >
              Add To Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
