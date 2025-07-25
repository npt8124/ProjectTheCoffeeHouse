import * as React from "react";

type ToggleGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  vertical?: boolean;
};

export const ToggleGroup: React.FC<ToggleGroupProps> = ({ children, vertical = false, className = "", ...props }) => (
  <div
    className={`btn-group${vertical ? "-vertical" : ""} ${className}`.trim()}
    role="group"
    {...props}
  >
    {children}
  </div>
);

type ToggleGroupItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export const ToggleGroupItem = React.forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ active = false, className = "", ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={`btn btn-outline-primary${active ? " active" : ""} ${className}`.trim()}
      aria-pressed={active}
      {...props}
    />
  )
);
ToggleGroupItem.displayName = "ToggleGroupItem";
