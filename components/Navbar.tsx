"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "";

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);

        if (section) {
          const top = (section as HTMLElement).offsetTop - 120;

          if (window.scrollY >= top) {
            current = item.href;
          }
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-1/2 top-6 z-50 -translate-x-1/2 transition-all duration-300 ${
          scrolled ? "w-[94%] max-w-6xl" : "w-[92%] max-w-5xl"
        }`}
      >
        <div className="glass flex h-18 items-center justify-between rounded-full border border-white/50 px-6 shadow-xl">

          {/* Logo */}

          <a href="#" className="group">

            <h2 className="text-xl font-black tracking-tight">

              <span className="transition group-hover:text-blue-600">
                Dhanush
              </span>

            </h2>

          </a>

          {/* Desktop */}

          <nav className="hidden items-center gap-2 lg:flex">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  active === item.href
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-black"
                }`}
              >
                {item.name}
              </a>
            ))}

          </nav>

          {/* Right */}

          <div className="hidden items-center gap-3 lg:flex">

            <a
              href="https://github.com/dhanush-1704"
              target="_blank"
              className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              GitHub
            </a>

            <a
              href="/resume.pdf"
              className="btn-primary rounded-full"
            >
              Resume

              <ArrowUpRight size={16} />
            </a>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl p-2 lg:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Menu */}

        {mobileOpen && (
          <div className="glass mt-4 rounded-3xl border border-white/50 p-6 shadow-2xl lg:hidden">

            <div className="flex flex-col gap-3">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 font-medium transition hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}

              <hr className="my-2" />

              <a
                href="https://github.com/dhanush-1704"
                target="_blank"
                className="rounded-xl px-4 py-3 font-medium transition hover:bg-gray-100"
              >
                GitHub
              </a>

              <a
                href="/resume.pdf"
                className="btn-primary justify-center"
              >
                Download Resume
              </a>

            </div>

          </div>
        )}

      </header>
    </>
  );
}