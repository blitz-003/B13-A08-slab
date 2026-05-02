import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
  const res = await fetch("https://slab-json-server.onrender.com/products");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 4);

  console.log(topPhotos);
  return (
    <div className="max-w-7xl mx-auto my-12">
      <h1 className="text-4xl font-bold my-10 text-center">Featured Tiles</h1>

      <div className="grid grid-cols-4 gap-5">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TopGenerations;
