"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const technologies = [
  "Python",
  "FastAPI",
  "PyTorch",
  "LLMs",
  "AI Agents",
  "SQL",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute -right-32 -top-20 h-[420px] w-[420px] rounded-full bg-blue-200/40 blur-[150px]" />

        <div className="absolute -bottom-20 -left-24 h-[360px] w-[360px] rounded-full bg-violet-200/40 blur-[150px]" />

      </div>

      <div className="container-custom">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="label w-fit">

              <Sparkles size={15} />

              Open to AI Engineering Internships

            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.02] tracking-tight lg:text-7xl">

              Building

              <br />

              Production AI

              <br />

              <span className="gradient-text">
                Applications.
              </span>

            </h1>

            <p className="mt-6 text-xl font-semibold text-blue-600">

              Machine Learning • LLMs • AI Agents

            </p>

            <p className="mt-8 max-w-xl text-lg">

              AI & Data Science student at IIT Madras passionate about
              designing intelligent software powered by Machine Learning,
              Large Language Models, AI Agents and scalable backend
              systems for real-world applications.

            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="/resume.pdf"
                className="btn-primary"
              >

                <Download size={18} />

                Download Resume

              </a>

              <a
                href="#projects"
                className="btn-secondary"
              >

                View Projects

                <ArrowRight size={18} />

              </a>

            </div>

            {/* Social */}

            <div className="mt-8 flex gap-4">

              <a
                href="https://github.com/dhanush-1704"
                target="_blank"
                rel="noopener noreferrer"
                className="card flex h-14 w-14 items-center justify-center rounded-2xl hover:text-black"
              >

                <FaGithub size={21} />

              </a>

              <a
                href="https://www.linkedin.com/in/dhanush-1704-"
                target="_blank"
                rel="noopener noreferrer"
                className="card flex h-14 w-14 items-center justify-center rounded-2xl hover:text-[#0A66C2]"
              >

                <FaLinkedin size={20} />

              </a>

            </div>

            {/* Stats */}

            <div className="mt-14 grid max-w-lg grid-cols-3 gap-5">

              <div className="card p-6 text-center">

                <h3 className="text-3xl font-black">

                  3+

                </h3>

                <p className="mt-2 text-sm">

                  AI Projects

                </p>

              </div>

              <div className="card p-6 text-center">

                <h3 className="text-3xl font-black">

                  15+

                </h3>

                <p className="mt-2 text-sm">

                  Technologies

                </p>

              </div>

              <div className="card p-6 text-center">

                <h3 className="text-3xl font-black text-green-600">

                  Open

                </h3>

                <p className="mt-2 text-sm">

                  To Internships

                </p>

              </div>

            </div>

          </motion.div>
                    {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >

            {/* Decorative Glow */}

            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-blue-100/60 via-cyan-100/30 to-transparent blur-3xl" />

            <div className="relative card overflow-hidden rounded-[32px] p-8">

              {/* Header */}

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-sm font-medium text-gray-500">

                    AI Engineer Portfolio

                  </p>

                  <h2 className="mt-2 text-3xl font-black">

                    M Dhanush

                  </h2>

                  <p className="mt-2 text-gray-600">

                    AI & Data Science Student

                  </p>

                </div>

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                  Available

                </span>

              </div>

              {/* Information */}

              <div className="mt-10 space-y-4">

                <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5">

                  <div className="rounded-xl bg-blue-100 p-3">

                    <GraduationCap
                      size={22}
                      className="text-blue-600"
                    />

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-wider text-gray-500">

                      EDUCATION

                    </p>

                    <h4 className="mt-1 font-semibold">

                      IIT Madras

                    </h4>

                  </div>

                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5">

                  <div className="rounded-xl bg-blue-100 p-3">

                    <Briefcase
                      size={22}
                      className="text-blue-600"
                    />

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-wider text-gray-500">

                      SPECIALIZATION

                    </p>

                    <h4 className="mt-1 font-semibold">

                      AI Engineering & Machine Learning

                    </h4>

                  </div>

                </div>

              </div>

              {/* Tech Stack */}

              <div className="mt-10">

                <p className="mb-4 text-sm font-semibold tracking-wide text-gray-500">

                  CORE STACK

                </p>

                <div className="flex flex-wrap gap-3">

                  {technologies.map((tech) => (

                    <span
                      key={tech}
                      className="tag"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

              {/* Quote */}

              <div className="mt-10 rounded-3xl bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 p-6 text-white">

                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">

                  Engineering Philosophy

                </p>

                <p className="mt-4 text-lg leading-8">

                  Building practical AI software that combines
                  machine learning, LLMs and backend engineering
                  into products that people can actually use.

                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );
}