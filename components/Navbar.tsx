"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="relative bg-white border-b border-gray-border px-6 md:px-10 py-5">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-xl md:text-2xl font-bold text-black hover:text-pink transition"
        >
          MOKSHA
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-full text-gray-dark hover:bg-pink-light hover:text-pink transition duration-300"
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-black hover:text-pink transition"
        >
          ☰
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-border shadow-lg flex flex-col items-center gap-3 py-5 md:hidden z-50">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 text-gray-dark hover:bg-pink-light hover:text-pink transition"
            >
              {link.name}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
}