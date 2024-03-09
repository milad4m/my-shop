import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../api/fakeStore";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  increaseItem,
  decreaseItem,
} from "../store/slices/productSlice";
const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { data } = useQuery({
    queryKey: ["productDetail", productId],
    queryFn: getProductDetails,
  });
  const items = useSelector((state) => state.counter.items);
  const quantity = items.find((item) => item.id === data?.id)?.itemQuantity;
  const totalQuantity = useSelector((state) => state.counter.totalQuantity);
  return (
    <div className="col-span-5 container">
      <p className="mb-4">total Quantity : {totalQuantity}</p>
      <div className="text-center flex flex-col justify-around items-center">
        <img
          className="h-32 lg:h-80 mx-auto"
          src={data?.image}
          alt={data?.category}
        />
        <h3 key={data?.id} className="font-bold	m-3">
          {data?.title}
        </h3>
        <div>
          {quantity ? (
            <>
              <button
                className="font-bold text-lg text-blue-700 p-5"
                onClick={() =>
                  dispatch(
                    increaseItem({
                      title: data?.title,
                      id: data?.id,
                      image: data?.image,
                    }),
                  )
                }
              >
                +
              </button>
              <span>{quantity}</span>
              <button
                className="font-bold text-lg text-red-700 p-5"
                onClick={
                  quantity == 1
                    ? () =>
                        dispatch(
                          removeItem({
                            title: data?.title,
                            id: data?.id,
                            image: data?.image,
                          }),
                        )
                    : () =>
                        dispatch(
                          decreaseItem({
                            title: data?.title,
                            id: data?.id,
                            image: data?.image,
                          }),
                        )
                }
              >
                {quantity == 1 ? "remove" : "-"}
              </button>
            </>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() =>
                dispatch(
                  addItem({
                    title: data?.title,
                    id: data?.id,
                    image: data?.image,
                  }),
                )
              }
            >
              add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
