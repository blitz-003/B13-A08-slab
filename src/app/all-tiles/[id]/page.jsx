import { Button, Card, CloseButton } from "@heroui/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://slab-json-server.onrender.com/products");
  const products = await res.json();

  const product = products.find((p) => p.id == id);

  return (
    <div>
      <Card className="w-[80vw] h-auto overflow-hidden mx-auto mt-10 shadow-2xl">
        <div className="flex h-full flex-col md:flex-row items-center justify-center">
          {/* LEFT: IMAGE (50%) */}
          <div className="w-full md:w-1/2 h-full">
            <Image
              src={product.image}
              alt=""
              className="w-full h-full object-contain"
              width={1000}
              height={800}
            />
          </div>

          {/* RIGHT: DETAILS (50%) */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-6 gap-4">
            {/* TITLE + DESCRIPTION */}
            <Card.Header className="p-0">
              <Card.Title className="text-xl md:text-3xl font-semibold">
                {product.title}
              </Card.Title>

              <Card.Description className="text-base text-gray-600 mt-2">
                {product.description}
              </Card.Description>
            </Card.Header>

            {/* PRODUCT DETAILS (ALIGNED) */}
            <div className="flex flex-col gap-2 text-base text-gray-700">
              <span>
                <strong>Category:</strong> {product.category}
              </span>
              <span>
                <strong>Material:</strong> {product.material}
              </span>
              <span>
                <strong>Size:</strong> {product.dimensions}
              </span>

              <div className="flex gap-4">
                {/* PRICE */}
                <span className="text-xl font-semibold text-black mt-2">
                  {product.currency === "USD" ? "$" : product.currency}{" "}
                  {product.price}
                </span>

                {/* STOCK BADGE */}
                <span className="mt-2 inline-block w-fit px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <Link href={"/all-tiles"}>
                <Button className="mt-4">
                  {" "}
                  <IoMdArrowRoundBack />
                  View Other Tiles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PhotoDetailsPage;
