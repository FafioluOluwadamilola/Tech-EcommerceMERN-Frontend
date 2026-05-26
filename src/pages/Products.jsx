import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import products, { categories } from "../data/products";

const Products = () => {

  const [search, setSearch] = useState("");

  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);

  
  // Filter products
  const filteredProducts = products.filter((product) => {

    const matchesCategory =
      selectedCategory === "all" ||
      product.category.toLocaleLowerCase() === selectedCategory.toLocaleLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">

      {/* Heading */}
      <div className="mb-10">

        <h1 className="text-4xl font-bold mb-3">
          Products
        </h1>

        <p className="text-gray-500">
          Explore our premium tech collection.
        </p>

      </div>

      {/* Search */}
      <div className="mb-8">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
        />

      </div>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-4 mb-10">

        {categories.map((category) => (

          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-5 py-3 rounded-xl border whitespace-nowrap transition
              
              ${
                selectedCategory === category.id
                  ? "bg-black text-white"
                  : "bg-white hover:bg-gray-100"
              }
            `}
          >
            {category.icon} {category.name}
          </button>

        ))}

      </div>

      {/* Products Grid */}
      <ProductCard products={filteredProducts} />

    </div>
  );
};

export default Products;