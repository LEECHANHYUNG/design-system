import type { CSSProperties, Ref } from "react";

import { composeRef } from "./composeRef";

type PropsRecord = Record<string, unknown>;
type EventHandler = (...args: unknown[]) => void;

function isEventHandler(key: string, value: unknown): value is EventHandler {
  return (
    key.startsWith("on") &&
    key.charAt(2) === key.charAt(2).toUpperCase() &&
    typeof value === "function"
  );
}

function isStyleObject(value: unknown): value is CSSProperties {
  return typeof value === "object" && value != null && !Array.isArray(value);
}

function callEventHandlers(next: EventHandler, previous: EventHandler): EventHandler {
  return (...args) => {
    next(...args);

    const event = args[0];
    if (typeof event === "object" && event != null && "defaultPrevented" in event) {
      if ((event as { defaultPrevented?: boolean }).defaultPrevented) {
        return;
      }
    }

    previous(...args);
  };
}

export function mergeProps<T extends PropsRecord>(...propSets: Array<T | undefined>): T {
  const result: PropsRecord = {};

  for (const props of propSets) {
    if (props == null) {
      continue;
    }

    for (const [key, value] of Object.entries(props)) {
      if (value === undefined) {
        continue;
      }

      const previous = result[key];

      if (key === "className") {
        result[key] = [previous, value].filter(Boolean).join(" ");
        continue;
      }

      if (key === "style" && isStyleObject(previous) && isStyleObject(value)) {
        result[key] = { ...previous, ...value };
        continue;
      }

      if (key === "ref") {
        result[key] = composeRef(
          previous as Ref<unknown> | undefined,
          value as Ref<unknown> | undefined,
        );
        continue;
      }

      if (isEventHandler(key, previous) && isEventHandler(key, value)) {
        result[key] = callEventHandlers(value, previous);
        continue;
      }

      result[key] = value;
    }
  }

  return result as T;
}
