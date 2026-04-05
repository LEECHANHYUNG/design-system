# 스타일링 규칙

## PandaCSS Recipe

모든 컴포넌트 스타일은 PandaCSS recipe로 정의한다.

### 파일명
- `<Name>.styles.ts` (PascalCase + `.styles.ts`)
- 예: `Button.styles.ts`, `Tabs.styles.ts`, `Dialog.styles.ts`

### 변수명
- recipe: `<name>Style` (camelCase + Style)
- 타입: `<Name>Variants`
- 예: `buttonStyle`, `ButtonVariants`

### cva vs sva

| 기준 | 함수 | 예시 |
|------|------|------|
| 단일 엘리먼트 | `cva()` | Button, Badge, Input, Separator, Toggle |
| 멀티 슬롯 | `sva()` | Card, Tabs, Dialog, Checkbox, Switch, Avatar, Progress |

### cva 예시

```ts
import { cva, type RecipeVariantProps } from "@design-system/styled";

export const buttonStyle = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    _disabled: { opacity: 0.5, cursor: "not-allowed" },
  },
  variants: {
    variant: {
      solid: { bg: "blue.500", color: "white", _hover: { bg: "blue.600" } },
      outline: { bg: "transparent", borderWidth: "1px", borderColor: "blue.500" },
    },
    size: {
      sm: { px: "3", py: "1.5", fontSize: "sm" },
      md: { px: "4", py: "2", fontSize: "md" },
      lg: { px: "6", py: "3", fontSize: "lg" },
    },
  },
  defaultVariants: { variant: "solid", size: "md" },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>;
```

### sva 예시

```ts
import { sva, type RecipeVariantProps } from "@design-system/styled";

export const tabsStyle = sva({
  slots: ["root", "list", "tab", "panel"],
  base: {
    root: { width: "full" },
    list: { display: "flex", borderBottomWidth: "1px", borderColor: "gray.200" },
    tab: { px: "4", py: "2", cursor: "pointer" },
    panel: { p: "4" },
  },
  variants: {
    size: {
      sm: { tab: { px: "3", py: "1.5", fontSize: "xs" } },
      md: { tab: { px: "4", py: "2", fontSize: "sm" } },
      lg: { tab: { px: "5", py: "2.5", fontSize: "md" } },
    },
  },
  defaultVariants: { size: "md" },
});

export type TabsVariants = RecipeVariantProps<typeof tabsStyle>;
```

## className 합성

항상 `cx()`를 사용하여 recipe 클래스와 외부 className을 합성한다:

```ts
className={cx(buttonStyle({ variant, size }), className)}
```

## 인라인 CSS 지양

`style={{...}}`를 사용하지 않는다. PandaCSS의 `css()` 함수 또는 layout patterns를 사용한다:

```tsx
// BAD
<div style={{ display: "flex", gap: "8px" }}>

// GOOD
import { hstack } from "@design-system/styled";
<div className={hstack({ gap: "2" })}>
```
