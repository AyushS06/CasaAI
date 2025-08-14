'use client';
import { GradientText } from '@/components/ui/shadcn-io/gradient-text';
 
export const CasaAIGradientText = () => {
  return (
    <div className="text-center">
      <GradientText 
        className="text-2xl font-bold md:text-4xl lg:text-7xl" 
        text="CasaAI saves you hours of work, in a matter of minutes." 
      />
    </div>
  );
};
