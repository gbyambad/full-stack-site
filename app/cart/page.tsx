import ShoppingCartList from "./shoppingCartList";

export default async function CartPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/1/cart`,
  );
  let cartProducts = [];
  try {
    cartProducts = await response.json();
  } catch (error) {
    cartProducts = [];
  }
  return <ShoppingCartList initialCartProducts={cartProducts} />;
}
