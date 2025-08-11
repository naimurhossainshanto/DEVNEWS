import React, { useEffect, useState } from "react";
import { fetchLatestNews } from "../api/NewsApi";
import NewsGallery from "../utils/NewsGallery";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLatestNews()
      .then((response) => {
        console.log(response.data);
        
        setArticles(response.data.articles);
        setLoading(false);
      })
      .catch((err) => {
        setError("News fetch Problem");
        setLoading(false);
        console.log(err);
        
      });
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>{error}</p>;

  return <NewsGallery articles={articles} />

}

