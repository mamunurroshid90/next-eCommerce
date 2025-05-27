import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";
import { getData } from "@/helpers";

export default async function Home() {
  const endpoints = "https://dummyjson.com/products";
  const { products } = await getData(endpoints);
  // console.log(products);
  return (
    <div>
      <main>
        <Banner />
        <ProductList products={products} />
      </main>
    </div>
  );
}
