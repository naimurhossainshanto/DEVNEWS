import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Logo & copyright */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-extrabold text-white mb-2 cursor-default">DEV NEWS</h1>
          <p className="text-sm">&copy; {new Date().getFullYear()} DevNest. All rights reserved.</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col md:flex-row gap-6 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "hover:text-white transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "hover:text-white transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "hover:text-white transition"
            }
          >
            Services
          </NavLink>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "hover:text-white transition"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-8 text-gray-400">
          <NavLink to="/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z" />
            </svg>
          </NavLink>
          <NavLink to="/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 0 1-3.14.86A4.48 4.48 0 0 0 22.4.37a9.06 9.06 0 0 1-2.88 1.1A4.52 4.52 0 0 0 11.06 4a12.9 12.9 0 0 1-9.38-4.76A4.48 4.48 0 0 0 2.85 7.3a4.4 4.4 0 0 1-2.05-.57v.06a4.52 4.52 0 0 0 3.63 4.42 4.52 4.52 0 0 1-2.03.08 4.52 4.52 0 0 0 4.22 3.13A9 9 0 0 1 1 18.58a12.8 12.8 0 0 0 6.92 2.02c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.42-.02-.63A9.2 9.2 0 0 0 23 3z" />
            </svg>
          </NavLink>
          <NavLink to="/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
            </svg>
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

