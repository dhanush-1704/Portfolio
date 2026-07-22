"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card mx-auto max-w-5xl rounded-[36px] p-12 text-center"
        >
          <div className="label mx-auto">Contact</div>

          <h2 className="mt-6 text-5xl font-black tracking-tight">
            Let's Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            I'm currently looking for AI, Machine Learning and Data Science
            internship opportunities. If you'd like to collaborate, discuss an
            opportunity, or simply connect, I'd love to hear from you.
          </p>

          <p className="mt-6 text-base font-medium text-blue-600">
            📧 mdhanush1742004@gmail.com
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mdhanush1742004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail size={18} />
              Email Me
              <ArrowRight size={18} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/dhanush-1704"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FaGithub className="text-[18px]" />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dhanush-1704-"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FaLinkedin className="text-[18px]" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}