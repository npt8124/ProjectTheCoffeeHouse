
import * as React from "react";

type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  size?: number | string;
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  fallback = null,
  size = 40,
  className = "",
  ...props
}) => (
  <div
    className={`d-inline-flex align-items-center justify-content-center rounded-circle overflow-hidden bg-light border ${className}`.trim()}
    style={{ width: size, height: size, minWidth: size, minHeight: size }}
    {...props}
  >
    {src ? (
      <img
        src={src}
        alt={alt}
        className="w-100 h-100 object-fit-cover rounded-circle"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ) : (
      fallback
    )}
  </div>
);
