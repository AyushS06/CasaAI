"use client";

import { motion } from "motion/react";

export function LearnMoreButton() {
  const scrollToDashboard = () => {
    const dashboardElement = document.querySelector('[data-dashboard-image]');
    if (dashboardElement) {
      dashboardElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

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
        delay: 1,
      }}
      className="relative z-10 mt-8 flex items-center justify-center"
    >
      <button 
        onClick={scrollToDashboard}
        className="w-60 transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600"
      >
        Learn More
      </button>
    </motion.div>
  );
}
