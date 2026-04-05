import {
  cloneElement,
  createElement,
  isValidElement,
  type ComponentPropsWithRef,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";

import { mergeProps } from "./mergeProps";

export interface RenderProp<T extends ElementType, State> {
  render?: ReactElement | ((props: ComponentPropsWithRef<T>, state: State) => ReactNode);
}

interface UseRenderOptions<T extends ElementType, State> extends RenderProp<T, State> {
  defaultTag: T;
  props: ComponentPropsWithRef<T>;
  state: State;
}

export function useRender<T extends ElementType, State>({
  defaultTag,
  props,
  render,
  state,
}: UseRenderOptions<T, State>): ReactNode {
  if (render == null) {
    return createElement(defaultTag, props);
  }

  if (typeof render === "function") {
    return render(props, state);
  }

  if (isValidElement(render)) {
    return cloneElement(
      render,
      mergeProps(render.props as Record<string, unknown>, props as Record<string, unknown>),
    );
  }

  return createElement(defaultTag, props);
}
