import ProductsList from "../ProductsList";

export default async function ProductsPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
    {
      cache: "no-store",
    },
  );
  const products = await response.json();

  const response2 = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/2/cart`,
    {
      cache: "no-store",
    },
  );

  let cartProducts = [];
  try {
    const text = await response2.text();
    cartProducts = text ? JSON.parse(text) : [];
  } catch (error) {
    cartProducts = [];
    console.error("Failed to parse cart products:", error);
  }
  console.log("Cart Products:", cartProducts);
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <ProductsList products={products} initialCartProducts={cartProducts} />
    </div>
  );
}
