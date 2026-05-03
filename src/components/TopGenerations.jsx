import PhotoCard from "./PhotoCard";
import AnimatedGrid from "./AnimatedGrid";

const TopGenerations = async () => {
  const res = await fetch("https://slab-json-server.onrender.com/products");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto my-12">
      <h1 className="text-4xl font-bold my-10 text-center">Featured Tiles</h1>

      <AnimatedGrid>
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </AnimatedGrid>
    </div>
  );
};

export default TopGenerations;
