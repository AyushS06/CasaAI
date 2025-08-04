"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark"); // Default to dark theme

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      // Set dark theme CSS variables
      root.style.setProperty("--background", "0 0% 0%");
      root.style.setProperty("--foreground", "0 0% 100%");
      root.style.setProperty("--card", "0 0% 0%");
      root.style.setProperty("--card-foreground", "0 0% 100%");
      root.style.setProperty("--popover", "0 0% 0%");
      root.style.setProperty("--popover-foreground", "0 0% 100%");
      root.style.setProperty("--primary", "221.2 83.2% 53.3%");
      root.style.setProperty("--primary-foreground", "0 0% 0%");
      root.style.setProperty("--secondary", "0 0% 10%");
      root.style.setProperty("--secondary-foreground", "0 0% 100%");
      root.style.setProperty("--muted", "0 0% 10%");
      root.style.setProperty("--muted-foreground", "0 0% 70%");
      root.style.setProperty("--accent", "0 0% 10%");
      root.style.setProperty("--accent-foreground", "0 0% 100%");
      root.style.setProperty("--destructive", "0 84.2% 60.2%");
      root.style.setProperty("--destructive-foreground", "0 0% 100%");
      root.style.setProperty("--border", "0 0% 20%");
      root.style.setProperty("--input", "0 0% 20%");
      root.style.setProperty("--ring", "221.2 83.2% 53.3%");
    } else {
      root.classList.remove("dark");
      // Set light theme CSS variables
      root.style.setProperty("--background", "0 0% 100%");
      root.style.setProperty("--foreground", "222.2 84% 4.9%");
      root.style.setProperty("--card", "0 0% 100%");
      root.style.setProperty("--card-foreground", "222.2 84% 4.9%");
      root.style.setProperty("--popover", "0 0% 100%");
      root.style.setProperty("--popover-foreground", "222.2 84% 4.9%");
      root.style.setProperty("--primary", "221.2 83.2% 53.3%");
      root.style.setProperty("--primary-foreground", "210 40% 98%");
      root.style.setProperty("--secondary", "210 40% 96%");
      root.style.setProperty("--secondary-foreground", "222.2 84% 4.9%");
      root.style.setProperty("--muted", "210 40% 96%");
      root.style.setProperty("--muted-foreground", "215.4 16.3% 46.9%");
      root.style.setProperty("--accent", "210 40% 96%");
      root.style.setProperty("--accent-foreground", "222.2 84% 4.9%");
      root.style.setProperty("--destructive", "0 84.2% 60.2%");
      root.style.setProperty("--destructive-foreground", "210 40% 98%");
      root.style.setProperty("--border", "214.3 31.8% 91.4%");
      root.style.setProperty("--input", "214.3 31.8% 91.4%");
      root.style.setProperty("--ring", "221.2 83.2% 53.3%");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}; 