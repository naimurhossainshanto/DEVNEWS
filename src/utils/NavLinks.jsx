import { GiNewspaper } from "react-icons/gi";
import { TbCategoryFilled, TbBookmarksFilled } from "react-icons/tb";
import { PiArticleNyTimesFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";  // react-router-dom থেকে ইমপোর্ট করতে হবে

export const navLinks = [
  {
    id: 1,
    to: "/",
    frontText: "Home",
    backContent: (
      <NavLink to="/">
        <GiNewspaper size={34} />
      </NavLink>
    ),
  },
  {
    id: 2,
    to: "/category",
    frontText: "Others",
    backContent: (
      <NavLink to="/category">
        <TbCategoryFilled size={34} />
      </NavLink>
    ),
  },
  {
    id: 3,
    to: "/article",
    frontText: "Article",
    backContent: (
      <NavLink to="/article">
        <PiArticleNyTimesFill  size={34} />
      </NavLink>
    ),
  },
  {
    id: 4,
    to: "/bookmarkcontext",
    frontText: "Bookmark",
    backContent: (
      <NavLink to="/bookmarkcontext">
        <TbBookmarksFilled size={34} />
      </NavLink>
    ),
  },
];

