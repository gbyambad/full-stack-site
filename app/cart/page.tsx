import ShoppingCartList from "./shoppingCartList";

export default async function CartPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/1/cart`,
    { cache: "no-store" },
  );
  let cartProducts = [];
  try {
    const text = await response.text();
    cartProducts = text ? JSON.parse(text) : [];
  } catch (error) {
    cartProducts = [];
    console.error("Failed to parse cart products:", error);
  }
  return <ShoppingCartList initialCartProducts={cartProducts} />;
}
