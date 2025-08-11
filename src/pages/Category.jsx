

import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryNav from "../utils/CategoryNav";

const API_KEY = "d06d57d0181763e4bc809a3a509275e8";

export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = async (category) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get("https://gnews.io/api/v4/top-headlines", {
        params: {
          category,
          lang: "en",
          max: 10,
          token: API_KEY,
        },
      });
      setArticles(res.data.articles || []);
    } catch (err) {
      setError("Failed to fetch news");
      setArticles([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchNews(selectedCategory);
  }, [selectedCategory]);

  if (loading) return <p className="p-4">Loading news...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div>
      {/* Sticky Category Menu */}
      <div className="sticky top-0 bg-white shadow z-10">
        <CategoryNav
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {/* No News */}
      {!loading && !error && articles.length === 0 && (
        <p className="p-4">No news found for {selectedCategory}</p>
      )}

      {/* Featured Layout */}
      {articles.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
          {/* Featured News (Left Side Large) */}
          <div className="lg:col-span-2 relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={articles[0].image || "/fallback.jpg"}
              alt={articles[0].title}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h2 className="text-white text-2xl font-bold mb-2">
                {articles[0].title}
              </h2>
              <p className="text-gray-200 text-sm mb-3">
                {articles[0].description
                  ? articles[0].description.split(" ").slice(0, 25).join(" ") +
                    (articles[0].description.split(" ").length > 25 ? "..." : "")
                  : ""}
              </p>
              <a
                href={articles[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>

          {/* Side News (Right Side) */}
          <div className="flex flex-col gap-4">
            {articles.slice(1).map((article) => (
              <div
                key={article.url}
                className="flex gap-4 items-start border-b pb-3 hover:bg-gray-50 p-2 rounded transition"
              >
                <img
                  src={article.image || "/fallback.jpg"}
                  alt={article.title}
                  className="w-24 h-20 object-cover rounded"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-sm mb-1">{article.title}</h3>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-xs hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

