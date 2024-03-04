const baseUrl = import.meta.env.VITE_FAKESTORE_API_URL;
const getProducts = async () => {
  const response = await fetch(`${baseUrl}/products`);
  if (!response.ok) {
    throw new Error(`products fetch not ok`);
  }
  const data = response.json();
  return data;
};

const getProductDetails = async ({ queryKey }) => {
  const productId = queryKey[1];
  const response = await fetch(`${baseUrl}/products/${productId}`);
  if (!response.ok) {
    throw new Error(`productDetails/${productId} fetch not ok`);
  }
  const data = response.json();
  return data;
};
export { getProducts, getProductDetails };
