import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-heading",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Compliance Theme Variants
        compliance: "bg-compliance-primary text-compliance-foreground hover:bg-compliance-accent shadow-compliance hover:shadow-glow hover:-translate-y-0.5",
        "compliance-outline": "border-2 border-compliance-primary text-compliance-primary bg-transparent hover:bg-compliance-primary hover:text-compliance-foreground hover:shadow-compliance",
        // RegTech Theme Variants  
        regtech: "bg-regtech-primary text-regtech-foreground hover:bg-regtech-accent shadow-regtech hover:shadow-glow hover:-translate-y-0.5",
        "regtech-outline": "border-2 border-regtech-primary text-regtech-primary bg-transparent hover:bg-regtech-primary hover:text-regtech-foreground hover:shadow-regtech",
        // Onboarding Theme Variants
        onboarding: "bg-onboarding-primary text-onboarding-foreground hover:bg-onboarding-accent shadow-onboarding hover:shadow-glow hover:-translate-y-0.5",
        "onboarding-outline": "border-2 border-onboarding-primary text-onboarding-primary bg-transparent hover:bg-onboarding-primary hover:text-onboarding-foreground hover:shadow-onboarding",
        // Special CTA Variant
        hero: "bg-gradient-to-r from-compliance-primary to-regtech-primary text-white font-semibold shadow-elegant hover:shadow-glow hover:-translate-y-1 hover:scale-105 transition-all duration-300",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-lg px-10 text-base",
        xl: "h-16 rounded-xl px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
