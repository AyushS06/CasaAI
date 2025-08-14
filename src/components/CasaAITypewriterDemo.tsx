"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function CasaAITypewriterDemo() {
  const words = [
    {
      text: "What",
    },
    {
      text: "is",
    },
    {
      text: "CasaAI?",
      className: "text-blue-500 dark:text-blue-400",
    },
  ];
  
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
