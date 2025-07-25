import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

const variantClass: Record<string, string> = {
  default: 'badge bg-primary text-white',
  secondary: 'badge bg-secondary text-white',
  destructive: 'badge bg-danger text-white',
  outline: 'badge border border-dark text-dark bg-white',
};

function Badge({ className = '', variant = 'default', ...props }: BadgeProps) {
  const classes = [variantClass[variant] || variantClass.default, className].join(' ');
  return <div className={classes} {...props} />;
}

export { Badge };
