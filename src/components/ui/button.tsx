import React from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = {
  children: React.ReactNode;

  variant?: "primary" | "secondary" | "text";

  size?: "xs" | "s" | "m" | "l";

  className?: string;

  disabled?: boolean;

  onClick?: () => void;

  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "m",
  className,
  disabled = false,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-sm font-medium focus:outline-none focus:ring-2 transition-all duration-200",

        variant === "primary" &&
          "bg-brand-primary text-white hover:bg-brand-hover focus:ring-brand-primary/50 border border-border-button",
        variant === "secondary" &&
          "bg-background-component text-text-black border border-border-button hover:bg-background-page focus:ring-border-default/50",
        variant === "text" &&
          "bg-transparent text-semantic-link hover:bg-background-page focus:ring-semantic-link/50 border-transparent",

        size === "xs" && "px-xs py-xs text-xs",
        size === "s" && "px-s py-s text-sm",
        size === "m" && "px-m py-m text-md",
        size === "l" && "px-l py-l text-lg",

        disabled
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer hover:shadow-sm",

        className
      )}>
      {children}
    </button>
  );
};

export default Button;
