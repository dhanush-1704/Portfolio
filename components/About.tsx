"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Rocket,
  Brain,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
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

            <Sparkles size={15} />

            About Me

          </div>

          <h2 className="mt-6 text-5xl font-black tracking-tight">

            Building AI That

            <span className="gradient-text">

              {" "}Solves Problems

            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">

            I'm an AI & Data Science student at IIT Madras who enjoys
            building practical AI applications combining machine
            learning, LLMs and scalable backend engineering. I learn
            by building real projects and focus on creating systems
            that are useful, reliable and production-ready.

          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {/* Education */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card rounded-[32px] p-8"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-blue-50 p-4 text-blue-600">

                <GraduationCap size={28} />

              </div>

              <div>

                <h3 className="text-2xl font-black">

                  Education

                </h3>

                <p className="text-gray-500">

                  Academic Background

                </p>

              </div>

            </div>

            <div className="mt-8">

              <h4 className="text-xl font-bold">

                IIT Madras

              </h4>

              <p className="mt-2 text-gray-600">

                B.S. in Data Science & Engineering

              </p>

            </div>

          </motion.div>

          {/* Interests */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card rounded-[32px] p-8"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-blue-50 p-4 text-blue-600">

                <Rocket size={28} />

              </div>

              <div>

                <h3 className="text-2xl font-black">

                  Interests

                </h3>

                <p className="text-gray-500">

                  What I Enjoy Building

                </p>

              </div>

            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              {[
                "AI Agents",
                "LLMs",
                "Machine Learning",
                "FastAPI",
                "Backend Systems",
                "Automation",
                "RAG",
                "Python",
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

        {/* Philosophy */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="card mt-8 rounded-[32px] p-10"
        >

          <div className="flex items-start gap-5">

            <div className="rounded-2xl bg-blue-50 p-4 text-blue-600">

              <Brain size={28} />

            </div>

            <div>

              <h3 className="text-2xl font-black">

                My Approach

              </h3>

              <p className="mt-5 max-w-3xl leading-8 text-gray-600">

                I enjoy turning ideas into working software by combining
                machine learning, modern AI tools and backend engineering.
                Rather than focusing only on models, I aim to build complete
                AI applications that are practical, scalable and solve
                real-world problems.

              </p>

            </div>

          </div>

        </motion.div>

        {/* Stats */}

        <div className="mt-10 grid grid-cols-3 gap-6">

          <div className="card rounded-[28px] p-8 text-center">

            <h3 className="text-4xl font-black text-blue-600">

              3+

            </h3>

            <p className="mt-3 text-gray-600">

              Major AI Projects

            </p>

          </div>

          <div className="card rounded-[28px] p-8 text-center">

            <h3 className="text-4xl font-black text-blue-600">

              15+

            </h3>

            <p className="mt-3 text-gray-600">

              Technologies

            </p>

          </div>

          <div className="card rounded-[28px] p-8 text-center">

            <h3 className="text-4xl font-black text-green-600">

              Open

            </h3>

            <p className="mt-3 text-gray-600">

              To Internships

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}