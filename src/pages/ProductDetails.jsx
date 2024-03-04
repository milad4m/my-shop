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
  console.log(useParams());
  const { productId } = useParams();
  const dispatch = useDispatch();
  const query = useQuery({
    queryKey: ["productDetail", productId],
    queryFn: getProductDetails,
  });
  const items = useSelector((state) => state.counter.items);
  const quantity = items.find(
    (item) => item.id === query.data?.id,
  )?.itemQuantity;
  return (
    <>
      <div key={query.data?.id}>{query.data?.title}</div>
      {quantity ? (
        <>
          <button
            onClick={() =>
              dispatch(
                increaseItem({ title: query.data?.title, id: query.data?.id }),
              )
            }
          >
            +
          </button>
          <button
            onClick={
              quantity == 1
                ? () =>
                    dispatch(
                      removeItem({
                        title: query.data?.title,
                        id: query.data?.id,
                      }),
                    )
                : () =>
                    dispatch(
                      decreaseItem({
                        title: query.data?.title,
                        id: query.data?.id,
                      }),
                    )
            }
          >
            {quantity == 1 ? "remove" : "-"}
          </button>
        </>
      ) : (
        <button
          onClick={() =>
            dispatch(addItem({ title: query.data?.title, id: query.data?.id }))
          }
        >
          add to cart
        </button>
      )}
      <span>This item value is {quantity || 0}</span>
    </>
  );
};

export default ProductDetails;
