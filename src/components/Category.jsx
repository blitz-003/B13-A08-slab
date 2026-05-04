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
    <div className="w-[90vw] mx-auto my-8 grid grid-cols-3 gap-4 sm:grid-cols-7 lg:grid-cols-10 xl:grid-cols-12">
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
