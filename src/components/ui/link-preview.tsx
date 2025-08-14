"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface LinkPreviewProps extends React.HTMLAttributes<HTMLSpanElement> {
  url: string;
  children: React.ReactNode;
}

export function LinkPreview({
  url,
  children,
  className,
  ...props
}: LinkPreviewProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [previewData, setPreviewData] = React.useState<{
    title: string;
    description: string;
    image: string;
  } | null>(null);

  const handleMouseEnter = async () => {
    setIsHovered(true);
    // In a real implementation, you would fetch preview data here
    // For now, we'll use placeholder data
    setPreviewData({
      title: "Example Title",
      description: "This is an example description for the link preview.",
      image: "https://via.placeholder.com/300x200",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPreviewData(null);
  };

  return (
    <span
      className={cn("relative inline-block", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span className="cursor-pointer underline decoration-dotted underline-offset-4 hover:decoration-solid transition-all">
        {children}
      </span>
      
      <AnimatePresence>
        {isHovered && previewData && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 w-80 bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden"
          >
            <div className="p-4">
              <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100 mb-1">
                {previewData.title}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                {previewData.description}
              </p>
              <div className="text-xs text-neutral-500 dark:text-neutral-500 truncate">
                {url}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
