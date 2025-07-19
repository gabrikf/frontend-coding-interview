import { forwardRef, type InputHTMLAttributes, type ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  afterlabel?: ReactElement;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-[319px]">
        {label && (
          <div className="flex justify-between items-end">
            <label className="text-sm font-medium text-label">{label}</label>
            {props.afterlabel && props.afterlabel}
          </div>
        )}
        <input
          ref={ref}
          className={twMerge(
            "h-[44px] px-4 text-sm text-gray-900",
            "border border-gray-300 rounded-[8px]",
            "focus:outline-none focus:ring-2 focus:ring-blue-500",
            "opacity-100",
            error ? "border-red-500" : "border-gray-300",
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
