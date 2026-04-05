import type { MutableRefObject, Ref, RefCallback } from "react";

function setRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (typeof ref === "function") {
    ref(value);
    return;
  }

  if (ref == null) {
    return;
  }

  (ref as MutableRefObject<T | null>).current = value;
}

export function composeRef<T>(...refs: Array<Ref<T> | undefined>): RefCallback<T> | undefined {
  const validRefs = refs.filter((ref): ref is Ref<T> => ref != null);

  if (validRefs.length === 0) {
    return undefined;
  }

  return (node) => {
    for (const ref of validRefs) {
      setRef(ref, node);
    }
  };
}
