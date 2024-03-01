import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/fakeStore";
import { Link } from "react-router-dom";
const Home = () => {
  const query = useQuery({ queryKey: ["products"], queryFn: getProducts });
  return (
    <div>
      <ul>
        {query.data?.map((product) => (
          <div key={product.id}>
            <li>{product.title}</li>
            <Link to={`/details/${product.id}`}>Details</Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
