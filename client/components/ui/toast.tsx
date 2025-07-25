
import * as React from "react";

type ToastProps = {
  show: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  variant?: "default" | "destructive";
  children?: React.ReactNode;
};

export const Toast: React.FC<ToastProps> = ({
  show,
  onClose,
  title,
  description,
  actionLabel,
  onAction,
  variant = "default",
  children,
}) => {
  if (!show) return null;
  const toastClass = variant === "destructive" ? "toast align-items-center text-bg-danger border-0 show" : "toast align-items-center text-bg-primary border-0 show";
  return (
    <div className={toastClass} role="alert" aria-live="assertive" aria-atomic="true" style={{ position: "fixed", top: 20, right: 20, zIndex: 1080 }}>
      <div className="d-flex">
        <div className="toast-body">
          {title && <strong className="me-2">{title}</strong>}
          {description && <span>{description}</span>}
          {children}
        </div>
        <button type="button" className="btn-close me-2 m-auto" aria-label="Close" onClick={onClose}></button>
      </div>
      {actionLabel && (
        <div className="mt-2 pt-2 border-top">
          <button type="button" className="btn btn-sm btn-light" onClick={onAction}>{actionLabel}</button>
        </div>
      )}
    </div>
  );
};
