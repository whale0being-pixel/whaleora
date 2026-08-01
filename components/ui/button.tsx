import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-full px-8 py-4 text-sm font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-[#0F2643] text-white hover:bg-[#192340]"
          : "border border-[#0F2643]/20 text-[#0F2643] hover:bg-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}