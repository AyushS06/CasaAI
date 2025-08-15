"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { DayNightSwitch } from "@/components/DayNightSwitch";

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Navigate to home page and scroll to section
const navigateToHomeSection = (elementId: string) => {
  // Check if we're already on the home page
  if (window.location.pathname === '/') {
    // If on home page, just scroll to the section
    smoothScrollTo(elementId);
  } else {
    // If on another page, navigate to home page with hash
    window.location.href = `/#${elementId}`;
  }
};

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        // Make the navbar fixed at the top
        "fixed inset-x-0 top-0 z-40 w-full",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: "100%",
        y: visible ? 12 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-full bg-transparent px-4 py-2 lg:flex",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const handleClick = (e: React.MouseEvent, item: { name: string; link: string }) => {
    const isExternal = item.link.startsWith("http");
    const isHashLink = item.link.startsWith("/#");
    
    if (!isExternal && isHashLink) {
      e.preventDefault();
      const elementId = item.link.replace("/#", "");
      navigateToHomeSection(elementId);
    }
    
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex-1 hidden flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => {
        const isExternal = item.link.startsWith("http");
        return isExternal ? (
          <a
            key={`link-${idx}`}
            onMouseEnter={() => setHovered(idx)}
            onClick={(e) => handleClick(e, item)}
            className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300 rounded-full cursor-pointer"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </a>
        ) : (
          <a
            key={`link-${idx}`}
            onMouseEnter={() => setHovered(idx)}
            onClick={(e) => handleClick(e, item)}
            className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300 rounded-full cursor-pointer"
            href={item.link}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </a>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 12 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => {
  return (
    <div className={cn("flex w-full flex-row items-center justify-between", className)}>
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen, onClose }: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed inset-x-4 top-16 z-50 flex w-auto flex-col items-start justify-start gap-3 rounded-xl bg-white/95 backdrop-blur-md px-6 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950/95 max-h-[80vh] overflow-y-auto",
            className
          )}
          role="dialog"
          aria-modal="true"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <IconX className="h-6 w-6 text-black dark:text-white" />
      ) : (
        <IconMenu2 className="h-6 w-6 text-black dark:text-white" />
      )}
    </button>
  );
};

export const NavbarLogo = () => {
  return (
    <a href="https://www.casaai.org/" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal">
      <span className="font-semibold text-black dark:text-white">CasaAI</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (React.ComponentPropsWithoutRef<"a"> | React.ComponentPropsWithoutRef<"button">)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark:
      "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  } as const;

  return (
    <Tag href={href || undefined} className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </Tag>
  );
};

// New Header implementation using the components above, keeping DayNightSwitch
export const Header1 = () => {
  const [open, setOpen] = useState(false);

  const items = [
    { name: "Home", link: "/#home" },
    { name: "Product", link: "/#product" },
    { name: "Features", link: "/#features" },
    { name: "FAQ", link: "/#faq" },
    { name: "Pricing", link: "/pricing" },
    { name: "Changelog", link: "#" },
    { name: "Docs", link: "https://docs.casaai.org/" },
  ];

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <NavbarLogo />
          </div>

          <NavItems items={items} />

          <div className="relative z-20 flex items-center gap-3">
            <NavbarButton href="/login" variant="secondary">Sign in</NavbarButton>
            <NavbarButton href="/signup" variant="gradient">Get started for free</NavbarButton>
            <DayNightSwitch />
          </div>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-3">
            <DayNightSwitch />
            <MobileNavToggle isOpen={open} onClick={() => setOpen((v) => !v)} />
          </div>
        </MobileNavHeader>
        <MobileNavMenu isOpen={open} onClose={() => setOpen(false)}>
          <div className="flex w-full flex-col gap-2">
            {items.map((item) => {
              const isExternal = item.link.startsWith("http");
              const isHashLink = item.link.startsWith("/#");
              
              const handleMobileClick = (e: React.MouseEvent) => {
                if (!isExternal && isHashLink) {
                  e.preventDefault();
                  const elementId = item.link.replace("/#", "");
                  navigateToHomeSection(elementId);
                }
                setOpen(false);
              };
              
              return isExternal ? (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg px-4 py-4 text-base font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.link}
                  className="block w-full rounded-lg px-4 py-4 text-base font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  onClick={handleMobileClick}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="mt-4 flex flex-col gap-3 w-full">
              <NavbarButton href="/login" variant="secondary" className="w-full py-3 text-base">Sign in</NavbarButton>
              <NavbarButton href="/signup" variant="gradient" className="w-full py-3 text-base">Get started</NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}; 