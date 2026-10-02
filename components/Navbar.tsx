"use client";
import {useState} from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative w-full px-8 py-5 flex items-center justify-between border-b border-gray-800 sticky top-0 bg-gray-900 z-50">

      <h1 className="text-2xl font-bold">
        MOKSHA
      </h1>

      <div className="hidden md:flex gap-8">
        <a href="#" className="text-gray-300 hover:text-white transition">
          Home
        </a>

        <a href="#about" className="text-gray-300 hover:text-white transition">
          About
        </a>

        <a href="#skills" className="text-gray-300 hover:text-white transition">
          Skills
        </a>

        <a href="#projects" className="text-gray-300 hover:text-white transition">
          Projects
        </a>

        <a href="#contact" className="text-gray-300 hover:text-white transition">
          Contact
        </a>
      </div>

      <button 
      onClick={()=> setIsOpen(!isOpen)}
      className="md:hidden text-2xl"
      >
        ☰
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 border-b border-gray-800 flex flex-col items-center gap-6 py-6 md:hidden">

          <a href="#" onClick={() => setIsOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>

          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}