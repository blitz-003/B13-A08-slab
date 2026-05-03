"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";

const Category = ({ setCategory, category }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://slab-json-server.onrender.com/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-8 space-x-3 flex items-center justify-center">
      <p className="text-lg font-bold mr-6">Categories</p>
      <Button
        key={0}
        variant="outline"
        size="sm"
        className={category == "" ? "bg-blue-500 text-white" : ""}
        onClick={() => setCategory("")}
      >
        All
      </Button>

      {categories.map((category_loop) => (
        <Button
          key={category_loop.id}
          variant="outline"
          size="sm"
          className={
            category_loop.name === category ? "bg-blue-500 text-white" : ""
          }
          onClick={() => setCategory(category_loop.name)}
        >
          {category_loop.name}
        </Button>
      ))}
    </div>
  );
};

export default Category;
