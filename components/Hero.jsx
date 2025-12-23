"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Business-Driven <span className="text-gray-400">Design</span>
          <br />
          That Converts
        </h1>

        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          UI & visual systems built to improve clarity, trust, and conversion —
          aligned for product teams and growth-focused companies.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="/Rajan-Resume.pdf"
            download
            className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:opacity-90 transition"
          >
            Download Resume
          </a>

          <a
            href="#work"
            className="px-6 py-3 border border-gray-700 rounded-lg text-gray-300 hover:border-gray-500 transition"
          >
            View Case Studies
          </a>
        </div>
      </motion.div>
    </section>
  );
}