import { useEndpointFetcher, useFetch } from "src/shared/network";
import { ProductsList } from "src/features/product";

export const MainPage = () => {
  const fetchProducts = useEndpointFetcher("products");
  const { data, loading, fetcher } = useFetch({
    fetcher: fetchProducts,
  });

  return (
    <div className="">
      <button onClick={fetcher}>Fetch products</button>
      {loading && <div className="">LOADING...</div>}
      {data && <ProductsList products={data} />}
    </div>
  );
};
