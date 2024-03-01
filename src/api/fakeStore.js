const baseUrl = import.meta.env.VITE_FAKESTORE_API_URL;
const getProducts = async () => {
  const response = await fetch(`${baseUrl}/products`);
  if (!response.ok) {
    throw new Error(`products fetch not ok`);
  }
  const data = response.json();
  return data;
};

const getProductDetail = async (id) => {
  const response = await fetch(`${baseUrl}/products/${id}`);
  if (!response.ok) {
    throw new Error(`productDetails/${id} fetch not ok`);
  }
  const data = response.json();
  return data;
};
export { getProducts, getProductDetail };
