import Product from "./Product";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/fakeStore";
import { useSelector } from "react-redux";
import TotalQuantity from "./TotalQuantity";
const ProductList = () => {
  const { data } = useQuery({ queryKey: ["products"], queryFn: getProducts });
  const items = useSelector((state) => state.counter.items);
  return (
    <>
      {console.log(items)}
      <TotalQuantity />
      <ul className="container grid gap-2 xl:gap-3 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {data?.map((product) => (
          <Product
            key={product.id}
            item={product}
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
