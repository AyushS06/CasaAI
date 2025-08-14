"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "AI-Powered Property Management",
    description:
      "Our advanced AI system, Rio, automates your entire property management workflow. From tenant screening to maintenance requests, Rio handles it all with intelligent decision-making and real-time insights.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="text-center">
          <div className="text-4xl mb-2">🏠</div>
          <div className="text-lg font-semibold">AI Management</div>
        </div>
      </div>
    ),
  },
  {
    title: "Real-time Analytics Dashboard",
    description:
      "Monitor your property portfolio with comprehensive real-time analytics. Track performance metrics, rental income, expenses, and market trends all in one centralized dashboard.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/CasaAI dashboard.png"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg"
          alt="CasaAI dashboard demo"
        />
      </div>
    ),
  },
  {
    title: "Automated Workflows",
    description:
      "Streamline your property management with automated workflows. From rent collection to maintenance scheduling, our platform reduces manual tasks and increases efficiency.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="text-center">
          <div className="text-4xl mb-2">⚡</div>
          <div className="text-lg font-semibold">Automation</div>
        </div>
      </div>
    ),
  },
  {
    title: "Multi-Property Portfolio Management",
    description:
      "Manage multiple properties effortlessly with our comprehensive portfolio management tools. Scale your real estate business without the complexity of traditional property management.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="text-center">
          <div className="text-4xl mb-2">📊</div>
          <div className="text-lg font-semibold">Portfolio</div>
        </div>
      </div>
    ),
  },
];

export function CasaAIFeatures() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
