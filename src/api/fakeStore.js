const baseUrl = import.meta.env.VITE_FAKESTORE_API_URL;
const getProducts = async () => {
  const response = await fetch(`${baseUrl}/products`);
  const data = response.json;
  return data;
};

const getProductDetail = async (id) => {
  const response = await fetch(`${baseUrl}/products/${id}`);
  const data = response.json;
  return data;
};
export { getProducts, getProductDetail };
