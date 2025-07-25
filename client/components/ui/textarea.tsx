
import * as React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...props }, ref) => (
    <textarea
      ref={ref}
      className={`form-control ${className}`.trim()}
      rows={props.rows || 3}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
