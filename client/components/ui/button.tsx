import * as React from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  // ...existing code...
}

const variantClass: Record<string, string> = {
  default: 'btn',
  destructive: 'btn btn-danger',
  outline: 'btn btn-outline-secondary',
  secondary: 'btn btn-secondary',
  ghost: 'btn btn-light',
  link: 'btn btn-link',
};

const sizeClass: Record<string, string> = {
  default: '',
  sm: 'btn-sm',
  lg: 'btn-lg',
  icon: 'p-0 d-flex align-items-center justify-content-center',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    const classes = [
      variantClass[variant] || variantClass.default,
      sizeClass[size] || '',
      className,
    ].join(' ');
    return <button className={classes} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button };
