import Product from "./Product";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/fakeStore";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  increaseItem,
  decreaseItem,
} from "../store/slices/productSlice";
const ProductList = () => {
  const query = useQuery({ queryKey: ["products"], queryFn: getProducts });
  const items = useSelector((state) => state.counter.items);
  const totalQuantity = useSelector((state) => state.counter.totalQuantity);
  const dispatch = useDispatch();
  return (
    <>
      <p>total Quantity : {totalQuantity}</p>
      <ul>
        {query.data?.map((product) => (
          <Product
            key={product.id}
            item={product}
            addItemEvent={() =>
              dispatch(addItem({ title: product.title, id: product.id }))
            }
            removeItemEvent={() =>
              dispatch(removeItem({ title: product.title, id: product.id }))
            }
            increaseItemEvent={() =>
              dispatch(increaseItem({ title: product.title, id: product.id }))
            }
            decreaseItemEvent={() =>
              dispatch(decreaseItem({ title: product.title, id: product.id }))
            }
            quantity={
              items.find((item) => item.id === product.id)?.itemQuantity
            }
          />
        ))}
      </ul>
    </>
  );
};

export default ProductList;
