import { twMerge } from "tailwind-merge";

export const Button = ({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={twMerge(
        "px-4 py-2 bg-primary text-white text-sm font-medium rounded-md cursor-pointer",
        "hover:bg-blue-700 transition-colors",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
