import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../api/fakeStore";

const ProductDetail = () => {
  const { productId } = useParams();
  const query = useQuery({
    queryKey: ["productDetail", productId],
    queryFn: getProductDetail,
  });
  console.log(query.data);
  return <div key={query.data?.id}>{query.data?.title}</div>;
};

export default ProductDetail;
