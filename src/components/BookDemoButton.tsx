"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function BookDemoButton() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className="relative z-10 mt-12 flex items-center justify-center"
    >
      <Link href="https://calendly.com/ayushs217/30min" target="_blank" rel="noopener noreferrer">
        <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
          Book a Demo
        </button>
      </Link>
    </motion.div>
  );
}
