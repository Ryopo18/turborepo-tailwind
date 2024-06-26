import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonStyles = cva("text-white", {
  variants: {
    variant: {
      primary: "bg-blue-400",
      secondary: "bg-gray-400",
      danger: "bg-red-400",
    },
    size: {
      small: "w-4 h-2",
      medium: "w-20 h-10",
      large: "w-40 h-20",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

type ButtonStylesProps = VariantProps<typeof buttonStyles>;

interface ButtonProps extends ButtonStylesProps {
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant, size, children }) => {
  return (
    <button className={buttonStyles({ variant, size })}>
      {children || "Button"}
    </button>
  );
};
