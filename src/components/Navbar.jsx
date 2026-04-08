/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
// import React from "react";
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#certificates", label: "Certificates" },
  { href: "#projects", label: "Projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-zinc-900/80 backdrop-blur-xl border-b border-violet-600/10 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-2 h-2 rounded-full bg-violet-500 group-hover:scale-125 transition-transform" />
          <span className="text-xl font-bold text-white tracking-tight">
            Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1 bg-white/5 border border-white/8 rounded-full px-1.5 py-1.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`block px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === link.href
                    ? 'bg-violet-700 text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-white/8'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}

        <a
          href="/files/cv-umar.pdf"
          download={true}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-violet-300 bg-violet-600/15 border border-violet-500/35 hover:bg-violet-600/25 hover:border-violet-400/50 transition-all duration-200"
        >
          <i className="ri-download-line ri-sm" />
          Download CV
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/8 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 pt-3 pb-4 flex flex-col gap-1 border-t border-white/8 mt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActive(link.href);
                setMenuOpen(false);
              }}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active === link.href
                  ? 'bg-violet-700 text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-white/8'
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-violet-300 bg-violet-600/15 border border-violet-500/35"
          >
            <i className="ri-download-line ri-sm" />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}