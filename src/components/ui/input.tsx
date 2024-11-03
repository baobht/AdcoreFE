import * as React from "react";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
  fullWidth?: boolean;
  onIconClick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, startIcon, endIcon, onIconClick, fullWidth, ...props },
    ref
  ) => {
    const StartIcon = startIcon;
    const EndIcon = endIcon;
    return (
      <div className={cn("lg:w-1/4 w-1/2 relative", fullWidth && "!w-full")}>
        {StartIcon && (
          <div
            onClick={onIconClick}
            className="absolute left-1.5 top-1/2 transform -translate-y-1/2"
          >
            <StartIcon size={18} color="#0E2A46" />
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-14 w-full rounded-full border outline-black border-black bg-background px-8 py-2 text-lg placeholder:text-[#8E8E8E] disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <div
            onClick={onIconClick}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            <EndIcon color="#0E2A46" size={25} />
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
