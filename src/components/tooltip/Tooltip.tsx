import React, { ReactNode, useState } from "react";
import {
  useFloating,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  offset,
  flip,
  shift,
  autoUpdate,
  type Placement,
} from "@floating-ui/react";

export interface TooltipProps {
  content: ReactNode;
  placement?: Placement;
  offsetValue?: number;
  children: React.ReactElement<Record<string, unknown>>;
}

export function Tooltip({
  content,
  placement = "top",
  offsetValue = 8,
  children,
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [offset(offsetValue), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { delay: { open: 100, close: 0 } });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      {React.cloneElement(children, {
        ref: refs.setReference,
        ...getReferenceProps(),
      })}
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{
            ...floatingStyles,
            backgroundColor: "#222",
            color: "#fff",
            padding: "6px 12px",
            borderRadius: "6px",
            fontSize: "14px",
            whiteSpace: "nowrap",
            zIndex: 1000,
          }}
          {...getFloatingProps()}
        >
          {content}
        </div>
      )}
    </>
  );
}
