import { cx } from "../styled-system/css";
import { buttonStyle, type ButtonVariants } from "./Button.styles";

export interface ButtonProps
  extends NonNullable<ButtonVariants>, React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ variant, size, className, children, ...props }: ButtonProps) {
  return (
    <button className={cx(buttonStyle({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}
