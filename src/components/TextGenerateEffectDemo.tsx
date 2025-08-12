"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Buy, manage, & sell properties`;
const words2 = `anytime & anywhere`;
const words3 = `with CasaAI`;

export function TextGenerateEffectDemo() {
      return (
      <div className="space-y-4">
        <TextGenerateEffect words={words} className="text-sm md:text-3xl lg:text-4xl" delay={0.3} />
        <TextGenerateEffect words={words2} className="text-sm md:text-2xl lg:text-3xl" delay={2} />
        <TextGenerateEffect words={words3} className="text-sm md:text-2xl lg:text-3xl" delay={3} />
      </div>
    );
} 