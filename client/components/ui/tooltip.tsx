import * as React from "react";

type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactElement<any>;
  placement?: "top" | "bottom" | "left" | "right";
};

export const Tooltip: React.FC<TooltipProps> = ({ content, children, placement = "top" }) => {
  // Bootstrap tooltip requires initialization via JS, but for React, we use title attribute for simple cases
  // For advanced, use a library or custom hook
  return React.cloneElement(children, {
    title: typeof content === "string" ? content : undefined,
    'data-bs-toggle': "tooltip",
    'data-bs-placement': placement,
    // For non-string content, fallback to aria-label
    'aria-label': typeof content !== "string" ? undefined : content,
  });
};
