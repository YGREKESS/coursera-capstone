import React from "react";

type Props = {
  size?: "sm" | "md";
  variant?: "yellow" | "green";
  type?: "button" | "submit" | "reset";
  customStyle?: React.CSSProperties;
  label: string;
  cb?: () => void;
};

const styles: { [k: string]: React.CSSProperties } = {
  sm: {
    border: "none",
    borderRadius: 10,
    padding: "0.5rem 1rem",
  },
  md: {
    border: "none",
    borderRadius: 10,
    padding: "1rem 1.5rem",
  },
};

const variants: { [k: string]: React.CSSProperties } = {
  yellow: {
    fontSize: 16,
    fontWeight: 500,
    color: "#000",
    backgroundColor: "#F4CE14",
  },
  green: {
    fontSize: 16,
    fontWeight: 500,
    color: "#fff",
    backgroundColor: "#495E57",
  },
};

const Button = ({
  size = "sm",
  customStyle,
  variant = "green",
  type = "button",
  label,
  cb,
}: Props) => {
  return (
    <button
      type={type}
      style={{ ...customStyle, ...styles[size], ...variants[variant] }}
      onClick={() => cb?.()}
    >
      {label}
    </button>
  );
};

export default Button;
