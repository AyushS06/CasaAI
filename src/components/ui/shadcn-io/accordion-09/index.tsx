'use client';

import { ChevronDownIcon } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export type Accordion09Props = React.ComponentProps<typeof AccordionPrimitive.Root>;

export const Accordion09 = ({ className, ...props }: Accordion09Props) => (
  <AccordionPrimitive.Root className={cn('w-full', className)} {...props} />
);

export type Accordion09ItemProps = React.ComponentProps<typeof AccordionPrimitive.Item>;

export const Accordion09Item = ({ className, ...props }: Accordion09ItemProps) => (
  <AccordionPrimitive.Item className={cn('border-b', className)} {...props} />
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
      'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between rounded-md py-4 text-left text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] [&[data-state=open]>svg]:rotate-180',
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
          <span className="text-sm font-normal text-muted-foreground">{subtitle}</span>
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

export type Accordion09ContentProps = React.ComponentProps<typeof AccordionPrimitive.Content>;

export const Accordion09Content = ({ className, children, ...props }: Accordion09ContentProps) => (
  <AccordionPrimitive.Content 
    className={cn('overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down', className)} 
    {...props} 
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
);