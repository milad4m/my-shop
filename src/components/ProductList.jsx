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
  const { data } = useQuery({ queryKey: ["products"], queryFn: getProducts });
  const items = useSelector((state) => state.counter.items);
  const totalQuantity = useSelector((state) => state.counter.totalQuantity);
  const dispatch = useDispatch();
  return (
    <>
      {console.log(items)}
      <p>total Quantity : {totalQuantity}</p>
      <ul className="container grid gap-2 xl:gap-3 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {data?.map((product) => (
          <Product
            key={product.id}
            item={product}
            addItemEvent={() =>
              dispatch(
                addItem({
                  title: product.title,
                  id: product.id,
                  image: product.image,
                }),
              )
            }
            removeItemEvent={() =>
              dispatch(
                removeItem({
                  title: product.title,
                  id: product.id,
                  image: product.image,
                }),
              )
            }
            increaseItemEvent={() =>
              dispatch(
                increaseItem({
                  title: product.title,
                  id: product.id,
                  image: product.image,
                }),
              )
            }
            decreaseItemEvent={() =>
              dispatch(
                decreaseItem({
                  title: product.title,
                  id: product.id,
                  image: product.image,
                }),
              )
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
