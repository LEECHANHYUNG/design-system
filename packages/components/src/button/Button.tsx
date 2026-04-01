import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";

interface ButtonState {
	disabled: boolean;
}

interface ButtonProps extends useRender.ComponentProps<"button", ButtonState> {
	disabled?: boolean;
}

function Button(props: ButtonProps) {
	const { render, disabled = false, ...otherProps } = props;

	const state = { disabled };

	const defaultProps: useRender.ElementProps<"button"> = {
		type: "button",
		disabled,
	};

	const element = useRender({
		defaultTagName: "button",
		render,
		state,
		props: mergeProps<"button">(defaultProps, otherProps),
	});

	return element;
}

export { Button };
export type { ButtonProps };
