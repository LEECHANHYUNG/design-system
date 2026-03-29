import type { Placement } from "@floating-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Tooltip } from "../src/components/tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

const placements: Placement[] = [
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-start",
  "bottom",
  "bottom-end",
  "left-start",
  "left",
  "left-end",
];

const triggerStyle: React.CSSProperties = {
  padding: "8px 16px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  backgroundColor: "#f5f5f5",
  cursor: "pointer",
  fontSize: "13px",
  fontFamily: "monospace",
};

export const AllPlacements: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, auto)",
        gridTemplateRows: "repeat(4, auto)",
        gap: "12px",
        justifyContent: "center",
        alignItems: "center",
        padding: "120px 200px",
      }}
    >
      {/* Row 1: top-start, top, top-end */}
      <Tooltip content="top-start" placement="top-start">
        <button style={triggerStyle}>top-start</button>
      </Tooltip>
      <Tooltip content="top" placement="top">
        <button style={triggerStyle}>top</button>
      </Tooltip>
      <Tooltip content="top-end" placement="top-end">
        <button style={triggerStyle}>top-end</button>
      </Tooltip>

      {/* Row 2: left-start, (empty), right-start */}
      <Tooltip content="left-start" placement="left-start">
        <button style={triggerStyle}>left-start</button>
      </Tooltip>
      <div />
      <Tooltip content="right-start" placement="right-start">
        <button style={triggerStyle}>right-start</button>
      </Tooltip>

      {/* Row 3: left, (empty), right */}
      <Tooltip content="left" placement="left">
        <button style={triggerStyle}>left</button>
      </Tooltip>
      <div />
      <Tooltip content="right" placement="right">
        <button style={triggerStyle}>right</button>
      </Tooltip>

      {/* Row 4: left-end, (empty), right-end */}
      <Tooltip content="left-end" placement="left-end">
        <button style={triggerStyle}>left-end</button>
      </Tooltip>
      <div />
      <Tooltip content="right-end" placement="right-end">
        <button style={triggerStyle}>right-end</button>
      </Tooltip>

      {/* Row 5: bottom-start, bottom, bottom-end */}
      <Tooltip content="bottom-start" placement="bottom-start">
        <button style={triggerStyle}>bottom-start</button>
      </Tooltip>
      <Tooltip content="bottom" placement="bottom">
        <button style={triggerStyle}>bottom</button>
      </Tooltip>
      <Tooltip content="bottom-end" placement="bottom-end">
        <button style={triggerStyle}>bottom-end</button>
      </Tooltip>
    </div>
  ),
};
