import * as React from "react";

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface AccordionHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export interface AccordionBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const Accordion: React.FC<AccordionProps> = ({ className = '', ...props }) => (
  <div className={["accordion", className].join(' ')} {...props} />
);

const AccordionItem: React.FC<AccordionItemProps> = ({ className = '', ...props }) => (
  <div className={["accordion-item", className].join(' ')} {...props} />
);

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ className = '', ...props }) => (
  <h2 className={["accordion-header", className].join(' ')} {...props} />
);

const AccordionTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className = '', children, ...props }) => (
  <button className={["accordion-button", className].join(' ')} type="button" {...props}>
    {children}
  </button>
);

const AccordionBody: React.FC<AccordionBodyProps> = ({ className = '', ...props }) => (
  <div className={["accordion-collapse collapse", className].join(' ')} {...props} />
);

export { Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionBody };
