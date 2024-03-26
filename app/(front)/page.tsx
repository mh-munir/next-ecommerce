import ProductItem from "@/components/products/ProductItem";
import data from "@/lib/data";

export default function Home() {
  return (
    <main className="flex min-h-screen py-10">
      <div className="max-w-[1140px] mx-auto px-5">
      <h1 className="text-2xl font-bold py-2">Latest Products</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {
          data.products.map((product)=>(
          <ProductItem key={product.slug} product={product}/>
          
          ))
          }
          </div>
      </div>
    </main>
  );
}
