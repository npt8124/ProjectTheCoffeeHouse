
import * as React from "react";

type ToggleProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  pressed?: boolean;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
};

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ pressed = false, variant = "default", size = "default", className = "", ...props }, ref) => {
    let btnClass = "btn";
    btnClass += variant === "outline" ? " btn-outline-primary" : " btn-primary";
    if (size === "sm") btnClass += " btn-sm";
    if (size === "lg") btnClass += " btn-lg";
    if (pressed) btnClass += " active";
    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={pressed}
        className={`${btnClass} ${className}`.trim()}
        {...props}
      />
    );
  }
);
Toggle.displayName = "Toggle";
