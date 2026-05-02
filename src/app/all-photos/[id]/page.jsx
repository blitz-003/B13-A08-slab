import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://slab-json-server.onrender.com/products");
  const products = await res.json();

  const product = products.find((p) => p.id == id);

  return (
    <div>
      <h1>{product?.title}</h1>
      <p>{product.prompt}</p>
      <Card className="w-[75vw] h-[80vh] overflow-hidden mx-auto">
        <div className="flex h-full flex-col md:flex-row">
          {/* LEFT: IMAGE (50%) */}
          <div className="w-full md:w-1/2 h-full">
            <Image
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
              alt=""
              className="w-full h-full object-contain"
              width={1200}
              height={1000}
            />
          </div>

          {/* RIGHT: DETAILS (50%) */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-6">
            <Card.Header className="p-0 mb-3">
              <Card.Title className="text-2xl">
                Become an ACME Creator!
              </Card.Title>
              <Card.Description>
                Lorem ipsum dolor sit amet consectetur. Sed arcu donec id
                aliquam dolor sed amet faucibus etiam.
              </Card.Description>
            </Card.Header>

            {/* Footer cleaned (no button, no extra UI) */}
            <Card.Footer className="p-0 mt-4">
              <div className="flex flex-col">
                <span className="text-sm font-medium">Only 10 spots</span>
                <span className="text-xs text-muted">
                  Submission ends Oct 10.
                </span>
              </div>
            </Card.Footer>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PhotoDetailsPage;
