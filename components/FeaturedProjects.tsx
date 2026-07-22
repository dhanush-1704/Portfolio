"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Database,
  Bot,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const featuredProject = {
  title: "AI Recruitment Agent",
  subtitle: "Hermes-Driven Autonomous Application Pipeline",

  description:
    "An autonomous AI system that analyzes resumes, understands job descriptions, evaluates ATS compatibility, generates tailored cover letters, answers application questions and orchestrates recruitment workflows through modular AI agent tools.",

  github: "https://github.com/dhanush-1704",

  technologies: [
    "Python",
    "Hermes",
    "FastAPI",
    "Ollama",
    "SQLite",
    "Browser Automation",
    "REST APIs",
    "Prompt Engineering",
  ],
};

const projects = [
  {
    icon: Brain,
    title: "Multi-Modal RAG",

    description:
      "Production-grade Retrieval-Augmented Generation system combining hybrid search, FAISS, BM25 and Hugging Face Transformers.",

    technologies: [
      "FastAPI",
      "FAISS",
      "Docker",
      "PyTorch",
      "RAG",
    ],
  },

  {
    icon: Database,
    title: "Predictive Modeling",

    description:
      "End-to-end machine learning workflow covering feature engineering, preprocessing, model comparison and optimization.",

    technologies: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "SQL",
      "Kaggle",
    ],
  },

  {
    icon: Bot,
    title: "AI Data Analyst",

    description:
      "Adaptive AI analytics pipeline that performs EDA, selects visualizations and generates business insights using LLM reasoning.",

    technologies: [
      "LLMs",
      "Pandas",
      "Matplotlib",
      "FastAPI",
      "Ollama",
    ],
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-28"
    >
      <div className="container-custom">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <div className="label mx-auto">

            <Sparkles size={15} />

            Featured Projects

          </div>

          <h2 className="mt-6 text-5xl font-black tracking-tight">

            Engineering Intelligent

            <span className="gradient-text">

              {" "}AI Applications

            </span>

          </h2>

          <p className="mt-6 text-lg text-gray-600">

            A selection of AI systems, production-ready backend
            applications and machine learning solutions built around
            practical automation and real-world engineering.

          </p>

        </motion.div>

        {/* Featured Card */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card mt-20 overflow-hidden rounded-[36px]"
        >

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}

            <div className="p-12">

              <div className="label w-fit">

                ⭐ Featured Project

              </div>

              <h3 className="mt-7 text-4xl font-black">

                {featuredProject.title}

              </h3>

              <p className="mt-3 text-blue-600 font-semibold">

                {featuredProject.subtitle}

              </p>

              <p className="mt-8 leading-8 text-gray-600">

                {featuredProject.description}

              </p>

              <div className="mt-10 flex flex-wrap gap-3">

                {featuredProject.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="tag"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >

                  <FaGithub size={18} />

                  GitHub

                </a>

                <a
                  href="#"
                  className="btn-secondary"
                >

                  Case Study

                  <ArrowUpRight size={18} />

                </a>

              </div>

            </div>

            {/* RIGHT */}

            <div className="bg-gradient-to-br from-sky-50 via-white to-blue-50 p-12">
                  <div className="rounded-[32px] border border-blue-100 bg-white p-8 shadow-sm">

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">

                  AI Workflow

                </p>

                <h4 className="mt-3 text-3xl font-black text-gray-900">

                  Autonomous Recruitment Pipeline

                </h4>

                <div className="mt-10 space-y-0">

                  {[
                    "Resume Analysis",
                    "Job Description Parsing",
                    "ATS Score Evaluation",
                    "Skill Matching",
                    "Cover Letter Generation",
                    "Application Automation",
                  ].map((step, index) => (

                    <div key={step}>

                      <div className="flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">

                          {index + 1}

                        </div>

                        <div className="flex-1">

                          <p className="text-lg font-semibold text-gray-900">

                            {step}

                          </p>

                        </div>

                      </div>

                      {index !== 5 && (

                        <div className="ml-6 h-8 w-0.5 bg-gradient-to-b from-blue-500 to-blue-200" />

                      )}

                    </div>

                  ))}

                </div>

                <div className="mt-10 rounded-3xl border border-blue-200 bg-blue-50 p-6">

                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">

                    Outcome

                  </p>

                  <h5 className="mt-3 text-xl font-bold text-gray-900">

                    End-to-End Recruitment Automation

                  </h5>

                  <p className="mt-3 leading-8 text-gray-600">

                    AI agents coordinate resume analysis, ATS scoring,
                    skill matching, personalized cover letters and
                    application assistance through reusable tools.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

        {/* Other Projects */}

        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          {projects.map((project, index) => {

            const Icon = project.icon;

            return (

              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="card group rounded-[28px] p-8"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">

                  <Icon size={28} />

                </div>

                <h3 className="mt-6 text-2xl font-bold">

                  {project.title}

                </h3>

                <p className="mt-5 leading-7 text-gray-600">

                  {project.description}

                </p>

                <div className="mt-8 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="tag"
                    >

                      {tech}

                    </span>

                  ))}

                </div>
                    <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 hover:gap-3 hover:text-blue-700"
                >
                  Learn More

                  <ArrowUpRight size={18} />
                </a>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-[32px] border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-sky-50 p-10 text-center"
        >

          <h3 className="text-3xl font-black text-gray-900">

            More Projects Coming Soon

          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">

            Explore additional AI applications, machine learning
            pipelines, backend systems and experimental projects that
            showcase my journey in building intelligent software.

          </p>

          <div className="mt-8 flex justify-center gap-4">

            <a
              href="/projects"
              className="btn-primary"
            >
              View All Projects

              <ArrowUpRight size={18} />

            </a>

            <a
              href="https://github.com/dhanush-1704"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >

              <FaGithub size={18} />

              GitHub

            </a>

          </div>

        </motion.div>

      </div>

    </section>

  );
}