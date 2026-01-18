import { NextRequest } from "next/server";
import { products } from "@/app/product-data";

type ProductParams = {
  id: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<ProductParams> },
) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return new Response("Product not found!", {
      status: 404,
    });
  }

  return new Response(JSON.stringify(product), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
