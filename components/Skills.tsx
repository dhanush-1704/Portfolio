"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Server,
} from "lucide-react";

const skillGroups = [
  {
    title: "AI & LLM Engineering",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",

    skills: [
      "Python",
      "Hermes",
      "Ollama",
      "Hugging Face",
      "OpenAI API",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
      "PyTorch",
      "Vector Databases",
    ],
  },

  {
    title: "Machine Learning & Data",
    icon: Database,
    color: "from-violet-500 to-purple-500",

    skills: [
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "SQL",
      "EDA",
      "Feature Engineering",
      "Statistics",
      "Model Evaluation",
      "Data Analysis",
      "Probability",
    ],
  },

  {
    title: "Backend & Dev Tools",
    icon: Server,
    color: "from-emerald-500 to-teal-500",

    skills: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "Docker",
      "Git",
      "GitHub",
      "Linux",
      "SQLite",
      "PostgreSQL",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28"
    >
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <div className="label mx-auto">

            Skills

          </div>

          <h2 className="mt-6 text-5xl font-black tracking-tight">

            Technologies I

            <span className="gradient-text">

              {" "}Work With

            </span>

          </h2>

          <p className="mt-6 text-lg text-gray-600">

            The technologies I use to build AI applications,
            backend systems and machine learning solutions.

          </p>

        </motion.div>

        <div className="mt-20 space-y-8">

          {skillGroups.map((group, index) => {

            const Icon = group.icon;

            return (

              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="card rounded-[32px] p-8"
              >

                <div className="flex items-center gap-5">

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${group.color} text-white shadow-lg`}
                  >

                    <Icon size={28} />

                  </div>

                  <div>

                    <h3 className="text-2xl font-black">

                      {group.title}

                    </h3>

                    <p className="mt-2 text-gray-600">

                      Core technologies used across my projects.

                    </p>

                  </div>

                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                                {group.skills.map((skill) => (

                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.06,
                      y: -2,
                    }}
                    transition={{ duration: 0.2 }}
                    className="cursor-default rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md"
                  >
                    {skill}
                  </motion.span>

                ))}

                </div>

              </motion.div>

            );

          })}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-[32px] border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-sky-50 p-10 text-center"
        >

          <h3 className="text-3xl font-black text-gray-900">

            Always Learning

          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">

            Technology evolves rapidly, and I enjoy learning by building.
            My focus is on creating practical AI applications that combine
            machine learning, LLMs and backend engineering into useful
            real-world software.

          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            {[
              "Agentic AI",
              "LLMs",
              "FastAPI",
              "PyTorch",
              "Docker",
              "RAG",
              "System Design",
              "Automation",
            ].map((item) => (

              <span
                key={item}
                className="tag"
              >
                {item}
              </span>

            ))}

          </div>

        </motion.div>

      </div>

    </section>

  );
}