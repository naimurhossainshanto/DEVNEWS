import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function FlipNavLink({ to, frontText, backContent }) {
  return (
    <div
      className="w-[6rem] h-[2rem] "
      style={{ perspective: "1000px" }}
    >
      <motion.div
        whileHover={{ rotateX: 180 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-transparent border-[1px] border-white/50 text-white flex items-center justify-center rounded-lg font-mono"
          style={{ backfaceVisibility: "hidden" }}
        >
          <NavLink
            to={to}
            className="w-full h-full flex items-center justify-center"
          >
            {frontText}
          </NavLink>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full text-white flex items-center justify-center rounded-lg font-bold"
          style={{
            transform: "rotateX(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
}
