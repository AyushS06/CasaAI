"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion09 = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn("w-full", className)}
    {...props}
  />
))
Accordion09.displayName = "Accordion09"

const Accordion09Item = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
Accordion09Item.displayName = "Accordion09Item"

const Accordion09Header = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Header>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Header>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Header
    ref={ref}
    className={cn("flex", className)}
    {...props}
  />
))
Accordion09Header.displayName = "Accordion09Header"

interface Accordion09TriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  icon?: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
}

const Accordion09Trigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  Accordion09TriggerProps
>(({ className, icon: Icon, title, subtitle, ...props }, ref) => (
  <AccordionPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex flex-1 items-center justify-between py-4 text-left font-medium transition-all hover:no-underline [&[data-state=open]>svg]:rotate-180",
      className
    )}
    {...props}
  >
    <div className="flex items-center gap-3">
      {Icon && <Icon className="h-5 w-5 text-muted-foreground" />}
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-muted-foreground">{subtitle}</div>
      </div>
    </div>
    <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
  </AccordionPrimitive.Trigger>
))
Accordion09Trigger.displayName = "Accordion09Trigger"

const Accordion09Content = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
Accordion09Content.displayName = "Accordion09Content"

export {
  Accordion09,
  Accordion09Item,
  Accordion09Header,
  Accordion09Trigger,
  Accordion09Content,
} 