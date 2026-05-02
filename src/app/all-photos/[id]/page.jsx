const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://slab-json-server.onrender.com/products");
  const products = await res.json();

  const product = products.find((p) => p.id == id);

  return (
    <div>
      <h1>{product?.title}</h1>
      <p>{product.prompt}</p>
    </div>
  );
};

export default PhotoDetailsPage;
