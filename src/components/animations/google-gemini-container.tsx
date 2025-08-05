"use client";
import React, { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { GoogleGeminiEffect } from "./google-gemini-effect";

export const GoogleGeminiContainer = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const pathLengths = [
    useTransform(scrollYProgress, [0, 0.2], [0, 1]),
    useTransform(scrollYProgress, [0.1, 0.3], [0, 1]),
    useTransform(scrollYProgress, [0.2, 0.4], [0, 1]),
    useTransform(scrollYProgress, [0.3, 0.5], [0, 1]),
    useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
  ];

  return (
    <div ref={containerRef} className="h-[200vh] relative">
      <GoogleGeminiEffect
        pathLengths={pathLengths}
        title={title}
        description={description}
      />
    </div>
  );
}; 