"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";

const Category = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://slab-json-server.onrender.com/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-8 space-x-3 flex items-center justify-center">
      <p className="text-lg font-bold mr-6">Categories</p>

      {categories.map((category) => (
        <Button
          key={category.id}
          variant="outline"
          size="sm"
          onClick={() => setCategory(category.name)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default Category;
