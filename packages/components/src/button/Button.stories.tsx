import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: "Button",
	},
};

export const Disabled: Story = {
	args: {
		children: "Disabled",
		disabled: true,
	},
};

export const RenderAsAnchor: Story = {
	name: "render - <a> 태그로 렌더링",
	args: {
		children: "Link Button",
		render: <a href="https://example.com" />,
	},
};

export const RenderCallback: Story = {
	name: "render - 콜백으로 커스텀 렌더링",
	render: () => (
		<Button
			render={(props, state) => (
				<button {...props}>
					{props.children}
					{state.disabled ? " (비활성)" : " (활성)"}
				</button>
			)}
		>
			상태 표시 버튼
		</Button>
	),
};

export const RenderCallbackDisabled: Story = {
	name: "render - 콜백 (disabled)",
	render: () => (
		<Button
			disabled
			render={(props, state) => (
				<button {...props}>
					{props.children}
					{state.disabled ? " (비활성)" : " (활성)"}
				</button>
			)}
		>
			상태 표시 버튼
		</Button>
	),
};
