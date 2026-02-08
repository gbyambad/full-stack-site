import ProductsList from "../ProductsList";

export default async function ProductsPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
    {
      cache: "no-store",
    },
  );
  const products = await response.json();
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <ProductsList products={products} />
    </div>
  );
}
