"use client";

import { useEffect, useState } from "react";
import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";
import SearchBar from "@/components/SearchBar";

const AllPhotosPage = () => {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("https://slab-json-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  const filteredPhotos = photos.filter((photo) => {
    const matchCategory = category
      ? photo.category.toLowerCase() === category.toLowerCase()
      : true;

    const matchSearch = photo.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 items-center m-4">
        <div></div>

        <h1 className="text-2xl font-bold text-center">All Tiles</h1>

        <div className="flex justify-end">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>

      <Category setCategory={setCategory} />

      <div className="grid grid-cols-4 gap-5">
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
