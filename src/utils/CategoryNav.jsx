import { motion } from "framer-motion";

const categories = [
  "general", "business", "sports", "technology", "health", "science", "entertainment"
];

export default function CategoryNav({ selectedCategory, onCategoryChange }) {
  return (
    <div
      id="categorynav"
      className="flex overflow-x-auto gap-3 p-4 bg-gray-100 text-sm scrollbar-hide"
    >
      {categories.map((cat) => (
        <motion.button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          whileHover={{
            scale: [1, 1.15, 1],   // বড় হবে তারপর ছোট
            rotateY: [0, 15, 0],   // 3D ঘুরবে
            transition: {
              duration: 0.4,
              ease: "easeInOut"
            }
          }}
          whileTap={{
            scale: 0.95,
            rotateY: -15
          }}
          className={`px-4 py-2 rounded cursor-pointer transition-colors duration-200 ${
            selectedCategory === cat
              ? "bg-blue-950 text-white"
              : "bg-gray-300"
          }`}
          style={{ perspective: 800 }} // 3D effect দেখাতে
        >
          {cat.toUpperCase()}
        </motion.button>
      ))}
    </div>
  );
}
