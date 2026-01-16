import NotFoundPage from "@/app/not-found";
import { products } from "@/app/product-data";
import Image from "next/image";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <div className="container mx-auto p-8 flex flex-col md:flex-row">
      <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
        <Image
          className="w-full h-auto rounded-lg shadow-md"
          src={"/" + product.imageUrl}
          alt={product.name}
          width={100}
          height={100}
        />
      </div>
      <div className=" md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl text-gray-600 mb-6">${product.price}</p>
        <h1 className="text-2xl font-semibold mb-2">Description</h1>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
}
