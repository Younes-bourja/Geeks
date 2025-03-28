import React, { useState } from "react";
import logo from "./logo.svg";
import poweredBy from "./powered-by-vitawind-dark.png";

const articlesData = [
  {
    id: 1,
    title: "The Future of AI in 2025",
    image: "https://source.unsplash.com/400x250/?technology,ai",
    content: "Artificial Intelligence is evolving rapidly, transforming industries...",
  },
  {
    id: 2,
    title: "Top 10 JavaScript Frameworks",
    image: "https://source.unsplash.com/400x250/?javascript,coding",
    content: "JavaScript frameworks like React, Vue, and Angular are dominating web development...",
  },
  {
    id: 3,
    title: "Web Development Trends in 2024",
    image: "https://source.unsplash.com/400x250/?web,developer",
    content: "From JAMstack to Web3, web development is advancing at a fast pace...",
  },
];

function App() {
  const [articles] = useState(articlesData);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📖 My Blog</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-lg p-4">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-lg"/>
            <h2 className="text-xl font-semibold mt-3">{article.title}</h2>
            <p className="text-gray-600">{article.content.substring(0, 80)}...</p>
            <button className="mt-3 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
