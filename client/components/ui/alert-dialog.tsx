
import * as React from "react";

// Bootstrap Alert Dialog Components
// Usage: Control open/close state in parent, pass props as needed

type AlertDialogProps = {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actionLabel?: string;
  cancelLabel?: string;
  onAction?: () => void;
  children?: React.ReactNode;
};

export const AlertDialog: React.FC<AlertDialogProps> = ({
  open,
  onClose,
  title,
  description,
  actionLabel = "OK",
  cancelLabel = "Cancel",
  onAction,
  children,
}) => {
  if (!open) return null;
  return (
    <div className="modal fade show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            {title && <h5 className="modal-title">{title}</h5>}
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {description && <div className="mb-2">{description}</div>}
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              {cancelLabel}
            </button>
            <button type="button" className="btn btn-primary" onClick={onAction}>
              {actionLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
