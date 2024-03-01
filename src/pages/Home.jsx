import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/fakeStore";

const Home = () => {
  const query = useQuery({ queryKey: ["products"], queryFn: getProducts });
  return (
    <div>
      <ul>
        {query.data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
