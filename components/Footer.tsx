"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-10">
      <div className="container-custom flex flex-col items-center justify-between gap-6 md:flex-row">

        <div>
          <h3 className="text-xl font-black gradient-text">
            Dhanush
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            AI • Machine Learning • Data Science
          </p>

          <p className="mt-1 text-sm text-gray-500">
            © {year} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">

          <a
            href="https://github.com/dhanush-1704"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-200 p-3 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/dhanush-1704-"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-200 p-3 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="#home"
            className="rounded-xl border border-gray-200 p-3 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600"
          >
            <ArrowUp size={20} />
          </a>

        </div>

      </div>
    </footer>
  );
}