'use client';

import { ChevronDownIcon } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@repo/shadcn-ui/components/ui/accordion';
import { cn } from '@repo/shadcn-ui/lib/utils';
import { LucideIcon } from 'lucide-react';

export type Accordion09Props = React.ComponentProps<typeof Accordion>;

export const Accordion09 = ({ className, ...props }: Accordion09Props) => (
  <Accordion className={cn('w-full', className)} {...props} />
);

export type Accordion09ItemProps = React.ComponentProps<typeof AccordionItem>;

export const Accordion09Item = ({ className, ...props }: Accordion09ItemProps) => (
  <AccordionItem className={cn('py-2', className)} {...props} />
);

export type Accordion09HeaderProps = React.ComponentProps<typeof AccordionPrimitive.Header>;

export const Accordion09Header = ({ className, ...props }: Accordion09HeaderProps) => (
  <AccordionPrimitive.Header className={cn('flex', className)} {...props} />
);

export interface Accordion09TriggerProps {
  icon?: LucideIcon;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

export const Accordion09Trigger = ({ className, icon: Icon, title, subtitle }: Accordion09TriggerProps) => (
  <AccordionPrimitive.Trigger 
    className={cn(
      'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between rounded-md py-2 text-left text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] [&[data-state=open]>svg]:rotate-180',
      className
    )}
  >
    <span className="flex items-center gap-3">
      {Icon && (
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-full border"
          aria-hidden="true"
        >
          <Icon size={16} className="opacity-60" />
        </span>
      )}
      <span className="flex flex-col space-y-1">
        <span>{title}</span>
        {subtitle && (
          <span className="text-sm font-normal">{subtitle}</span>
        )}
      </span>
    </span>
    <ChevronDownIcon
      size={16}
      className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
      aria-hidden="true"
    />
  </AccordionPrimitive.Trigger>
);

export type Accordion09ContentProps = React.ComponentProps<typeof AccordionContent>;

export const Accordion09Content = ({ className, ...props }: Accordion09ContentProps) => (
  <AccordionContent 
    className={cn('text-muted-foreground ms-3 ps-10 pb-2', className)} 
    {...props} 
  />
);