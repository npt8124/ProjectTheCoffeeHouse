
import * as React from "react";

type SwitchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  className?: string;
};

export const Switch: React.FC<SwitchProps> = ({ checked, onChange, label, className = "", ...props }) => (
  <div className={`form-check form-switch ${className}`.trim()}>
    <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      checked={checked}
      onChange={onChange}
      {...props}
    />
    {label && <label className="form-check-label">{label}</label>}
  </div>
);
