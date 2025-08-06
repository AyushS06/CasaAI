import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-sm">C</span>
      </div>
      <span className="text-xl font-bold">CasaAI</span>
    </div>
  );
};

export default Logo; 