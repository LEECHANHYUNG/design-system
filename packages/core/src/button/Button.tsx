import { isValidElement, type ComponentPropsWithRef } from "react";

import { cx } from "../../styled-system/css";
import { useRender, type RenderProp } from "../_lib";
import { buttonStyle, type ButtonVariants } from "./Button.styles";

export interface ButtonState {
  disabled: boolean;
}

export interface ButtonProps
  extends
    RenderProp<"button", ButtonState>,
    NonNullable<ButtonVariants>,
    ComponentPropsWithRef<"button"> {}

export function Button({
  className,
  disabled = false,
  onClick,
  render,
  size,
  type,
  variant,
  ...props
}: ButtonProps) {
  const rendersNativeButton =
    render == null || (isValidElement(render) && render.type === "button");

  const buttonProps = {
    ...props,
    className: cx(buttonStyle({ variant, size }), className),
    onClick: rendersNativeButton
      ? onClick
      : disabled
        ? (event) => {
            event.preventDefault();
            event.stopPropagation();
          }
        : onClick,
    "aria-disabled": !rendersNativeButton && disabled ? true : undefined,
    "data-disabled": !rendersNativeButton && disabled ? "" : undefined,
    disabled: rendersNativeButton ? disabled : undefined,
    tabIndex: !rendersNativeButton && disabled ? -1 : props.tabIndex,
    type: rendersNativeButton ? (type ?? "button") : undefined,
  } satisfies ComponentPropsWithRef<"button"> & { "data-disabled"?: "" };

  return useRender({
    defaultTag: "button",
    props: buttonProps,
    render,
    state: { disabled },
  });
}
