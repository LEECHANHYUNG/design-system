# Storybook 규칙

## 카테고리

모든 컴포넌트는 `Components/<Name>` 하위에 위치한다:

```ts
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};
```

## 필수 스토리

모든 컴포넌트는 다음 스토리를 반드시 포함한다:

### 1. Default
기본 props. `args`를 사용하여 Storybook controls와 자동 연동.

```ts
export const Default: Story = {
  args: {
    children: "Button",
    variant: "solid",
    size: "md",
  },
};
```

### 2. Variants
모든 variant를 나란히 표시. `render` 함수 사용.

```ts
export const Variants: Story = {
  render: () => (
    <div className={hstack({ gap: "4" })}>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};
```

### 3. Sizes
size variant가 있는 경우 필수.

```ts
export const Sizes: Story = {
  render: () => (
    <div className={hstack({ gap: "4", alignItems: "center" })}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
```

### 4. States
disabled, loading 등 상태별 표시.

```ts
export const States: Story = {
  render: () => (
    <div className={hstack({ gap: "4" })}>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};
```

### 5. Composition (compound 컴포넌트 전용)
서브컴포넌트 조합 예시.

```ts
export const Composition: Story = {
  render: () => (
    <Tabs.Root>
      <Tabs.List>
        <Tabs.Tab value="one">Tab 1</Tabs.Tab>
        <Tabs.Tab value="two">Tab 2</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="one">Content 1</Tabs.Panel>
      <Tabs.Panel value="two">Content 2</Tabs.Panel>
    </Tabs.Root>
  ),
};
```

## 레이아웃

스토리 레이아웃에는 PandaCSS 패턴 유틸리티를 사용한다:

```ts
import { hstack, vstack, grid } from "@design-system/styled";
```

인라인 `style={{...}}`는 사용하지 않는다.

## argTypes

variant props에 대해 `argTypes`를 설정하여 controls에서 선택할 수 있게 한다:

```ts
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};
```
